from fastapi import APIRouter, HTTPException
from models import Project, ProjectCreate, ProjectUpdate
from typing import List, Optional
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/projects", tags=["projects"])


@router.get("", response_model=List[Project])
async def get_projects(db, featured: Optional[bool] = None, limit: Optional[int] = None):
    """
    Get all projects with optional filtering
    """
    try:
        query = {}
        if featured is not None:
            query["featured"] = featured
        
        cursor = db.projects.find(query).sort("created_at", -1)
        
        if limit:
            cursor = cursor.limit(limit)
        
        projects = await cursor.to_list(100)
        return [Project(**project) for project in projects]
    except Exception as e:
        logger.error(f"Error fetching projects: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch projects")


@router.get("/{project_id}", response_model=Project)
async def get_project(project_id: str, db):
    """
    Get a specific project by ID
    """
    try:
        project = await db.projects.find_one({"id": project_id})
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        return Project(**project)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch project")


@router.post("", response_model=Project)
async def create_project(project: ProjectCreate, db):
    """
    Create a new project
    """
    try:
        project_obj = Project(**project.dict())
        await db.projects.insert_one(project_obj.dict())
        logger.info(f"Project created: {project_obj.id}")
        return project_obj
    except Exception as e:
        logger.error(f"Error creating project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create project")


@router.put("/{project_id}", response_model=Project)
async def update_project(project_id: str, project_update: ProjectUpdate, db):
    """
    Update an existing project
    """
    try:
        existing_project = await db.projects.find_one({"id": project_id})
        if not existing_project:
            raise HTTPException(status_code=404, detail="Project not found")
        
        update_data = project_update.dict(exclude_unset=True)
        update_data["updated_at"] = datetime.utcnow()
        
        await db.projects.update_one(
            {"id": project_id},
            {"$set": update_data}
        )
        
        updated_project = await db.projects.find_one({"id": project_id})
        logger.info(f"Project updated: {project_id}")
        return Project(**updated_project)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update project")


@router.delete("/{project_id}")
async def delete_project(project_id: str, db):
    """
    Delete a project
    """
    try:
        result = await db.projects.delete_one({"id": project_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Project not found")
        logger.info(f"Project deleted: {project_id}")
        return {"success": True, "message": "Project deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to delete project")
