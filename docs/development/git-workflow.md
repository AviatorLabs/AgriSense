# AgriSense Git and GitHub Workflow

**Status:** Team workflow proposal for review  
**Repository:** AviatorLabs/AgriSense

## 1. Source of truth

- GitHub repository: source of truth for code and version history.
- GitHub Issues: source of truth for tasks, bugs, and feature requests.
- GitHub Projects: source of truth for task status and milestone tracking once configured.
- Pull requests: source of truth for code review and integration discussion.
- Telegram: daily communication and quick coordination, not a replacement for recording technical decisions in GitHub.

## 2. Branch strategy

- `main`: stable, integrated work.
- `feature/<short-description>`: new functionality.
- `fix/<short-description>`: bug fixes.
- `docs/<short-description>`: documentation changes.
- `refactor/<short-description>`: behavior-preserving code improvements.

Examples:
- `feature/farm-management`
- `fix/login-validation`
- `docs/api-setup`

Do not commit directly to `main`. Create a branch for each task and keep branches focused.

## 3. Typical workflow

1. Select an issue that is ready to work on.
2. Confirm its acceptance criteria and dependencies.
3. Create a branch from the latest `main`.
4. Implement the smallest complete change that satisfies the issue.
5. Run relevant checks locally.
6. Commit with a clear message.
7. Push the branch and open a pull request against `main`.
8. Link the related issue in the PR description (for example, `Closes #12`).
9. Request at least one teammate review.
10. Address review feedback and confirm checks pass.
11. Merge only when the PR is approved and ready.

## 4. Commit messages

Use the Conventional Commits style:

`type: concise description`

Common types:
- `feat`: new functionality.
- `fix`: bug fix.
- `docs`: documentation.
- `style`: formatting or styling without logic changes.
- `refactor`: code restructuring without behavior change.
- `test`: tests.
- `chore`: tooling or maintenance.

Examples:
- `feat: add farm creation form`
- `fix: validate crop plan dates`
- `docs: explain local database setup`

## 5. Issue quality

Each implementation issue should include:
- A clear title.
- Context and problem to solve.
- Expected behavior.
- Acceptance criteria that can be checked.
- Priority and relevant area.
- Dependencies, if any.
- An owner when the team has agreed who will take it.

Avoid assigning work solely by permanent frontend/backend roles. Prefer feature ownership and pair programming where it helps team learning.

## 6. Pull request quality

A PR should:
- Explain what changed and why.
- Link the relevant issue.
- Include screenshots for meaningful UI changes.
- Describe tests/checks performed.
- Identify known limitations or follow-up work.
- Avoid unrelated formatting or refactoring.
- Be small enough for teammates to review.

## 7. Review expectations

Reviewers should check correctness, readability, maintainability, security, validation, responsive behavior where relevant, and whether acceptance criteria are satisfied.

Reviews are collaborative. Explain requested changes and ask questions rather than making unexplained demands. The author remains responsible for resolving feedback.

## 8. Project board workflow

Recommended statuses:
`Backlog → Ready → In Progress → In Review → Done`

Recommended fields:
- Priority: Critical, High, Medium, Low.
- Milestone: M0–M9.
- Area: Frontend, Backend, Database, Testing, Documentation.
- Size: Small, Medium, Large.

Only move work to Done after review and integration.

## 9. Safety and collaboration

- Never commit passwords, API keys, database credentials, or private configuration.
- Keep local secrets in environment files excluded from Git.
- Do not force-push shared branches without coordination.
- Pull/rebase from the latest base branch before opening or updating a PR.
- Communicate blockers early.
- Record important architecture decisions in repository documentation or issues.
