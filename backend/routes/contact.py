from fastapi import APIRouter, HTTPException, Request
from models import ContactMessage, ContactMessageCreate
from typing import List
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])


@router.post("", response_model=ContactMessage)
async def create_contact_message(message: ContactMessageCreate, request: Request):
    """
    Create a new contact message
    """
    try:
        db = request.state.db
        message_obj = ContactMessage(**message.dict())
        await db.contacts.insert_one(message_obj.dict())
        logger.info(f"Contact message created: {message_obj.id}")
        return message_obj
    except Exception as e:
        logger.error(f"Error creating contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send message")


@router.get("", response_model=List[ContactMessage])
async def get_contact_messages(request: Request, limit: int = 100):
    """
    Get all contact messages (for admin)
    """
    try:
        db = request.state.db
        messages = await db.contacts.find().sort("created_at", -1).limit(limit).to_list(limit)
        return [ContactMessage(**msg) for msg in messages]
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch messages")


@router.get("/{message_id}", response_model=ContactMessage)
async def get_contact_message(message_id: str, request: Request):
    """
    Get a specific contact message
    """
    try:
        db = request.state.db
        message = await db.contacts.find_one({"id": message_id})
        if not message:
            raise HTTPException(status_code=404, detail="Message not found")
        return ContactMessage(**message)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch message")


@router.delete("/{message_id}")
async def delete_contact_message(message_id: str, request: Request):
    """
    Delete a contact message
    """
    try:
        db = request.state.db
        result = await db.contacts.delete_one({"id": message_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Message not found")
        return {"success": True, "message": "Message deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to delete message")
