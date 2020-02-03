<?php

namespace ProcessMaker\Http\Controllers\Api;

use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Illuminate\Http\Request;
use ProcessMaker\Models\User;
use Illuminate\Support\Facades\Auth;
use ProcessMaker\Models\ProcessRequestToken;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Http\Resources\Metric as MetricResource;

class MetricsController extends Controller
{
    public function showTasksPerDay(Request $request)
    {
        $query = ProcessRequestToken::select('id', 'created_at', 'completed_at')
                                    ->where('element_type', 'task');
        
        if ($request->has('user_id')) {
            if (Auth::user()->is_administrator || Auth::user()->id == $request->input('user_id')) {
                $query->where('user_id', $request->input('user_id'));
            } else {
                throw new AuthorizationException(__('Not authorized to view metrics for this user.'));
            }
        } else {
            if (! Auth::user()->is_administrator) {
                $query->where('user_id', Auth::user()->id);
            }
        }
        
        $queryOpen = clone $query;
        $queryCompleted = clone $query;
        
        $weekAgo = CarbonImmutable::createMidnightDate()->subWeek();
        
        $open = $queryOpen->where('status', 'ACTIVE')
                          ->where('created_at', '>', $weekAgo)
                          ->get();

        $completed = $queryCompleted->where('status', 'CLOSED')
                                    ->where('completed_at', '>', $weekAgo)
                                    ->get();
        $stats = [];
        
        for ($i = 1; $i <= 7; $i++) {
            $stats[$weekAgo->addDays($i)->format('l')] = [
                'open' => 0,
                'completed' => 0,
            ];
        }
                        
        foreach ($open as $task) {
            $day = $task->created_at->startOfDay()->format('l');
            if (array_key_exists($day, $stats)) {
                $stats[$day]['open']++;
            }
        }
        
        foreach ($completed as $task) {
            $day = $task->created_at->startOfDay()->format('l');
            if (array_key_exists($day, $stats)) {
                $stats[$day]['completed']++;
            }
        }
        
        return new MetricResource($stats);
    }

    public function showTaskCompletion(Request $request)
    {
        $weekAgo = CarbonImmutable::createMidnightDate()->subWeek();

        $query = ProcessRequestToken::select('id', 'created_at', 'completed_at')
                                    ->where('element_type', 'task')
                                    ->where('status', 'CLOSED')
                                    ->where('completed_at', '>', $weekAgo);
        
        if ($request->has('user_id')) {
            if (Auth::user()->is_administrator || Auth::user()->id == $request->input('user_id')) {
                $query->where('user_id', $request->input('user_id'));
            } else {
                throw new AuthorizationException(__('Not authorized to view metrics for this user.'));
            }
        } else {
            if (! Auth::user()->is_administrator) {
                $query->where('user_id', Auth::user()->id);
            }
        }
                
        $stats = [];
        
        for ($i = 1; $i <= 7; $i++) {
            $stats[$weekAgo->addDays($i)->format('l')] = [
                'lengths' => [],
                'average' => 0,
            ];
        }
        
        $completed = $query->get();
                        
        foreach ($completed as $task) {
            $length = $task->completed_at->diffInSeconds($task->created_at);
            
            $day = $task->completed_at->startOfDay()->format('l');
            if (array_key_exists($day, $stats)) {
                $stats[$day]['lengths'][] = $length;
            }
        }
        
        foreach ($stats as &$day) {
            if (count($day['lengths'])) {
                $day['average'] = ceil((array_sum($day['lengths']) / count($day['lengths'])) / 60 / 60);
            }
        }
        
        return new MetricResource($stats);
    }
}
