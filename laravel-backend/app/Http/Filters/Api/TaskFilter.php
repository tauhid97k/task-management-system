<?php

namespace App\Http\Filters\Api;

class TaskFilter extends QueryFilter
{
    // Search by name or email
    public function search($value)
    {
        return $this->builder->where('title', 'like', "%{$value}%");
    }

    // Status filter (single/multiple)
    public function status($value)
    {
        return $this->builder->whereIn('status', explode(',', $value));
    }

    // Date Sorting
    public function date($value)
    {
        $sortOrder = in_array(strtolower($value), ['asc', 'desc']) ? $value : 'asc';

        return $this->builder->orderBy('due_date', $sortOrder);
    }
}
