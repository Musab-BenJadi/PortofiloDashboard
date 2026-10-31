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
        'title',         // Project title in English and Arabic (JSON)
        'slug',          // Unique URL-friendly identifier for the project
        'subtitle',      // Short project subtitle in English and Arabic (JSON)
        'description',   // Main project summary in English and Arabic (JSON)
        'content',       // Detailed project content in English and Arabic (JSON)
        'thumbnail',     // Path or URL of the project's main image
        'gallery',       // Array of additional project image paths or URLs (JSON)
        'live_url',      // URL of the deployed project
        'github_url',    // URL of the project's GitHub repository
        'project_type',  // Project category or type, e.g. SaaS, E-commerce, Dashboard
        'status',        // Project status, e.g. in_progress, completed, on_hold
        'is_featured',   // Whether the project is highlighted on the portfolio
        'is_published',  // Whether the project is publicly visible on the website
        'sort_order',    // Controls the project's display order (lower values appear first)
        'completed_at',  // Date when the project was completed
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

    public function skills(): BelongsToMany
    {
        return $this->belongsToMany(Skill::class);
    }
}
