# AgriSense Project Roadmap

**Status:** Draft for team review  
**Team:** AviatorLabs  
**Repository:** [AviatorLabs/AgriSense](https://github.com/AviatorLabs/AgriSense)

## 1. Product direction

AgriSense is a farmer-centered agricultural information and farm management platform initially intended for an Ethiopian context. It aims to help farmers organize core farm activities, access useful agricultural information, plan crops, monitor cultivation, record harvests, and understand farm finances.

The MVP should demonstrate a reliable, usable full-stack web application built with React, Next.js, JavaScript, and MongoDB. The team will prioritize dependable data and practical farmer workflows over advanced or speculative features.

## 2. Guiding principles

1. **Farmer-centered:** prioritize clear, practical workflows and accessible language.
2. **Data availability first:** do not promise a feature until its required data can be sourced and maintained.
3. **AI is not foundational:** AI capabilities are optional future enhancements, not MVP dependencies.
4. **Build incrementally:** deliver working vertical slices and integrate continuously.
5. **Be transparent:** display data sources and timestamps where external or estimated data is used. Estimates are not guarantees.
6. **Keep scope feasible:** complete a dependable core product before expanding.

## 3. Milestones

| Milestone | Name | Expected outcome |
|---|---|---|
| M0 | Project Foundation | Team agreement, repository workflow, application setup, and baseline documentation |
| M1 | Frontend Foundation | Responsive Next.js interface, shared layout, navigation, and core page prototypes |
| M2 | Authentication and Users | Registration, login/logout, user profile, and protected farmer/admin access |
| M3 | Farm Management | Create, view, edit, and manage a farmer's farms |
| M4 | Crop Library | Admin-managed crop catalogue with searchable crop details |
| M5 | Crop Planning | Create and manage crop plans linked to a farm and crop |
| M6 | Crop Monitoring | Record crop activities, observations, and progress |
| M7 | Financial Management | Record farm/crop expenses and income; calculate basic totals |
| M8 | Dashboard and Integration | Bring key farm, crop, and financial information together |
| M9 | Testing and Submission | Integration testing, fixes, deployment, documentation, and presentation |

Milestone order is a planning baseline. Dependencies and priorities may be adjusted after implementation reveals actual effort.

## 4. MVP scope

- User registration, authentication, and profile management.
- Farmer-owned farm records, including location and farm size.
- Admin-managed crop library.
- Crop plans associated with farms and crop records.
- Crop activity and observation records.
- Farm-level and optional crop-plan-level financial transactions.
- A dashboard summarizing the farmer's records.
- Responsive layouts and basic usability/accessibility.
- Appropriate validation, authorization, error handling, and tests.

## 5. Deferred enhancements

Consider these only after the MVP is stable and data feasibility is confirmed:

- Weather integrations and location-specific forecasts.
- Market price feeds and verified buyer/vendor directories.
- More advanced crop recommendations and regional agricultural guidance.
- Notifications and reminders.
- Harvest analytics and yield comparisons.
- Soil recommendations based on reliable soil data.
- AI-assisted features, predictive yield estimates, or image-based disease support.
- Marketplace, payments, IoT, drone, satellite-processing, and native mobile capabilities.

## 6. Delivery approach

Use feature-based ownership and vertical slices. A feature should progress through interface, server-side logic, data persistence, validation, testing, and documentation rather than leaving disconnected frontend and backend work for the end.

The initial instructor checkpoint is a meaningful frontend prototype within approximately two weeks. Demo data may be used for this checkpoint, but keep data access isolated so it can later be replaced by server-backed data.

## 7. Definition of done

A feature is considered done when:
- Its agreed acceptance criteria are met.
- It follows the repository coding and security standards.
- It handles expected validation and error states.
- Relevant tests pass.
- It has been reviewed through a pull request.
- Documentation is updated when behavior, setup, or architecture changes.
- It is integrated into the shared application without breaking existing functionality.

## 8. Risks and assumptions

- Ethiopian agricultural, weather, soil, and market datasets may be incomplete or inconsistent.
- The exact semester submission date is not yet recorded; later sprint dates must be scheduled once confirmed.
- The MVP feature list is a planning baseline and must be validated by the team and instructor.
- Crop information must be reviewed before being presented as authoritative agricultural advice.
