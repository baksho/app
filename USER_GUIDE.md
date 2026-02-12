# ML/DL Portfolio - User Guide

## 🎉 Your Portfolio is Live!

Your professional ML/Deep Learning portfolio is now fully functional with backend integration!

---

## 📋 Table of Contents

1. [Editing Content](#editing-content)
2. [Managing Projects](#managing-projects)
3. [Managing Blogs (Medium Integration)](#managing-blogs)
4. [Uploading Your Resume](#uploading-your-resume)
5. [Viewing Contact Messages](#viewing-contact-messages)
6. [Publishing Your Portfolio](#publishing-your-portfolio)
7. [API Documentation](#api-documentation)

---

## 1. Editing Content

### Static Content (Name, Bio, Skills, Experience)

Edit the file: `/app/frontend/src/data/mock.js`

**What you can change:**
- `personalInfo.name` - Your name
- `personalInfo.title` - Job title (e.g., "Machine Learning Engineer")
- `personalInfo.tagline` - Tagline/description
- `personalInfo.bio` - About me paragraph
- `personalInfo.email` - Your email
- `personalInfo.location` - Your location
- `personalInfo.image` - Your professional photo URL
- `personalInfo.social` - GitHub, LinkedIn, Medium, Twitter URLs
- `skills` - Array of technical skills
- `experiences` - Work experience and education entries

**Example:**
```javascript
export const personalInfo = {
  name: "John Doe",
  title: "Machine Learning Engineer",
  tagline: "Building AI Solutions for Tomorrow",
  bio: "Passionate ML engineer with 5+ years experience...",
  email: "john@example.com",
  location: "San Francisco, CA",
  // ... rest of the fields
};
```

---

## 2. Managing Projects

Projects are stored in **MongoDB** and fetched via the backend API.

### Adding a New Project

**Method 1: Using API (Postman/curl)**

```bash
curl -X POST http://your-backend-url/api/projects \
-H "Content-Type: application/json" \
-d '{
  "title": "Your Project Title",
  "description": "Detailed project description...",
  "technologies": ["Python", "TensorFlow", "Docker"],
  "image": "https://image-url.com/project-image.jpg",
  "github": "https://github.com/yourusername/project",
  "demo": "https://demo-url.com",
  "featured": true
}'
```

**Method 2: Using MongoDB Directly**

1. Connect to MongoDB using MongoDB Compass
2. Navigate to your database → `projects` collection
3. Insert a new document with this structure:

```json
{
  "title": "Project Title",
  "description": "Project description",
  "technologies": ["Tech1", "Tech2"],
  "image": "image-url",
  "github": "github-url",
  "demo": "demo-url",
  "featured": true
}
```

### Updating a Project

```bash
curl -X PUT http://your-backend-url/api/projects/{project-id} \
-H "Content-Type: application/json" \
-d '{
  "title": "Updated Title",
  "featured": false
}'
```

### Deleting a Project

```bash
curl -X DELETE http://your-backend-url/api/projects/{project-id}
```

### Getting All Projects

```bash
curl http://your-backend-url/api/projects
```

### Getting Featured Projects Only

```bash
curl http://your-backend-url/api/projects?featured=true&limit=3
```

---

## 3. Managing Blogs (Medium Integration)

Your portfolio **automatically fetches** blog posts from your Medium profile via RSS!

### Setting Up Medium Integration

1. Update your Medium username in backend environment:
   ```bash
   # Edit /app/backend/.env
   MEDIUM_USERNAME=youractualusername
   ```

2. Restart the backend:
   ```bash
   sudo supervisorctl restart backend
   ```

3. Your Medium posts will automatically appear on your portfolio!

### How It Works

- The backend fetches posts from: `https://medium.com/feed/@yourusername`
- It parses the RSS feed and extracts:
  - Title
  - Excerpt
  - Published date
  - Read time (calculated automatically)
  - Tags
  - Featured image
  - Medium article URL

### Testing Medium Integration

```bash
curl http://your-backend-url/api/blogs?limit=3
```

### Important Notes

- ✅ Write all your blogs on Medium.com
- ✅ Portfolio automatically syncs with Medium
- ✅ No need to manually add blog posts
- ✅ Clicking a blog card redirects to Medium article
- ⚠️ If Medium username is not configured, mock blog data will be shown

---

## 4. Uploading Your Resume

### Using API (Postman)

1. Open Postman
2. Create a new POST request to: `http://your-backend-url/api/resume/upload`
3. In the "Body" tab, select "form-data"
4. Add a field:
   - Key: `file` (type: File)
   - Value: Select your PDF resume
5. Send the request

### Using curl

```bash
curl -X POST http://your-backend-url/api/resume/upload \
-F "file=@/path/to/your/resume.pdf"
```

### Checking if Resume Exists

```bash
curl http://your-backend-url/api/resume/exists
```

### Downloading Current Resume

```bash
curl http://your-backend-url/api/resume/download -o resume.pdf
```

### Important Notes

- ✅ Only PDF files are accepted
- ✅ Uploading a new resume overwrites the old one
- ✅ Resume is stored at: `/app/backend/static/uploads/resume.pdf`
- ✅ The "Resume" button in header automatically downloads this file

---

## 5. Viewing Contact Messages

All contact form submissions are saved to MongoDB.

### Get All Contact Messages

```bash
curl http://your-backend-url/api/contact
```

### Get Specific Message

```bash
curl http://your-backend-url/api/contact/{message-id}
```

### Delete a Message

```bash
curl -X DELETE http://your-backend-url/api/contact/{message-id}
```

### Using MongoDB Compass

1. Connect to your MongoDB
2. Navigate to your database → `contacts` collection
3. View all contact form submissions with:
   - Name
   - Email
   - Subject
   - Message
   - Timestamp
   - Read status

---

## 6. Publishing Your Portfolio

Your portfolio is **already deployed** on Emergent!

### Finding Your Live URL

Your portfolio URL is in the environment file:
```bash
# Check frontend/.env
cat /app/frontend/.env | grep REACT_APP_BACKEND_URL
```

The URL will be something like: `https://your-app.emergent.sh`

### Custom Domain (Optional)

To use your own domain (e.g., `yourname.com`):

1. Go to Emergent Dashboard
2. Navigate to your app settings
3. Add custom domain
4. Follow DNS configuration instructions
5. Your portfolio will be accessible at your custom domain!

### What's Already Live

✅ Complete ML/DL Portfolio website
✅ Homepage with all sections
✅ Separate pages for Projects and Blogs
✅ Individual project detail pages
✅ Contact form (saves to database)
✅ Resume download functionality
✅ GitHub & LinkedIn integration
✅ Medium blog integration
✅ Fully responsive (mobile, tablet, desktop)

---

## 7. API Documentation

### Base URL

```
http://your-backend-url/api
```

### Endpoints

#### Projects

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/projects` | Get all projects | `?featured=true&limit=3` |
| GET | `/projects/:id` | Get single project | - |
| POST | `/projects` | Create project | JSON body |
| PUT | `/projects/:id` | Update project | JSON body |
| DELETE | `/projects/:id` | Delete project | - |

#### Blogs

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/blogs` | Get all blogs from Medium | `?limit=3` |
| GET | `/blogs/:id` | Get single blog | - |

#### Contact

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| POST | `/contact` | Submit contact form | JSON body |
| GET | `/contact` | Get all messages | `?limit=100` |
| GET | `/contact/:id` | Get single message | - |
| DELETE | `/contact/:id` | Delete message | - |

#### Resume

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| POST | `/resume/upload` | Upload resume PDF | multipart/form-data |
| GET | `/resume/download` | Download resume | - |
| GET | `/resume/exists` | Check if resume exists | - |

---

## 📊 Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                  FRONTEND                       │
│  (React + React Router + Axios)                 │
│                                                 │
│  Routes:                                        │
│  - /           → Homepage                       │
│  - /projects   → All Projects                   │
│  - /projects/:id → Project Detail               │
│  - /blogs      → All Blogs                      │
└────────────────┬────────────────────────────────┘
                 │
                 │ HTTP Requests
                 ↓
┌─────────────────────────────────────────────────┐
│                  BACKEND                        │
│  (FastAPI + Motor/MongoDB)                      │
│                                                 │
│  API Endpoints:                                 │
│  - /api/projects   → MongoDB                    │
│  - /api/contact    → MongoDB                    │
│  - /api/blogs      → Medium RSS                 │
│  - /api/resume     → File System                │
└─────────────────────────────────────────────────┘
         │                           │
         │                           │
         ↓                           ↓
┌──────────────┐           ┌──────────────────┐
│   MongoDB    │           │  Medium RSS Feed │
│              │           │                  │
│  - projects  │           │  @yourusername   │
│  - contacts  │           └──────────────────┘
└──────────────┘
```

---

## 🎨 Design Features

✅ **Minimal Monochrome Design**
- Clean black/white/gray color scheme
- Neon green (#38FF62) accent color
- Sharp rectangular components (no rounded corners)
- Grid background pattern
- Typography hierarchy (large hero titles, monospace labels)

✅ **Fully Responsive**
- Desktop (1920px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)
- Hamburger menu for mobile

✅ **Smooth Interactions**
- Hover effects on images
- Smooth scrolling
- Form validation
- Loading states

---

## 🚀 Quick Start Checklist

- [ ] Update your name, bio, and contact info in `/app/frontend/src/data/mock.js`
- [ ] Replace professional photo URL
- [ ] Update social media links (GitHub, LinkedIn, Medium, Twitter)
- [ ] Add your actual skills and experiences
- [ ] Configure Medium username in `/app/backend/.env`
- [ ] Upload your resume PDF using the API
- [ ] Add your real projects to the database
- [ ] Test the contact form
- [ ] Share your portfolio URL with recruiters! 🎉

---

## 💡 Tips

1. **Adding Projects**: Use MongoDB Compass for easy visual editing
2. **Blogs**: Keep writing on Medium, they'll automatically sync!
3. **Resume**: Update whenever you want via API or file replacement
4. **Contact Messages**: Check MongoDB periodically for new messages
5. **Images**: Use high-quality images from Unsplash or your own

---

## 🆘 Troubleshooting

### Projects Not Showing?
- Check backend logs: `tail -f /var/log/supervisor/backend.*.log`
- Verify MongoDB connection
- Test API: `curl http://localhost:8001/api/projects`

### Blogs Not Loading?
- Verify Medium username is correct in `.env`
- Test API: `curl http://localhost:8001/api/blogs`
- Check if Medium RSS is accessible: `https://medium.com/feed/@yourusername`

### Contact Form Not Working?
- Check backend logs for errors
- Verify MongoDB connection
- Test API: `curl -X POST http://localhost:8001/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}'`

---

## 📞 Need Help?

Your portfolio is production-ready! If you need to make changes:
1. Edit mock.js for static content
2. Use API/MongoDB for projects
3. Write on Medium for blogs
4. Upload resume via API

**Congratulations! Your ML/DL portfolio is live! 🎉**
