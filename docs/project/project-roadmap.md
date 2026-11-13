# AgriSense Project Roadmap

**Status:** Team-confirmed direction; delivery details remain subject to review  
**Team:** AviatorLabs  
**Repository:** [AviatorLabs/AgriSense](https://github.com/AviatorLabs/AgriSense)

## 1. Product direction

AgriSense is a farmer-centered agricultural information and farm management platform initially intended for an Ethiopian context. It aims to help farmers organize core farm activities, plan crops, monitor cultivation, record harvests, and understand farm finances, while making reliable agricultural information more accessible.

The application is a JavaScript full-stack web application using **React + Vite** for the frontend, **Node.js + Express.js** for the backend, and **MongoDB Atlas + Mongoose** for data persistence. The browser communicates with the backend through HTTP REST APIs; it never connects directly to MongoDB.

## 2. Product principles

1. **Farmer-centered:** prioritize practical workflows, accessible language, and usable interfaces.
2. **Data availability first:** do not promise a feature until its required data can be sourced, validated, and maintained.
3. **AI is not foundational:** AI capabilities are optional future enhancements, not MVP dependencies.
4. **Build incrementally:** deliver working, testable vertical slices and integrate continuously.
5. **Be transparent:** distinguish verified, farmer-provided, estimated, and predicted information. Show sources and timestamps where applicable. Estimates are not guarantees.
6. **Respect agricultural uncertainty:** location alone does not establish soil fertility. Agricultural guidance must be supported by reliable data and appropriate expertise.
7. **Keep scope feasible:** complete a dependable core product before expanding.

## 3. Product areas

These six areas describe the longer-term product direction; they are not six independent MVP applications.

1. **Agricultural Intelligence:** environmental context, soil/climate information, and evidence-based crop suitability.
2. **Farm Planning:** farm records, crop selection, plans, and schedules.
3. **Crop Monitoring:** cultivation activities, observations, and progress.
4. **Market Intelligence:** market information, prices, and selling context when reliable data is available.
5. **Farm Economics:** expenses, income, and profitability.
6. **Agricultural Data Management:** collection and management of professional or verified measurements when a suitable workflow exists.

## 4. Milestones

| Milestone | Name | Expected outcome |
|---|---|---|
| M0 | Project Foundation | Team agreement, repository workflow, application setup, and baseline documentation |
| M1 | Frontend Foundation | React + Vite application shell, navigation, and core page prototypes |
| M2 | Authentication and Users | Registration, login/logout, user profile, and protected farmer/admin access |
| M3 | Farm Management | Create, view, edit, and manage a farmer's farms |
| M4 | Crop Library | Admin-managed crop catalogue with searchable crop details |
| M5 | Crop Planning | Create and manage crop plans linked to a farm and crop |
| M6 | Crop Monitoring | Record crop activities, observations, and progress |
| M7 | Financial Management | Record farm/crop expenses and income; calculate basic totals |
| M8 | Dashboard and Integration | Bring key farm, crop, and financial information together |
| M9 | Testing and Submission | Integration testing, fixes, deployment, documentation, and presentation |

Milestone order is a planning baseline. Dependencies and priorities may be adjusted as implementation reveals actual effort and as instructor expectations become clearer.

## 5. Initial frontend checkpoint

The immediate frontend target is a focused five-screen prototype:

1. Public landing page — completed and merged.
2. Farmer dashboard.
3. Farm management.
4. Crop library.
5. Crop planning.

The target is meaningful progress within approximately two weeks, not a commitment to complete every planned product page. Prioritize responsive, navigable, coherent screens over a large number of incomplete pages.

Mock/demo data may be used. Keep it behind frontend service modules so the UI can later use the Express API without being tightly coupled to mock data.

## 6. MVP scope

The initial MVP focuses on core farm-management workflows:

- User registration, authentication, and profile management.
- Farmer-owned farm records, including location and farm size.
- Admin-managed crop library.
- Crop plans associated with farms and crop records.
- Crop activity and observation records.
- Harvest recording, introduced in a staged and appropriately scoped way.
- Farm-level and optional crop-plan-level financial transactions.
- A dashboard summarizing the farmer's recorded information.
- Responsive layouts and basic usability/accessibility.
- Server-side validation, authorization, error handling, and relevant tests.

## 7. Initial data model scope

Start with six MongoDB collections:

| Collection | Responsibility |
|---|---|
| `users` | User accounts, profiles, and roles |
| `farms` | Farms owned by farmers |
| `crops` | Admin-managed crop information |
| `cropPlans` | Crop plans associated with farms and crops |
| `cropActivities` | Activities and observations associated with crop plans |
| `financialTransactions` | Farm expenses and income records |

Use references for relationships between records and enforce ownership/authorization in the backend. Financial transactions require a farm reference and may optionally reference a crop plan. Represent expenses and income in the same collection using a transaction type.

Do not add collections simply because they may be useful later. Potential additions such as `harvests`, `environmentalData`, `marketPrices`, and `expertSubmissions` require a concrete feature and a reviewed data model first. The technical rationale is recorded in [Technical Decisions](../architecture/technical-decisions.md).

## 8. Deferred enhancements

Consider these only after the core MVP is stable and data feasibility is confirmed:

- Weather integrations and location-specific forecasts.
- Live market price feeds and verified buyer/vendor directories.
- Advanced crop recommendations and regional agricultural guidance.
- Professional environmental/soil-data submissions and verification workflows.
- Advanced yield prediction and analytics.
- Chemical/pesticide recommendations without validated local guidance and professional assessment.
- Notifications and reminders.
- AI-assisted features.
- Marketplace, payments, IoT, drones, satellite processing, and native mobile capabilities.

## 9. Delivery approach

Use feature-based ownership and vertical slices. A feature should progress through interface, API, server-side business logic, data persistence, validation, testing, and documentation rather than leaving disconnected frontend and backend work until the end.

The frontend and backend are separate applications. Keep HTTP/API communication in frontend service modules. The backend owns business rules, authorization, validation, and database access.

## 10. Definition of done

A feature is considered done when:
- Its agreed acceptance criteria are met.
- It follows repository coding and security standards.
- Expected validation, loading, empty, and error states are handled.
- Relevant checks and tests pass.
- It has been reviewed through a pull request.
- Documentation is updated when setup, architecture, data models, or behavior changes.
- It is integrated without breaking existing functionality.

## 11. Risks and assumptions

- Ethiopian agricultural, weather, soil, and market datasets may be incomplete or inconsistent.
- The exact semester submission date is not yet recorded; later sprint dates must be scheduled once confirmed.
- Deployment provider and production hosting design have not yet been selected.
- Authentication details remain an explicit technical decision to complete before implementation.
- Crop information must be reviewed before being presented as authoritative agricultural advice.
