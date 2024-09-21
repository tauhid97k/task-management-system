<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Filters\Api\TaskFilter;
use App\Http\Requests\Api\Task\StoreTaskRequest;
use App\Models\Task;
use App\Traits\ApiResponses;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    use ApiResponses;

    /**
     * Display a listing of the resource.
     */
    public function index(TaskFilter $filters)
    {
        $tasks = Task::filter($filters)->latest()->paginate();

        return response()->json($tasks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        Task::create($request->validated());

        return $this->success('Task added');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $task = Task::findOrFail($id);

        return response()->json($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $task = Task::findOrFail($id);

        $task->update($request->validated());

        return $this->success('Task updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Task::destroy($id);

        return $this->success('Task deleted');
    }
}
