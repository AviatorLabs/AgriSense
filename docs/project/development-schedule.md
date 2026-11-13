# AgriSense Development Schedule

**Status:** Team-confirmed planning baseline  
**Planning constraint:** A meaningful frontend checkpoint is expected within approximately two weeks. The exact semester submission date is not yet confirmed.

## Scheduling principles

- Build the frontend with React + Vite and JavaScript; do not introduce Next.js or TypeScript.
- Complete and practice React fundamentals alongside implementation.
- Prioritize a visible, responsive frontend prototype for the early instructor checkpoint.
- Use clearly identified mock/demo data where backend functionality is not ready.
- Keep mock data behind frontend service modules so the UI can later communicate with the Express REST API.
- Establish backend and database foundations deliberately; do not block the initial frontend checkpoint on unfinished API work.
- Reassess sprint scope weekly based on team progress, dependencies, and instructor feedback.

## Initial two-week frontend foundation

### Sprint 1 — React fundamentals and preparation

**Focus**
- Complete the current React learning material.
- Practice components, props, state, events, lists, conditional rendering, forms, and hooks.
- Review JSX and modern JavaScript modules.
- Practice React Router and the existing Vite application structure.
- Agree on page structure, reusable components, and shared design conventions.
- Review repository standards, Git workflow, and issue acceptance criteria.

**Expected outputs**
- Team members can build and explain core React components and interactions.
- Initial page structure and UI/UX direction are agreed.
- The team can run, lint, format, and build the Vite frontend.
- A prioritized frontend task list is ready.

### Sprint 2 — React + Vite frontend prototype

**Focus**
- Continue the existing Vite React application; do not recreate the project without a reason.
- Establish the shared application shell and primary navigation.
- Implement reusable interface components and routing.
- Build initial versions of the farmer dashboard, farm management, crop library, and crop planning screens.
- Preserve the existing public landing page.
- Make the interface responsive, prioritizing mobile layouts.
- Use mock data through service modules for screens whose backend is not ready.

**Expected outputs for the two-week checkpoint**
- A running React + Vite application.
- Shared application shell and navigation.
- Initial versions of the five agreed screens (landing page plus four farmer-facing screens).
- Responsive behavior at common mobile and desktop widths.
- Consistent visual direction and clear navigation.
- A short demonstration of current frontend progress.

## Subsequent implementation sequence

These are milestone-oriented sprint candidates, not fixed calendar commitments. Split or combine them based on actual effort and the semester deadline.

| Sprint | Focus | Main deliverable |
|---|---|---|
| Sprint 3 | Backend foundation | Express application, environment configuration, centralized error handling, MongoDB Atlas connection, Mongoose setup, and Zod validation foundation |
| Sprint 4 | Authentication and users | Agreed authentication/session strategy, password hashing, registration/login/logout, profile, and protected API access |
| Sprint 5 | Farm management and crop library | Persistent farm CRUD, ownership checks, and admin-managed crop catalogue |
| Sprint 6 | Crop planning and monitoring | Persistent crop plans, crop activities, observations, and validation |
| Sprint 7 | Financial management and harvest records | Expense/income records, staged harvest recording, and basic financial summaries |
| Sprint 8 | Dashboard and integration | Server-backed dashboard and end-to-end feature integration |
| Sprint 9 | Testing, refinement, and delivery | Bug fixes, responsive/accessibility review, deployment, documentation, and presentation |

The frontend and backend may progress in parallel when their contracts and dependencies are clear. Integrate features through small, reviewed pull requests.

## Weekly operating rhythm

- **Daily:** short Telegram progress update covering completed work, next task, and blockers.
- **During the week:** work through GitHub issues and feature branches; request help early when blocked.
- **Weekly:** AviatorLabs engineering review on Friday at 13:00 Africa/Addis_Ababa.
- **At each review:** demonstrate working progress, review blockers, check scope, and agree on next priorities.

## Replanning triggers

Revisit the schedule when:
- The instructor changes expected deliverables.
- The semester submission date becomes known.
- A required data source proves unavailable or unreliable.
- A feature is substantially larger than estimated.
- API contracts or integration reveal dependencies that change sequencing.
- Testing reveals architectural or quality issues.

Do not sacrifice a working, tested MVP to pursue optional advanced features.
