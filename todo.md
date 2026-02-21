# Langford International Institute Website - Project TODO

## Phase 1: Core Setup & Authentication
- [x] Upgrade project to web-db-user (database + backend + auth)
- [x] Resolve Home.tsx conflicts after upgrade
- [x] Set up database schema for users, programs, news, teachers
- [x] Implement user authentication (student & staff login)
- [x] Create admin role system

## Phase 2: Backend API & Database
- [x] Create database schema for:
  - [x] Programs/Courses
  - [x] News & Events
  - [x] Teachers/Staff
  - [x] Students (registrations)
  - [x] Certificates
- [x] Build tRPC procedures for:
  - [x] Programs (list, details)
  - [x] News (list, details)
  - [x] Teachers (list, details)
  - [x] Registrations (create, list)

## Phase 3: Dashboard & Admin Panel
- [x] Create admin dashboard layout with DashboardLayout component
- [x] Programs management page (UI created)
- [x] News & events management (UI created)
- [x] Teachers management (UI created)
- [x] Student registrations management (UI created)
- [ ] Add/edit/delete functionality (future enhancement)
- [ ] Upload images to S3 (future enhancement)

## Phase 4: Frontend Pages
- [x] Rebuild Home page with:
  - [x] Hero section with professional images
  - [x] About section
  - [x] Programs section with hover effects
  - [x] Accreditations section
  - [x] Contact form
- [ ] Create Program Details page (future enhancement)
- [ ] Create News Details page (future enhancement)
- [ ] Create Teachers page (future enhancement)
- [ ] Create Registration page (future enhancement)
- [ ] Create Student Dashboard page (future enhancement)

## Phase 5: High-Quality Images
- [x] Generate professional images for:
  - [x] Hero section background (classroom)
  - [x] Language program section
  - [x] Business training section
  - [x] Technology lab section
  - [x] Teacher profile photo
- [x] Optimize images for web
- [x] Integrate into website

## Phase 6: Advanced Features
- [ ] AI Assistant widget with Gemini API (future enhancement)
- [ ] Email notifications for registrations (future enhancement)
- [ ] Certificate generation & download (future enhancement)
- [ ] Student portal (view courses, download materials) (future enhancement)
- [ ] Search functionality (future enhancement)
- [ ] Testimonials/reviews section (future enhancement)
- [ ] Gallery section (future enhancement)

## Phase 7: Testing & Refinement
- [x] Test authentication flow
- [x] Test admin dashboard functionality
- [x] Write unit tests for API endpoints (10 tests passing)
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Performance optimization
- [ ] SEO optimization

## Phase 8: Deployment
- [ ] Save checkpoint
- [ ] Deploy to production via Manus UI
- [ ] Set up custom domain
- [ ] Monitor and fix any issues
