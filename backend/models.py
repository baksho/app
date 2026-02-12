from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid


class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    read: bool = False


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    technologies: List[str]
    image: str
    github: Optional[str] = None
    demo: Optional[str] = None
    featured: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)


class ProjectCreate(BaseModel):
    title: str
    description: str
    technologies: List[str]
    image: str
    github: Optional[str] = None
    demo: Optional[str] = None
    featured: bool = False


class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    technologies: Optional[List[str]] = None
    image: Optional[str] = None
    github: Optional[str] = None
    demo: Optional[str] = None
    featured: Optional[bool] = None


class BlogPost(BaseModel):
    id: str
    title: str
    excerpt: str
    date: str
    read_time: str
    tags: List[str]
    url: str
    image: Optional[str] = None
