# SMIT Student Application System

A full-stack web application built for **Saylani Mass IT Training (SMIT)** to streamline the student course enrollment process. The system handles public student applications, application status tracking, and a role-based admin dashboard for managing students, campuses, and admins.

---

## Live Demo

🔗 [Live Link](https://student-application-system-delta.vercel.app/)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Frontend + API Routes + Server Components |
| Supabase | Database, Authentication, Row Level Security |
| Tailwind CSS | Styling |
| Recharts | Analytics Charts |
| @tabler/icons-react | Icons |

---

## Features

### Public

- **Enrollment Form** — Students can apply for a course by submitting their details (name, CNIC, email, phone, course, campus). Data is inserted into Supabase with a default status of `pending`.
- **Application Status Checker** — Students can track their application status using their CNIC number. Secured via a Next.js API route using Supabase service role key — no direct table access.

### Admin Dashboard

- **Role-Based Access Control** — Two admin roles:
  - `super_admin` — Full access to all data across all campuses
  - `campus_admin` — Restricted to their assigned campus data only
- **Students Table** — View all student applications with the following features:
  - Filter by status, course, campus, CNIC search, and date range
  - Update application status (approve / reject)
  - Edit or delete student records
  - Pagination with configurable items per page
  - Export filtered data to CSV
- **Analytics** — Visual charts powered by Recharts:
  - Applications by Status (Pie/Donut Chart)
  - Applications by Course (Bar Chart)
  - Applications Over Time (Line Chart)
  - Applications by Campus (Bar Chart — super admin only)
  - Date range filter on charts
- **Manage Campuses** — Super admin can add, edit, and delete campuses
- **Manage Admins** — Super admin can create, edit, and delete campus admin accounts. New campus admins are created via Supabase Auth using service role key through a secure API route.

### Security

- Row Level Security (RLS) enabled on all Supabase tables
- Students table: public insert only, no direct select (status checker uses server-side API route)
- Admin operations protected via Next.js server components
- Service role key never exposed to client — only used in API routes

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Aun-Ali-12/Student-management-system.git
cd Student-management-system/my-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create `.env.local` in the `my-app` folder:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 4. Run the development server

```bash
npm run dev
```

---

## Database Schema

| Table | Description |
|---|---|
| `students` | Student application records |
| `campuses` | Campus list |
| `admin_profiles` | Admin role and campus assignment |

---