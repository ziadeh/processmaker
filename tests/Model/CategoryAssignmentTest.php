<?php
namespace Tests\Model;

use Tests\TestCase;
use ProcessMaker\Models\Process;
use ProcessMaker\Models\ProcessCategory;
use ProcessMaker\Models\CategoryAssignment;

class CategoryAssignmentTest extends TestCase
{
    public function testGetCategories() {
        $process = factory(Process::class)->create();
        $category1 = factory(ProcessCategory::class)->create();
        $category2 = factory(ProcessCategory::class)->create();

        CategoryAssignment::create([
            'assignable_type' => Process::class,
            'assignable_id' => $process->id,
            'category_type' => ProcessCategory::class,
            'category_id' => $category1->id,
        ]);

        CategoryAssignment::create([
            'assignable_type' => Process::class,
            'assignable_id' => $process->id,
            'category_type' => ProcessCategory::class,
            'category_id' => $category2->id,
        ]);

        $this->assertCount(2, $process->categories());
        $this->assertTrue($process->categories()->contains($category1));
        $this->assertTrue($process->categories()->contains($category2));
    }
    
    public function testAssignToCategory() {
        $process = factory(Process::class)->create();
        $category = factory(ProcessCategory::class)->create();

        $process->categoryAssignments()->create([
            'category_type' => ProcessCategory::class,
            'category_id' => $category->id
        ]);
        $this->assertCount(1, $process->categories());
        $this->assertTrue($process->categories()->contains($category));
    }
}