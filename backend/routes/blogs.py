from fastapi import APIRouter, HTTPException
from models import BlogPost
from typing import List, Optional
import feedparser
import logging
import os
from datetime import datetime
import re

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/blogs", tags=["blogs"])


def calculate_read_time(content: str) -> str:
    """
    Calculate estimated read time based on word count
    Average reading speed: 200 words per minute
    """
    words = len(content.split())
    minutes = max(1, round(words / 200))
    return f"{minutes} min read"


def clean_html(raw_html: str) -> str:
    """
    Remove HTML tags from text
    """
    cleanr = re.compile('<.*?>')
    cleantext = re.sub(cleanr, '', raw_html)
    return cleantext


def parse_medium_feed(username: str, limit: Optional[int] = None) -> List[BlogPost]:
    """
    Parse Medium RSS feed and convert to BlogPost objects
    """
    try:
        feed_url = f"https://medium.com/feed/@{username}"
        logger.info(f"Fetching Medium feed: {feed_url}")
        
        feed = feedparser.parse(feed_url)
        
        if feed.bozo:
            logger.warning(f"Feed parsing warning: {feed.bozo_exception}")
        
        blogs = []
        entries = feed.entries[:limit] if limit else feed.entries
        
        for entry in entries:
            # Extract content
            content = entry.get('content', [{}])[0].get('value', '') if 'content' in entry else entry.get('summary', '')
            clean_content = clean_html(content)
            
            # Extract excerpt (first 200 characters)
            excerpt = clean_content[:200] + '...' if len(clean_content) > 200 else clean_content
            
            # Extract image
            image = None
            if 'media_content' in entry and entry.media_content:
                image = entry.media_content[0].get('url')
            elif 'media_thumbnail' in entry and entry.media_thumbnail:
                image = entry.media_thumbnail[0].get('url')
            
            # Extract tags
            tags = [tag.term for tag in entry.get('tags', [])][:3]
            
            # Parse date
            published_date = entry.get('published_parsed', None)
            date_str = datetime(*published_date[:6]).isoformat() if published_date else datetime.utcnow().isoformat()
            
            blog = BlogPost(
                id=entry.get('id', entry.get('link', '')),
                title=entry.get('title', 'Untitled'),
                excerpt=excerpt,
                date=date_str,
                read_time=calculate_read_time(clean_content),
                tags=tags if tags else ['Tech'],
                url=entry.get('link', ''),
                image=image
            )
            blogs.append(blog)
        
        logger.info(f"Successfully parsed {len(blogs)} blog posts from Medium")
        return blogs
    
    except Exception as e:
        logger.error(f"Error parsing Medium feed: {str(e)}")
        raise


@router.get("", response_model=List[BlogPost])
async def get_blogs(limit: Optional[int] = None):
    """
    Get blog posts from Medium RSS feed
    """
    try:
        # Get Medium username from environment or use default
        medium_username = os.environ.get('MEDIUM_USERNAME', 'yourusername')
        
        if medium_username == 'yourusername':
            # Return mock data if Medium username not configured
            logger.warning("Medium username not configured, returning mock data")
            return [
                BlogPost(
                    id="mock-1",
                    title="Understanding Transformer Architecture: A Deep Dive",
                    excerpt="An in-depth exploration of the transformer architecture, covering attention mechanisms, positional encoding, and practical implementation tips for NLP tasks.",
                    date=datetime(2024, 1, 15).isoformat(),
                    read_time="12 min read",
                    tags=["Deep Learning", "NLP", "Transformers"],
                    url="https://medium.com/@yourusername/understanding-transformer-architecture",
                    image="https://images.unsplash.com/photo-1653179241553-891d33f05410?crop=entropy&cs=srgb&fm=jpg&q=85"
                ),
                BlogPost(
                    id="mock-2",
                    title="Optimizing Deep Learning Models for Production",
                    excerpt="Learn practical techniques for optimizing neural networks for production deployment, including quantization, pruning, and efficient inference strategies.",
                    date=datetime(2023, 12, 10).isoformat(),
                    read_time="10 min read",
                    tags=["MLOps", "Optimization", "Production"],
                    url="https://medium.com/@yourusername/optimizing-dl-models",
                    image="https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=srgb&fm=jpg&q=85"
                ),
                BlogPost(
                    id="mock-3",
                    title="Computer Vision with PyTorch: From Basics to Advanced",
                    excerpt="A comprehensive guide to computer vision using PyTorch, covering CNNs, transfer learning, and building custom architectures for image classification.",
                    date=datetime(2023, 11, 20).isoformat(),
                    read_time="15 min read",
                    tags=["Computer Vision", "PyTorch", "Tutorial"],
                    url="https://medium.com/@yourusername/computer-vision-pytorch",
                    image="https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=srgb&fm=jpg&q=85"
                )
            ][:limit] if limit else [
                BlogPost(
                    id="mock-1",
                    title="Understanding Transformer Architecture: A Deep Dive",
                    excerpt="An in-depth exploration of the transformer architecture, covering attention mechanisms, positional encoding, and practical implementation tips for NLP tasks.",
                    date=datetime(2024, 1, 15).isoformat(),
                    read_time="12 min read",
                    tags=["Deep Learning", "NLP", "Transformers"],
                    url="https://medium.com/@yourusername/understanding-transformer-architecture",
                    image="https://images.unsplash.com/photo-1653179241553-891d33f05410?crop=entropy&cs=srgb&fm=jpg&q=85"
                ),
                BlogPost(
                    id="mock-2",
                    title="Optimizing Deep Learning Models for Production",
                    excerpt="Learn practical techniques for optimizing neural networks for production deployment, including quantization, pruning, and efficient inference strategies.",
                    date=datetime(2023, 12, 10).isoformat(),
                    read_time="10 min read",
                    tags=["MLOps", "Optimization", "Production"],
                    url="https://medium.com/@yourusername/optimizing-dl-models",
                    image="https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=srgb&fm=jpg&q=85"
                ),
                BlogPost(
                    id="mock-3",
                    title="Computer Vision with PyTorch: From Basics to Advanced",
                    excerpt="A comprehensive guide to computer vision using PyTorch, covering CNNs, transfer learning, and building custom architectures for image classification.",
                    date=datetime(2023, 11, 20).isoformat(),
                    read_time="15 min read",
                    tags=["Computer Vision", "PyTorch", "Tutorial"],
                    url="https://medium.com/@yourusername/computer-vision-pytorch",
                    image="https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=srgb&fm=jpg&q=85"
                )
            ]
        
        blogs = parse_medium_feed(medium_username, limit)
        return blogs
    
    except Exception as e:
        logger.error(f"Error fetching blogs: {str(e)}")
        # Return empty list instead of error to prevent frontend breaking
        return []


@router.get("/{blog_id}")
async def get_blog(blog_id: str):
    """
    Get a specific blog post (mainly returns redirect info to Medium)
    """
    try:
        # For now, just return the blog_id as this will be handled by frontend redirect
        return {
            "id": blog_id,
            "message": "Redirecting to Medium",
            "url": blog_id if blog_id.startswith('http') else f"https://medium.com/p/{blog_id}"
        }
    except Exception as e:
        logger.error(f"Error fetching blog: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch blog")
