**Angular Components — Deep Dive**

This repository contains an Angular example application showcasing reusable components and small dashboards. It is intended as a learning and reference project for building and composing Angular components.

**Prerequisites**:

- **Node**: Install Node.js (16+ recommended).
- **Package manager**: `npm` (bundled with Node) or `yarn`.
- **Angular CLI** (optional): Install globally with `npm i -g @angular/cli` for convenience.

**Quick start**:

1. Install dependencies:

```powershell
npm install
```

2. Run the dev server:

```powershell
npm start
# or: ng serve
```

3. Open the app in your browser at `http://localhost:4200`.

**Available scripts** (from `package.json`):

- **start**: `ng serve` — runs the development server.
- **build**: `ng build` — builds the app for production.
- **watch**: `ng build --watch --configuration development` — incremental builds during development.
- **test**: `ng test` — runs unit tests via Karma/Jasmine.

Run a script with `npm run <script>` or the equivalent `ng` command.

**Project structure (important files)**

- `src/app/` — application sources.
- `src/app/dashboards/` — example dashboard components:
  - `dashboard-item/` — small reusable widget component.
  - `server-status/` — server status widget.
  - `tickets/` — ticket list and ticket detail components.
  - `traffic/` — traffic visualization component.
- `src/app/header/` — top-level header component.
- `src/app/shared/` — shared components and controls, including:
  - `button/` — shared button component.
  - `control/` — shared control component (`control.component.ts`).

**Notes about this repo**

- Angular version: v18 (see `package.json` deps).
- This project is scaffolded with the Angular CLI and keeps a minimal, focused component layout for experimentation and learning.

**Development tips**

- Use the Angular CLI to generate new components: `ng generate component my-component`.
- Prefer small, focused components, and keep shared UI elements in `src/app/shared/`.
- When adding features, add unit tests alongside code in the same folder.

**Testing**

- Unit tests use Karma and Jasmine. Run them with:

```powershell
npm test
```

**Contributing**

- Feel free to open issues or pull requests. Keep PRs small and focused.
- Follow Angular style guide recommendations for project structure and naming.

**License**

