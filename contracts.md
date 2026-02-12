# Backend Integration Contracts

## Overview
This document outlines the API contracts and integration plan for the ML/DL Portfolio website.

---

## 1. MOCKED DATA (Frontend Only - Currently in mock.js)
- `personalInfo` - Name, title, bio, image, email, location, social links
- `skills` - Array of technical skills
- `experiences` - Work experience and education timeline
- `projects` - Portfolio projects (will be moved to backend)
- `blogs` - Blog posts (will fetch from Medium RSS)

---

## 2. BACKEND API ENDPOINTS

### 2.1 Contact Form API
**Endpoint:** `POST /api/contact`
**Purpose:** Save contact form submissions to MongoDB
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "contact_id"
}
```
**Database Collection:** `contacts`

---

### 2.2 Projects API

**GET /api/projects**
- Fetch all projects
- Query params: `?featured=true` (for homepage)
- Returns: Array of projects

**GET /api/projects/:id**
- Fetch single project details
- Returns: Project object

**POST /api/projects** (Admin only)
- Create new project
- Request body: Project object

**PUT /api/projects/:id** (Admin only)
- Update existing project
- Request body: Updated project object

**DELETE /api/projects/:id** (Admin only)
- Delete project

**Database Collection:** `projects`
**Schema:**
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "technologies": ["string"],
  "image": "string (URL)",
  "github": "string (URL)",
  "demo": "string (URL)",
  "featured": "boolean",
  "createdAt": "date",
  "updatedAt": "date"
}
```

---

### 2.3 Blogs API (Medium Integration)

**GET /api/blogs**
- Fetch blogs from Medium RSS feed
- Query params: `?limit=3` (for homepage)
- Returns: Array of blog posts fetched from Medium

**GET /api/blogs/:id**
- Fetch single blog (redirects to Medium)
- Returns: Blog object with Medium URL

**Configuration:**
- Medium RSS URL: `https://medium.com/feed/@username`
- Parse RSS to JSON
- Cache results for performance

---

### 2.4 Resume Upload API

**POST /api/resume/upload**
- Upload resume PDF file
- Uses multipart/form-data
- Stores file in `/app/backend/static/resume.pdf`

**GET /api/resume/download**
- Download current resume
- Returns: PDF file

---

### 2.5 Profile API (Optional - for future admin panel)

**GET /api/profile**
- Fetch profile info (name, bio, skills, etc.)

**PUT /api/profile** (Admin only)
- Update profile information

---

## 3. FRONTEND ROUTING STRUCTURE

### Current Routes:
- `/` - Homepage (Hero, About, Featured Projects, Recent Blogs, Contact)

### New Routes to Add:
- `/projects` - All Projects Page
- `/projects/:id` - Individual Project Detail Page
- `/blogs` - All Blogs Page
- `/blogs/:id` - Individual Blog Page (redirects to Medium)
- `/admin` - Admin Dashboard (future)

---

## 4. FRONTEND-BACKEND INTEGRATION PLAN

### Step 1: Update Frontend Components
- **Contact.jsx**: Replace mock submission with actual API call to `/api/contact`
- **Projects.jsx**: Fetch projects from `/api/projects?featured=true` for homepage
- **Blogs.jsx**: Fetch blogs from `/api/blogs?limit=3` for homepage

### Step 2: Create New Pages
- **pages/AllProjects.jsx**: Display all projects with filtering
- **pages/ProjectDetail.jsx**: Show detailed project information
- **pages/AllBlogs.jsx**: Display all blogs from Medium
- **pages/BlogDetail.jsx**: Redirect to Medium article

### Step 3: Remove Mock Data Usage
- Keep `personalInfo`, `skills`, `experiences` in mock.js (static content)
- Remove `projects` and `blogs` from mock.js once backend is integrated
- Projects and blogs will be fetched from API

### Step 4: Update Header Navigation
- Update navigation links to route to new pages
- `/projects` and `/blogs` links in header should navigate to respective pages

---

## 5. MEDIUM RSS INTEGRATION

**Medium RSS Feed URL Format:**
```
https://medium.com/feed/@yourusername
```

**Backend Implementation:**
1. Install RSS parser: `feedparser` or use `requests` + `xmltodict`
2. Create endpoint to fetch and parse RSS
3. Cache results (optional: use Redis or in-memory cache)
4. Transform RSS data to match blog schema

**Blog Object from Medium:**
```json
{
  "id": "medium_post_id",
  "title": "string",
  "excerpt": "string (first 200 chars)",
  "date": "ISO date",
  "readTime": "calculated from content",
  "tags": ["array from categories"],
  "url": "medium_article_url",
  "image": "featured image URL"
}
```

---

## 6. FILE UPLOAD STRATEGY

**Resume Upload:**
- Use FastAPI's `UploadFile`
- Store in `/app/backend/static/uploads/`
- Serve static files via FastAPI
- Only keep latest resume, overwrite old file

**Project Images (Future):**
- Allow image upload for projects
- Store in `/app/backend/static/uploads/projects/`
- Return URL to store in database

---

## 7. IMPLEMENTATION SEQUENCE

1. ✅ **Backend Development**
   - Set up MongoDB models
   - Create Contact API
   - Create Projects CRUD API
   - Create Medium RSS integration for Blogs API
   - Create Resume upload/download API

2. ✅ **Frontend Page Creation**
   - Create AllProjects page
   - Create ProjectDetail page
   - Create AllBlogs page
   - Update routing in App.js

3. ✅ **Frontend-Backend Integration**
   - Update Contact form to use API
   - Update Projects component to fetch from API
   - Update Blogs component to fetch from API
   - Update Header navigation

4. ✅ **Testing**
   - Test all API endpoints
   - Test frontend integration
   - Test responsive design on new pages

---

## 8. ENVIRONMENT VARIABLES

**Backend (.env):**
```
MONGO_URL=<existing>
DB_NAME=<existing>
MEDIUM_USERNAME=yourusername
```

**Frontend (.env):**
```
REACT_APP_BACKEND_URL=<existing>
```

---

## 9. ADMIN PANEL (Future Phase - Not Immediate)

For now, projects can be added/edited via:
- Direct database manipulation (MongoDB Compass)
- API testing tools (Postman)

**Future Implementation:**
- Admin login page
- Dashboard to manage projects
- Rich text editor for project descriptions
- Image upload interface

---

## Notes:
- Static content (name, bio, skills, experiences) remains in mock.js for now
- Dynamic content (projects, blogs, contacts) will use backend APIs
- Medium integration eliminates need for blog management system
- Resume upload allows easy resume updates without code changes
