# AgriSense Coding Standards

**Status:** Initial team standard; refine as implementation evolves.  
**Stack:** JavaScript, React, Next.js App Router, MongoDB, Mongoose.

## 1. General principles

- Prefer readable, straightforward code over clever abstractions.
- Keep functions and components focused.
- Avoid unnecessary dependencies and premature optimization.
- Use consistent formatting and meaningful names.
- Explain non-obvious decisions with concise comments.
- Do not introduce TypeScript for this project unless the team and instructor explicitly revisit the JavaScript requirement.

## 2. JavaScript and naming

- Use modern JavaScript (ES6+) and ES modules.
- Use `const` by default and `let` when reassignment is necessary; avoid `var`.
- Use `camelCase` for variables and functions.
- Use `PascalCase` for React components and model constructors.
- Use descriptive names; avoid unexplained abbreviations.
- Handle asynchronous operations with `async/await` and appropriate error handling.

## 3. React and Next.js

- Use the Next.js App Router.
- Keep components small and reusable where reuse is real.
- Prefer Server Components by default.
- Add `"use client"` only when client-side state, effects, browser APIs, or event handlers are required.
- Keep page/layout files focused on routing and composition.
- Extract repeated UI into shared components.
- Use semantic HTML and accessible labels.
- Provide loading, empty, success, and error states where appropriate.

## 4. Suggested project organization

Adapt this structure as the application grows:

```text
src/
  app/
    (auth)/
    (farmer)/
    admin/
    api/
  components/
    ui/
    layout/
    forms/
  lib/
    db/
    validation/
    auth/
  models/
  services/
  data/
  utils/
docs/
```

Keep server-only modules, database access, and secrets out of client components and browser bundles.

## 5. Backend and data access

- MongoDB access must happen on the server; the browser must never connect directly to the database.
- Use a shared database connection utility.
- Use Mongoose schemas/models for document structure and references.
- Put reusable business operations in server-side service functions.
- Use Server Actions for UI-triggered mutations where appropriate.
- Use Route Handlers for HTTP endpoints and external integrations.
- Avoid duplicating business logic between Server Actions and Route Handlers; both should call shared services.
- Enforce ownership and authorization on the server for every protected resource.
- Do not trust user-supplied IDs or roles without checking them.

## 6. Validation and errors

- Validate incoming data on the server; use Zod for application-level validation.
- Validate required fields, formats, ranges, enum values, and referenced records.
- Validate farm ownership before reading or mutating related records.
- Return clear, user-safe error messages without exposing secrets or stack traces.
- Handle database and network failures explicitly.
- Do not silently swallow errors.

## 7. Security

- Hash passwords using an established password-hashing library; never store plaintext passwords.
- Keep credentials and secrets in environment variables.
- Never expose server secrets through `NEXT_PUBLIC_` variables.
- Apply authentication and authorization checks to protected actions and routes.
- Limit access to admin-only crop catalogue management.
- Avoid logging passwords, tokens, or sensitive personal data.
- Treat external data as untrusted input and display source/timestamp information where relevant.

## 8. Database conventions

- Use consistent collection and model naming.
- Define required fields, defaults, enums, and indexes deliberately.
- Store monetary values using a suitable precise representation; avoid relying on floating-point arithmetic for financial calculations.
- Use timestamps for records that need creation/update history.
- Check references and ownership at the application layer.
- Keep seed/demo data clearly separated from production data.

## 9. Styling and accessibility

The team must agree on one styling approach before broad UI implementation (Tailwind CSS or CSS Modules/plain CSS are candidates). Avoid mixing approaches without a clear reason.

- Design mobile-first.
- Use consistent spacing, typography, and component patterns.
- Ensure keyboard access, visible focus states, readable contrast, and form labels.
- Do not communicate status using color alone.

## 10. Quality tools and tests

- Use ESLint for code-quality checks.
- Use Prettier for consistent formatting.
- Use Vitest for focused unit/component tests where appropriate.
- Use Playwright for critical end-to-end workflows.
- Add tests for validation, calculations, authorization, and important user journeys.
- Run linting and relevant tests before opening a PR.
- Add CI checks when the baseline application is established.

## 11. Documentation

- Document setup steps and required environment variables in the README or dedicated setup guide.
- Update documentation when architecture, data models, commands, or behavior changes.
- Keep examples accurate and never commit real secrets.
