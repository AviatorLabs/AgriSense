# AgriSense Coding Standards

**Status:** Team-confirmed baseline; refine through reviewed changes.  
**Stack:** JavaScript, React + Vite, Node.js + Express.js, MongoDB Atlas, Mongoose, Tailwind CSS v4, and Zod.

## 1. General principles

- Prefer readable, straightforward code over clever abstractions.
- Keep functions, components, controllers, and services focused.
- Avoid unnecessary dependencies and premature optimization.
- Use consistent formatting and meaningful names.
- Explain non-obvious decisions with concise comments.
- Use JavaScript as required by the project; do not introduce TypeScript unless the team and instructor explicitly revisit this decision.

## 2. JavaScript and naming

- Use modern JavaScript (ES6+) and ES modules.
- Use `const` by default and `let` when reassignment is necessary; avoid `var`.
- Use `camelCase` for variables and functions.
- Use `PascalCase` for React components and model constructors.
- Use descriptive names; avoid unexplained abbreviations.
- Handle asynchronous operations with `async/await` and appropriate error handling.
- Avoid duplicating business rules across frontend and backend.

## 3. Frontend — React + Vite

- Build the client application with React and Vite.
- Use React Router for client-side routing.
- Keep components focused and reusable where reuse is real.
- Keep page components focused on composing features and layouts.
- Extract repeated UI into shared components.
- Keep API calls and data-access logic in frontend service modules, not scattered across presentation components.
- Keep mock/demo data behind the same service boundary where practical, so it can be replaced by API calls.
- Represent loading, empty, success, and error states where appropriate.
- Use semantic HTML, accessible labels, keyboard-friendly controls, and visible focus states.
- Do not put database credentials, secrets, authorization logic, or trusted business rules in the browser.

Suggested frontend organization (adapt as the application grows):

```text
frontend/
  src/
    assets/
    components/
    pages/
    services/
    hooks/
    context/
    utils/
    App.jsx
    main.jsx
```

## 4. Backend — Node.js + Express.js

- Expose application functionality through HTTP REST API endpoints.
- Keep route definitions, controllers, services, models, validation, and middleware separated.
- Routes map HTTP methods and paths to controller functions.
- Controllers handle HTTP request/response concerns and delegate business operations.
- Services contain reusable business logic.
- Mongoose models define document structure and database interactions.
- Middleware handles shared concerns such as authentication, authorization, request processing, and centralized error handling.
- Validate and authorize requests on the server, even when the frontend also validates inputs.
- Enforce resource ownership on every protected operation; never trust a user-supplied ID or role by itself.

Suggested backend organization:

```text
backend/
  src/
    config/
    controllers/
    middleware/
    models/
    routes/
    services/
    validators/
    server.js
  package.json
```

## 5. API and data access

- The browser communicates with Express through HTTP; it must never connect directly to MongoDB Atlas.
- Keep the API contract consistent and document endpoints as they are introduced.
- Return predictable response structures and appropriate HTTP status codes.
- Handle invalid input, missing resources, authorization failures, and unexpected server errors distinctly.
- Keep database operations on the backend.
- Use Mongoose schemas/models for document structure, validation support, and references.
- Check both reference validity and user ownership in the application layer.
- Avoid exposing internal stack traces, database details, or secrets in API responses.

## 6. Validation and errors

- Use Zod as the primary application-level request validation library.
- Validate incoming data on the server; frontend validation is for user experience and does not replace server validation.
- Validate required fields, formats, ranges, enum values, dates, and referenced records.
- Validate farm ownership before reading or mutating related records.
- Return clear, user-safe error messages.
- Handle database and network failures explicitly.
- Do not silently swallow errors.

## 7. Security

- Hash passwords using an established password-hashing library; never store plaintext passwords.
- Keep credentials and secrets in environment variables.
- Never expose server secrets through Vite client-exposed variables (for example, variables prefixed with `VITE_`).
- Never commit real environment files, database connection strings, API keys, or credentials.
- Apply authentication and authorization checks on protected backend routes and operations.
- Limit crop-library management operations to authorized admins.
- Avoid logging passwords, tokens, or sensitive personal data.
- Configure CORS and other browser-facing security controls deliberately when the API is introduced.
- Treat external agricultural data as untrusted input; retain source and timestamp information where relevant.

## 8. Database conventions

- Use MongoDB Atlas as the hosted database and Mongoose as the ODM.
- Use consistent collection and model naming.
- Define required fields, defaults, enums, indexes, and references deliberately.
- Keep the initial data model focused on users, farms, crops, cropPlans, cropActivities, and financialTransactions.
- Store monetary values using a suitable precise representation; avoid relying on floating-point arithmetic for financial calculations.
- Use timestamps for records that need creation/update history.
- Check references and ownership at the application layer.
- Keep seed/demo data clearly separated from production data.

## 9. Styling and accessibility

- Use Tailwind CSS v4 as the agreed styling approach.
- Avoid introducing a second styling system without a clear, reviewed reason.
- Design mobile-first.
- Use consistent spacing, typography, and component patterns.
- Ensure keyboard access, visible focus states, readable contrast, and form labels.
- Do not communicate status using color alone.

## 10. Quality tools and tests

- Use ESLint for code-quality checks.
- Use Prettier for consistent formatting.
- Use Vitest for focused unit/component tests where appropriate.
- Use Playwright for critical end-to-end workflows.
- Use GitHub Actions to run automated quality checks in CI.
- Add tests for validation, calculations, authorization, API behavior, and important user journeys.
- Run the available format, lint, test, and build checks before opening a PR.
- Keep CI commands synchronized with the package scripts and application structure.

## 11. Documentation and environment

- Document setup steps and required environment variables in the README or dedicated setup guide.
- Provide safe `.env.example` files with placeholder values only.
- Update documentation when architecture, data models, commands, or behavior changes.
- Never commit real secrets.
