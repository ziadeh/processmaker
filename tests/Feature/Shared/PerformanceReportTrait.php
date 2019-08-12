<?php

namespace Tests\Feature\Shared;

trait PerformanceReportTrait
{
    private static $measurements = [];

    private function addMeasurement($measure)
    {
        static::$measurements[] = $measure;
    }

    private function cleanMeasurements()
    {
        static::$measurements = [];
    }

    private function writeReport($output, $tpl = 'performance.template.php')
    {
        $report = fopen($output, 'w');
        ob_start();
        include __DIR__ . '/' . $tpl;
        fwrite($report, ob_get_clean());
        fclose($report);
    }
}
