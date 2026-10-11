# PortfolioDashboard

A Laravel + Vue + Inertia dashboard starter for a portfolio or admin app, built with modern tooling and a clean UI.

## Tech stack

- Laravel 13
- PHP 8.3+
- Vue 3
- Inertia.js
- Tailwind CSS
- Vite
- Pest for testing

## Features

- Authentication and user management
- Settings pages
- Portfolio/dashboard sections
- Contact/contact form support
- Responsive UI with reusable Vue components

## Requirements

- PHP 8.3+
- Composer
- Node.js 18+
- npm or pnpm
- MySQL/SQLite/Postgres-compatible database

## Local setup

1. Clone the repository
2. Copy the environment file:
   ```bash
   cp .env.example .env
   ```
3. Generate the application key:
   ```bash
   php artisan key:generate
   ```
4. Install PHP dependencies:
   ```bash
   composer install
   ```
5. Install frontend dependencies:
   ```bash
   npm install
   ```
6. Create and configure your database in `.env`
7. Run migrations:
   ```bash
   php artisan migrate
   ```

## Run the app

Start the Laravel app with Vite in development mode:

```bash
npm run dev
```

Or run the full Laravel development stack:

```bash
composer run dev
```

## Build for production

```bash
npm run build
```

## Testing

```bash
php artisan test
```

## Code quality

```bash
composer run lint
composer run types:check
```

## Project structure

```text
app/             Laravel application code
config/          Configuration files
database/        Migrations and seeders
public/          Public assets
resources/       Vue components, layouts, CSS, and views
routes/          Route definitions
tests/           Automated tests
vite.config.ts   Vite configuration
package.json     Frontend scripts and dependencies
composer.json    PHP dependencies and Laravel scripts
```

## Notes

This project uses Laravel’s Inertia stack with Vue on the frontend, so typical frontend changes happen under `resources/js` while backend logic and routes remain in the Laravel app.
