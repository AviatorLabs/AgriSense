# AgriSense Development Schedule

**Status:** Draft planning baseline  
**Planning constraint:** A meaningful frontend checkpoint is expected within approximately two weeks. The exact semester submission date is not yet confirmed.

## Scheduling principles

- Complete React fundamentals before moving into Next.js implementation.
- Start the shared Next.js application directly; Next.js is built on React, so a separate React app is not required.
- Prioritize a visible, responsive frontend prototype for the early instructor checkpoint.
- Use clearly identified demo data where backend functionality is not ready.
- Keep demo data behind a data-access layer so it can be replaced with server-side queries later.
- Reassess sprint scope weekly based on team progress and instructor feedback.

## Initial two-week frontend foundation

### Sprint 1 — React fundamentals and preparation

**Focus**
- Complete the current React learning material.
- Practice components, props, state, events, lists, conditional rendering, and forms.
- Review JSX and modern JavaScript modules.
- Agree on initial UI/UX direction, page structure, and shared design conventions.
- Review the repository and team workflow.

**Expected outputs**
- Team members can build and explain basic React components.
- Initial page sketches or wireframes are agreed.
- The team understands the planned Next.js App Router structure.
- A prioritized frontend task list is ready.

### Sprint 2 — Next.js frontend prototype

**Focus**
- Initialize the Next.js application using JavaScript.
- Establish the App Router structure and shared root layout.
- Implement navigation and reusable interface components.
- Build initial versions of the landing page, farmer dashboard, farm management, crop library, and crop planning screens.
- Make the interface responsive, prioritizing mobile layouts.
- Use mock data for screens whose backend is not ready.

**Expected outputs for the two-week checkpoint**
- A running Next.js application.
- Shared layout and navigation.
- Initial versions of the five core screens.
- Responsive behavior at common mobile and desktop widths.
- Consistent visual direction and clear navigation between screens.
- A short demonstration of the current frontend progress.

## Subsequent implementation sequence

The following are milestone-oriented sprint candidates, not fixed calendar commitments. Split or combine them based on actual effort and the semester deadline.

| Sprint | Focus | Main deliverable |
|---|---|---|
| Sprint 3 | Application foundation and authentication | MongoDB/Mongoose connection, validation foundation, registration/login, protected access |
| Sprint 4 | Farm management and crop library | Persistent farm CRUD and admin-managed crop catalogue |
| Sprint 5 | Crop planning and monitoring | Persistent crop plans and activity records |
| Sprint 6 | Financial management | Expense/income recording and basic financial summaries |
| Sprint 7 | Dashboard and integration | Server-backed dashboard and end-to-end feature integration |
| Sprint 8 | Testing, refinement, and delivery | Bug fixes, responsive/accessibility review, deployment, documentation, and presentation |

## Weekly operating rhythm

- **Daily:** short Telegram progress update covering completed work, next task, and blockers.
- **During the week:** work through GitHub issues and feature branches; request help early when blocked.
- **Weekly:** AviatorLabs engineering review on Friday at 13:00 Africa/Addis_Ababa.
- **At each review:** demonstrate working progress, review blockers, check scope, and agree on the next priorities.

## Replanning triggers

Revisit the schedule when:
- The instructor changes the expected deliverables.
- The semester submission date becomes known.
- A data source proves unavailable or unreliable.
- A feature is substantially larger than estimated.
- Integration or testing reveals architectural changes are needed.

Do not sacrifice a working, tested MVP to pursue optional advanced features.
