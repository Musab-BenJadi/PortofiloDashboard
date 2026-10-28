<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
class Project extends Model
{
    use HasFactory, HasTranslations, SoftDeletes;

    public array $translatable = [
        'title',
        'subtitle',
        'description',
        'content',
    ];

    protected $fillable = [
        'title',
        'slug',
        'subtitle',
        'description',
        'content',
        'thumbnail',
        'gallery',
        'live_url',
        'github_url',
        'project_type',
        'status',
        'is_featured',
        'is_published',
        'sort_order',
        'completed_at',
    ];

    protected function casts(): array
    {
        return [
            'gallery' => 'array',
            'is_featured' => 'boolean',
            'is_published' => 'boolean',
            'completed_at' => 'date',
            'sort_order' => 'integer',
        ];
    }

    // public function skills(): BelongsToMany
    // {
    //     return $this->belongsToMany(Skill::class);
    // }
}
