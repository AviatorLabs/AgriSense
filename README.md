# AgriSense

**Agricultural Intelligence and Farm Management Platform**

AgriSense is a farmer-centered platform being developed to help farmers organize farm information and manage key stages of agricultural work. The initial project context is Ethiopia.

The long-term product direction covers farm planning, crop information, crop monitoring, harvest records, market intelligence, and farm economics. The current development focus is a practical, dependable farm-management MVP—not an AI-first product.

> **Project status:** Early development. The React + Vite frontend foundation and public landing page are in the repository. The farmer dashboard and core farm-management screens are planned frontend work. The Express backend and database integration are planned, not yet implemented.

## Technology stack

| Area | Technology | Status |
|---|---|---|
| Frontend | React + Vite | Initialized |
| Language | JavaScript | In use |
| Styling | Tailwind CSS v4 | Integrated |
| Backend | Node.js + Express.js | Planned |
| Database | MongoDB Atlas | Planned |
| ODM | Mongoose | Planned |
| Validation | Zod | Planned |
| Code quality | ESLint + Prettier | Configured for frontend |
| Testing | Vitest + Playwright | Planned |
| Continuous integration | GitHub Actions | Frontend lint, format, and build checks |

The team has agreed to use JavaScript. Next.js and TypeScript are not part of the confirmed project stack.

## Repository structure

The repository currently contains the frontend application and project documentation. The backend directory will be added when backend implementation begins.

```text
AgriSense/
├── .github/
│   └── workflows/
│       └── frontend-ci.yml
├── docs/
│   ├── architecture/
│   │   ├── system-architecture.md
│   │   └── technical-decisions.md
│   ├── development/
│   │   ├── coding-standards.md
│   │   └── git-workflow.md
│   └── project/
│       ├── development-schedule.md
│       ├── project-roadmap.md
│       └── team-responsibilities.md
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── componentes/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── .gitignore
├── .prettierignore
├── .prettierrc.json
└── README.md
```

The current frontend includes the public landing page and its UI components. The directory structure will evolve as the dashboard, farm management, crop library, and crop planning features are implemented.

## Getting started

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/) — use Node.js 24.x to match the project's current CI environment.
- npm — included with Node.js.
- [Git](https://git-scm.com/).
- [Visual Studio Code](https://code.visualstudio.com/) or another editor.

Verify your installations:

```bash
node --version
npm --version
git --version
```

### 1. Clone the repository

```bash
git clone https://github.com/AviatorLabs/AgriSense.git
cd AgriSense
```

### 2. Install frontend dependencies

Run these commands from the repository root:

```bash
cd frontend
npm ci
```

Use `npm ci` to install the exact dependency versions recorded in `package-lock.json`.

### 3. Start the development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal. By default, open:

```text
http://localhost:5173
```

Keep the terminal running while developing. Stop the server with `Ctrl + C`.

## Available frontend scripts

Run these commands from the `frontend/` directory:

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format frontend files with Prettier |
| `npm run format:check` | Check formatting without changing files |

Before opening a pull request, run:

```bash
npm run format:check
npm run lint
npm run build
```

The GitHub Actions frontend CI workflow runs the formatting check, lint, and production build for pull requests targeting `main`.

## Development direction

The immediate frontend milestone is focused on these five screens:

1. Public landing page — implemented.
2. Farmer dashboard.
3. Farm management.
4. Crop library.
5. Crop planning.

The team may use clearly identified mock data while building the frontend. Data access should be isolated behind frontend service modules so the UI can later connect to the backend API without depending directly on mock data.

The planned full-stack architecture is:

```text
React + Vite frontend
        |
     HTTP REST
        |
Node.js + Express.js API
        |
     Mongoose
        |
   MongoDB Atlas
```

The backend will own business logic, server-side validation, authentication/authorization, and database access. The browser must never connect directly to MongoDB.

## Project documentation

Use these documents for detailed project context and working agreements:

| Document | Purpose |
|---|---|
| [Project roadmap](docs/project/project-roadmap.md) | Product direction, MVP scope, milestones, and deferred capabilities |
| [Development schedule](docs/project/development-schedule.md) | Sprint priorities and delivery sequence |
| [Team responsibilities](docs/project/team-responsibilities.md) | Team roles and collaboration expectations |
| [System architecture](docs/architecture/system-architecture.md) | Frontend/backend responsibilities, data flow, and initial data model |
| [Technical decisions](docs/architecture/technical-decisions.md) | Confirmed decisions and unresolved technical questions |
| [Coding standards](docs/development/coding-standards.md) | JavaScript, React, backend, security, and quality conventions |
| [Git workflow](docs/development/git-workflow.md) | Branching, commits, issues, pull requests, and reviews |

## Contributing

All team members should use the repository's GitHub workflow:

1. Select an issue marked **Ready** on the AgriSense Development Project Board.
2. Read its scope and acceptance criteria. Clarify dependencies before starting.
3. Create a focused branch from the latest `main` (for example, `feature/farm-management`, `fix/form-validation`, or `docs/readme-update`).
4. Implement the agreed change and run the relevant checks.
5. Commit with a clear Conventional Commit message, such as `feat: add farm management page` or `docs: update setup instructions`.
6. Push the branch and open a pull request targeting `main`.
7. Link the related issue, describe the changes, and include screenshots for meaningful UI changes.
8. Request at least one teammate review. Address feedback and ensure required checks pass before merging.

Do not commit directly to `main`. Keep pull requests focused and avoid mixing unrelated changes.

For the complete process, read the [Git and GitHub workflow](docs/development/git-workflow.md).

## Security and configuration

- Never commit passwords, API keys, database connection strings, tokens, or private data.
- Keep local environment files such as `.env` out of Git.
- If environment configuration is introduced, provide a placeholder-only `.env.example`; never put real credentials in it.
- Vite variables prefixed with `VITE_` are exposed to browser code. Never put server secrets or database credentials in them.
- Validate and authorize protected operations on the backend once API functionality is implemented.

## Team

AgriSense is developed by the AviatorLabs team.

See [Team Responsibilities](docs/project/team-responsibilities.md) for the collaboration framework.
