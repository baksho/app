# ML/DL Portfolio - Technical Documentation

## Project Overview

A professional, production-ready portfolio website for Machine Learning and Deep Learning engineers. Features a minimal monochrome design with full backend integration, Medium blog sync, and MongoDB database.

## 🎯 Key Features

✅ **Multi-Page Portfolio** - Homepage + separate Projects and Blogs pages
✅ **Backend Integration** - FastAPI with MongoDB for dynamic content
✅ **Medium Blog Sync** - Automatically fetches your Medium posts
✅ **Contact Form** - Saves messages to database
✅ **Resume Management** - Upload and download functionality
✅ **Minimal Monochrome Design** - Sharp, professional aesthetic
✅ **Fully Responsive** - Works on all devices

## 📖 Documentation Files

- **USER_GUIDE.md** - Complete guide for managing content
- **contracts.md** - API contracts and integration details
- **PORTFOLIO_README.md** - This file (technical documentation)

## 🚀 Quick Reference

### Content Management
- **Edit Personal Info**: `/app/frontend/src/data/mock.js`
- **Add Projects**: Use API or MongoDB
- **Add Blogs**: Write on Medium (auto-syncs)
- **Upload Resume**: Use `/api/resume/upload` endpoint

### API Endpoints
- Projects: `/api/projects`
- Blogs: `/api/blogs`  
- Contact: `/api/contact`
- Resume: `/api/resume/*`

### Service Management
```bash
sudo supervisorctl status        # Check services
sudo supervisorctl restart all   # Restart all services
```

For complete documentation, see **USER_GUIDE.md**
