# AgriSense System Architecture

**Status:** Team-confirmed architectural direction  
**Last reviewed:** 2026-11-13

## 1. Overview

AgriSense is a JavaScript full-stack web application with a separate frontend and backend.

```text
Farmer / Admin
     |
     v
React + Vite frontend
     |
     | HTTP REST API requests
     v
Node.js + Express.js backend
     |
     +--> Routes
     +--> Middleware
     +--> Controllers
     +--> Services
     +--> Zod validation
     |
     v
Mongoose
     |
     v
MongoDB Atlas
```

The frontend is responsible for presentation, user interaction, client-side navigation, and communicating with the API. The backend is responsible for trusted business logic, request validation, authentication and authorization, and all database access.

**Security boundary:** The browser must never connect directly to MongoDB Atlas. Database credentials and other server secrets must never be included in the frontend bundle.

## 2. Technology stack

| Layer | Technology | Responsibility |
|---|---|---|
| Frontend framework | React | User interface and component model |
| Frontend tooling | Vite | Development server and production build |
| Language | JavaScript | Frontend and backend implementation |
| Routing | React Router (planned) | Client-side navigation |
| Styling | Tailwind CSS v4 | Responsive interface styling |
| Backend runtime | Node.js | Server-side JavaScript runtime |
| Backend framework | Express.js | REST API and HTTP middleware |
| Database | MongoDB Atlas | Hosted document database |
| ODM | Mongoose | Models, schemas, and database operations |
| Validation | Zod | Request and application data validation |
| Code quality | ESLint + Prettier | Linting and consistent formatting |
| Testing | Vitest + Playwright | Unit/component and end-to-end testing |
| CI | GitHub Actions | Automated quality checks |

The project uses JavaScript, not TypeScript, in accordance with the team's confirmed course constraint.

## 3. Repository organization

The intended top-level organization separates the two applications and keeps project documentation at repository level:

```text
AgriSense/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   └── utils/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── validators/
│   │   └── server.js
│   └── package.json
├── docs/
│   ├── architecture/
│   ├── development/
│   └── project/
└── README.md
```

This is the intended structure, not a claim that every directory has already been created. Add files and folders as the relevant implementation work begins.

## 4. Frontend responsibilities

The React application should:
- Render public and authenticated application screens.
- Provide responsive navigation and reusable UI components.
- Manage client-side interaction and presentation state.
- Perform user-friendly client-side input checks.
- Call backend endpoints through modules in `src/services/`.
- Present loading, empty, success, and error states.
- Keep mock/demo data behind service modules while API integration is pending.

The frontend must not:
- Connect directly to MongoDB.
- Contain database credentials or server secrets.
- Be trusted to enforce authorization or ownership.
- Be the only place where business-critical validation occurs.

## 5. Backend responsibilities

The Express application should expose REST endpoints and own trusted application behavior.

| Component | Responsibility |
|---|---|
| Routes | Define endpoint paths and HTTP methods |
| Middleware | Shared request processing, authentication, authorization, and error handling |
| Controllers | Translate HTTP requests into application operations and HTTP responses |
| Services | Implement reusable business rules and use cases |
| Models | Define Mongoose schemas and database models |
| Validators | Define Zod schemas and validate incoming data |
| Config | Load and validate server configuration and database connection settings |

Controllers should remain focused on HTTP concerns. Business logic should live in services rather than being duplicated across route handlers.

## 6. Request and data flow

A typical data-reading flow:

1. A user opens a screen in the React application.
2. The relevant frontend service sends an HTTP request to the Express API.
3. Express middleware performs applicable request checks and authentication/authorization.
4. The route dispatches the request to a controller.
5. The controller invokes a service.
6. The service performs business checks and uses the relevant Mongoose model.
7. Mongoose reads from MongoDB Atlas.
8. The result returns through the service and controller as an appropriate HTTP response.
9. The frontend service returns the result to the UI, which renders the data or an error state.

For writes, validate incoming data on the server, verify permissions and resource ownership, apply business rules, persist the change, and return an appropriate response.

## 7. Initial data model

The initial scope contains six collections:

| Collection | Purpose | Main relationships |
|---|---|---|
| `users` | Accounts, profiles, roles | A user owns many farms |
| `farms` | Farmer-owned farm records | A farm belongs to one user and has many crop plans and financial transactions |
| `crops` | Admin-managed crop catalogue | A crop can be referenced by many crop plans |
| `cropPlans` | A crop planned for a farm | References one farm and one crop; has many crop activities |
| `cropActivities` | Crop observations and activities | References one crop plan |
| `financialTransactions` | Farm expenses and income | Requires a farm reference; may reference a crop plan |

Initial relationship outline:

```text
User 1 -------- * Farm
Farm 1 -------- * CropPlan
Crop 1 -------- * CropPlan
CropPlan 1 ---- * CropActivity
Farm 1 -------- * FinancialTransaction
CropPlan 0..1 - * FinancialTransaction
```

The precise fields, indexes, validation rules, and deletion behavior should be specified in the data-model implementation/design issue before models are finalized.

Do not add future collections such as environmental data, market prices, or professional submissions until the corresponding feature and data lifecycle have been designed.

## 8. Roles and authorization

The initial roles are:
- **Farmer:** manages their own farm records and associated crop plans, activities, and financial records.
- **Admin:** manages platform-level information such as the crop library.

Authorization must be enforced by the backend. A frontend route guard improves navigation and user experience but is not a security boundary. The backend must verify the authenticated user's role and ownership for each protected operation.

A separate agricultural-professional role is deferred.

## 9. Agricultural data quality

The application should distinguish:
- Verified data.
- Farmer-provided data.
- Estimated values.
- Predicted values.

Where applicable, store or display source and last-updated information. Do not present demo values as live or verified data. Location alone is not evidence of soil fertility. Agricultural recommendations require reliable, context-appropriate information; chemical or pesticide prescriptions require validated local guidance and appropriate professional assessment.

## 10. Cross-cutting quality and security

- Validate request data on the backend with Zod.
- Hash passwords with an established password-hashing library.
- Keep server secrets in backend environment variables.
- Never commit real secrets or database connection strings.
- Enforce authentication, role permissions, and resource ownership on the server.
- Use centralized error handling and safe API error responses.
- Test business rules, validation, authorization, and critical user journeys.
- Run formatting, linting, tests, and builds through local scripts and CI.

## 11. Decisions still open

The architecture direction is confirmed, but some implementation details remain open:
- Authentication mechanism and browser credential storage.
- Session/token expiration and renewal behavior.
- Production deployment provider and hosting topology.
- Exact API route naming and response envelope conventions.
- Detailed collection fields, indexes, and deletion/reference policies.

These decisions must be documented before the affected implementation depends on them.
