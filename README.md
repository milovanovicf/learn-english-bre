# Learn English Bre! – Full-Stack English Learning Platform

## Overview

**Learn English Bre!** is a full-stack web application for the Serbian market that
helps native Serbo-Croatian speakers learn English. Professors publish and manage
courses and learning materials, students enroll and track their progress, and
(in a later phase) an AI assistant gives instant feedback on student writing.

> **Status:** 🚧 Phase 1 — project setup + landing page are complete. The feature
> set below describes the full product vision; sections marked _Planned_ are not
> built yet. See [Roadmap](#roadmap).

## Problem

**For Students:**

- Quality English courses tailored to Serbian speakers are scattered or expensive
- Self-learners lack structure — no clear path, no sense of progress
- Written practice rarely gets timely, useful feedback
- Materials live across many disconnected tools (PDFs, videos, chats)

**For Professors:**

- Distributing materials and tracking who completed what is manual and error-prone
- Hard to see how individual students are progressing
- No single place to publish a course, add lessons, and monitor engagement

**For the Platform:**

- No control over who can publish courses — anyone could claim to be a professor

## Solution

**Students can:**

- Browse and search the course catalog by level and topic
- Enroll in courses and work through lessons and materials at their own pace
- Track progress per course — completed lessons, scores, time spent
- _Planned:_ submit writing exercises and receive AI-powered feedback
- _Planned:_ get email notifications for enrollment and milestones

**Professors can:**

- Register an account with email verification, then log in securely
- Create courses, organize them into lessons, and attach materials (text, video, files)
- Publish or unpublish courses
- View a dashboard of enrolled students and their progress per course
- _Planned:_ review AI-flagged student submissions and leave comments

**Administrators can:** _(Planned)_

- Approve new professor accounts before they can publish
- Enable / disable professor accounts
- New professors start as `PENDING` and cannot publish until approved

## Key Features

- **Two roles** — `STUDENT` (browse, enroll, track) and `PROFESSOR` (author, monitor)
- **Course catalog** — searchable, level-tagged courses with lessons and materials
- **Progress tracking** — per-course completion and scores for each student
- **AI writing feedback** _(Planned)_ — instant suggestions on grammar, style, and clarity
- **Professor dashboard** _(Planned)_ — enrollment and progress analytics per course
- **Account approval workflow** _(Planned)_ — `PENDING` / `ACTIVE` / `DISABLED` states gated by an admin
- **Internationalization** _(Planned)_ — full Serbian (`sr-Latn`) and English support
- **Transactional email** _(Planned)_ — verification codes and notifications via Resend
- **Responsive, accessible UI** — mobile-first landing page, semantic markup, keyboard-friendly

## Technologies Used

**Frontend:**

- **Next.js 15 App Router (React 19)** – UI rendering, routing, SSR, and Server Actions
- **Tailwind CSS 4 + shadcn/ui (Radix / base-ui primitives)** – styling and components
- **Luxon** – timezone-aware date/time formatting (`Europe/Belgrade`)
- **Zod** – client-side validation for form inputs

**Backend:**

- **Next.js API routes** (`/app/api`) – RESTful endpoints
- **Next.js Server Actions** (`/app/actions.ts`) – centralized mutation logic
- **Prisma 7 ORM with the Neon serverless adapter** – database access and schema modeling
- **PostgreSQL (Neon)** – relational database
- **Zod** – request validation on the backend
- **Bcrypt & JWT** _(Planned)_ – secure authentication and session management
- **Resend** _(Planned)_ – transactional email delivery

**Hosting:**

- **Vercel** – app hosting and serverless functions
- **Neon** – managed serverless PostgreSQL

**Testing:** _(Planned)_

- **Jest & Supertest** – automated API testing

## Data Model

> _Planned (Phase 2)._ The current schema (`prisma/schema.prisma`) is a stub
> (`HealthCheck`) so the project compiles; the real model is designed next.

`User` (role: `STUDENT` / `PROFESSOR`) → a professor owns `Course`s → each course
has `Lesson`s and `Material`s → students create `Enrollment`s → progress is tracked
per lesson via `Progress`. Writing exercises produce `WritingSubmission`s, which
(later) carry AI-generated feedback.

## Project Structure

```
app/
  api/                # route handlers
  actions.ts          # Server Actions (mutations)
  lib/                # app-scoped helpers (env, datetime)
  layout.tsx
  page.tsx            # landing page
components/
  ui/                 # shadcn components
  landing/            # landing-page sections
lib/
  utils.ts            # cn() helper
  db/
    prisma.ts         # PrismaClient singleton (Neon adapter)
prisma/
  schema.prisma       # data model (stub in Phase 1)
prisma.config.ts      # Prisma 7 datasource config
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values.

```bash
DATABASE_URL          # Neon PostgreSQL connection string
JWT_SECRET            # secret for signing auth tokens          (Planned)
RESEND_API_KEY        # Resend API key for transactional email  (Planned)
```

## Getting Started

```bash
npm install            # installs deps + runs prisma generate (postinstall)
npm run dev            # start the dev server → http://localhost:3000
```

The landing page renders fully static and needs no database. Once the real
schema lands in Phase 2:

```bash
npx prisma migrate deploy   # apply migrations to the database
npm run db:generate         # regenerate the Prisma client
```

## Roadmap

- [x] **Phase 1** — project setup, tooling, and landing page
- [ ] **Phase 2** — data model (User, Course, Lesson, Enrollment, Progress)
- [ ] **Phase 3** — auth (Bcrypt + JWT), email verification (Resend)
- [ ] **Phase 4** — course catalog, enrollment, progress tracking
- [ ] **Phase 5** — professor dashboard and analytics
- [ ] **Phase 6** — AI-powered writing feedback
- [ ] **Phase 7** — internationalization (`sr-Latn` / `en`)
