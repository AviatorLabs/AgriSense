# AgriSense Technical Decisions

**Status:** Team-confirmed baseline  
**Decision date:** 2026-11-13

This document records the team's confirmed technical direction and distinguishes it from implementation details that remain unresolved. Update it when the team makes or revises a decision.

## 1. Confirmed decisions

### TD-001 — Frontend framework and tooling

**Decision:** Use React with Vite and JavaScript.

**Rationale:**
- Meets the instructor's expected React-based frontend direction.
- Vite provides the frontend development/build tooling.
- The project is required to use JavaScript rather than TypeScript.

**Consequences:**
- Do not introduce Next.js or TypeScript into project guidance or implementation.
- The frontend is a client-side React application.
- Use client-side routing; React Router is the planned routing library.

### TD-002 — Backend framework

**Decision:** Use Node.js with Express.js.

**Rationale:** Provides a separate server-side application for REST APIs, business logic, validation, authentication/authorization, and database access.

**Consequences:**
- The frontend communicates with the backend over HTTP.
- Server-side business rules and trusted validation belong in the backend.
- The browser does not connect directly to the database.

### TD-003 — Database and ODM

**Decision:** Use MongoDB Atlas with Mongoose.

**Rationale:** MongoDB Atlas provides the hosted database and Mongoose provides the application's schema/model and data-access layer.

**Consequences:**
- Database credentials remain backend-only.
- Mongoose models and database operations live in the backend.
- Relationships and ownership must be validated by backend application logic.

### TD-004 — Styling

**Decision:** Use Tailwind CSS v4.

**Consequences:**
- Use Tailwind utility classes as the primary styling approach.
- Avoid adding a competing styling system without a specific, reviewed need.

### TD-005 — Validation

**Decision:** Use Zod as the primary application-level validation library.

**Consequences:**
- Validate incoming data on the server.
- Client-side validation may improve usability but never replaces backend validation.
- Avoid introducing a second validation library for the same responsibilities without a demonstrated need.

### TD-006 — Code quality and testing

**Decision:** Use ESLint and Prettier for code quality and formatting. Use Vitest for focused unit/component tests and Playwright for end-to-end workflows. Use GitHub Actions for automated checks.

**Consequences:**
- Contributors should run available checks before opening a PR.
- CI should run the corresponding checks for changed application code.
- Test coverage should prioritize validation, business rules, authorization, and critical user journeys.

### TD-007 — Frontend/backend separation

**Decision:** Maintain separate `frontend/` and `backend/` applications in the repository.

**Consequences:**
- Frontend service modules own API communication.
- Express owns API endpoints and trusted business logic.
- Mongoose owns database interaction through backend models.
- The browser must never access MongoDB directly.

### TD-008 — Initial MVP data model

**Decision:** Start with six collections: `users`, `farms`, `crops`, `cropPlans`, `cropActivities`, and `financialTransactions`.

**Consequences:**
- Expenses and income share `financialTransactions`, distinguished by transaction type.
- A financial transaction must reference a farm and may optionally reference a crop plan.
- Additional collections require a concrete feature, data lifecycle, and reviewed model.

### TD-009 — Initial user roles

**Decision:** Begin with `farmer` and `admin` roles.

**Consequences:**
- Farmers manage their own farm-related records.
- Admins manage platform-level crop catalogue information.
- A professional role and submission workflow are deferred until permissions, verification, and approval responsibilities are defined.

### TD-010 — Initial frontend checkpoint and product scope

**Decision:** Keep the immediate five-screen frontend checkpoint: the existing public landing page, farmer dashboard, farm management, crop library, and crop planning.

**Consequences:**
- Use mock data where necessary, isolated behind frontend service modules.
- Do not expand the two-week checkpoint into a large set of unfinished pages.
- Prioritize a coherent, responsive, demonstrable prototype.

### TD-011 — Product and data principles

**Decision:** Keep AI out of the foundational MVP and prioritize reliable data and transparent presentation.

**Consequences:**
- Distinguish verified, farmer-provided, estimated, and predicted values.
- Show sources and timestamps where relevant.
- Do not infer soil fertility from location alone.
- Do not present demo data as live or verified.
- Chemical/pesticide recommendations require validated local guidance and appropriate professional assessment.

### TD-012 — Team collaboration

**Decision:** Use feature-based ownership and vertical-slice collaboration rather than permanent frontend/backend silos.

**Consequences:**
- Assign feature work based on availability, skills, learning goals, and dependencies.
- Use pairing and review to distribute knowledge.
- GitHub Issues, Pull Requests, and the Development Project Board remain the engineering source of truth.

## 2. Proposed design conventions

The following are implementation conventions to apply unless a concrete need prompts a reviewed change:

- Use React Router for client-side navigation.
- Keep API calls in frontend service modules.
- Separate Express routes, controllers, services, middleware, models, validators, and configuration.
- Use a consistent API response and error format when API contracts are defined.
- Use environment variables for configuration and commit placeholder-only `.env.example` files.
- Prefer small, focused pull requests with relevant checks.

## 3. Decisions still unresolved

These are intentionally not decided by this record.

| ID | Decision | Required discussion before implementation |
|---|---|---|
| OPEN-001 | Authentication strategy | JWT versus server-managed sessions; credential storage; expiry and renewal |
| OPEN-002 | Password hashing implementation | Select an established password-hashing library and configuration |
| OPEN-003 | Deployment | Hosting provider, frontend/backend deployment arrangement, database network/security configuration |
| OPEN-004 | API conventions | Route naming, versioning if needed, response envelope, pagination, and error format |
| OPEN-005 | Data model details | Exact fields, indexes, reference policies, deletion behavior, and validation constraints |
| OPEN-006 | Production environment configuration | CORS origins, environment separation, logging, monitoring, and secret management |

Do not make these decisions implicitly through package installation or implementation shortcuts. Record the outcome here when the team agrees.

## 4. Change process

When a technical decision changes:
1. Explain the problem with the current decision.
2. Present alternatives and trade-offs.
3. Discuss impacts on scope, code, data, security, and team workflow.
4. Agree on the decision as a team.
5. Update this record and any affected architecture, roadmap, or coding-standard documents in a focused PR.
6. Identify migration or follow-up work if existing implementation is affected.
