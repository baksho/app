from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
import os
import logging
from pathlib import Path

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/resume", tags=["resume"])

UPLOAD_DIR = Path("/app/backend/static/uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

RESUME_PATH = UPLOAD_DIR / "resume.pdf"


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    """
    Upload a resume PDF file
    """
    try:
        # Validate file type
        if not file.filename.endswith('.pdf'):
            raise HTTPException(status_code=400, detail="Only PDF files are allowed")
        
        # Read file content
        content = await file.read()
        
        # Save file
        with open(RESUME_PATH, "wb") as f:
            f.write(content)
        
        logger.info(f"Resume uploaded successfully: {file.filename}")
        
        return {
            "success": True,
            "message": "Resume uploaded successfully",
            "filename": "resume.pdf",
            "size": len(content)
        }
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error uploading resume: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to upload resume")


@router.get("/download")
async def download_resume():
    """
    Download the current resume
    """
    try:
        if not RESUME_PATH.exists():
            raise HTTPException(status_code=404, detail="Resume not found")
        
        return FileResponse(
            path=RESUME_PATH,
            media_type="application/pdf",
            filename="resume.pdf"
        )
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error downloading resume: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to download resume")


@router.get("/exists")
async def check_resume_exists():
    """
    Check if resume exists
    """
    return {
        "exists": RESUME_PATH.exists(),
        "path": str(RESUME_PATH) if RESUME_PATH.exists() else None
    }
