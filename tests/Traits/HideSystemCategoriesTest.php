<?php
namespace Tests\Model;

use Tests\TestCase;
use ProcessMaker\Models\Process;
use ProcessMaker\Models\ProcessCategory;
use ProcessMaker\Models\Script;
use ProcessMaker\Models\Screen;

class HasSystemCategoriesTest extends TestCase
{
    private function categoryFiltered($model) {
        $processCategory = factory($model . 'Category')->create([
            'is_system' => true,
        ]);

        $this->assertFalse(
            call_user_func($model . 'Category::all')->contains($processCategory)
        );
    }

    public function testCategoryFiltered() {
        $this->categoryFiltered(Process::class);
        $this->categoryFiltered(Script::class);
    }
    
    private function resourceInCategoryFiltered($model) {
        $prefix = strtolower(substr(strrchr($model, '\\'), 1));
        $processCategory = factory($model . 'Category')->create([
            'is_system' => true,
        ]);
        $process = factory($model)->create([
            $prefix . '_category_id' => $processCategory->id
        ]);

        $this->assertFalse(
            call_user_func($model . '::all')->contains($process)
        );
    }
    
    public function testResourceInCategoryFiltered() {
        $this->resourceInCategoryFiltered(Process::class);
        $this->resourceInCategoryFiltered(Script::class);
    }
    
    private function resourceWithoutCategoryNotFiltered($model) {
        $prefix = strtolower(substr(strrchr($model, '\\'), 1));
        $process = factory($model)->create([
            $prefix . '_category_id' => null
        ]);
        
        $this->assertTrue(
            call_user_func($model . '::all')->contains($process)
        );
    }
    
    public function testResourceWithoutCategoryNotFiltered() {
        $this->resourceWithoutCategoryNotFiltered(Process::class);
        $this->resourceWithoutCategoryNotFiltered(Script::class);
    }

    // public function testCanAny()
    // {
    //     $user = factory(User::class)->create();
        
    //     $p1 = factory(Permission::class)->create(['name' => 'foo']);
    //     $p2 = factory(Permission::class)->create(['name' => 'bar']);
    //     $p3 = factory(Permission::class)->create(['name' => 'baz']);
        
    //     (new AuthServiceProvider(app()))->boot();

    //     $this->assertFalse($user->can('bar'));
    //     $this->assertFalse($user->canAny('foo|bar'));
        
    //     $user->permissions()->attach($p2);
    //     $user->permissions()->attach($p3);
    //     $user->refresh();

    //     $this->assertTrue($user->can('bar'));
    //     $this->assertEquals('bar', $user->canAny('foo|bar'));
    //     $this->assertEquals('baz', $user->canAny('foo|baz'));
    // }
}