"""
Seed script to populate the database with initial projects
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


async def seed_projects():
    """Seed initial projects into database"""
    
    projects = [
        {
            "id": "proj-1",
            "title": "Neural Style Transfer for Video",
            "description": "Developed a real-time neural style transfer system that applies artistic styles to video streams using deep convolutional neural networks. Optimized for GPU acceleration and achieved 30 FPS processing speed.",
            "technologies": ["PyTorch", "CUDA", "OpenCV", "Flask"],
            "image": "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTc3MDkyNDQ2OHww&ixlib=rb-4.1.0&q=85",
            "github": "https://github.com/yourusername/neural-style-transfer",
            "demo": "https://demo-link.com",
            "featured": True,
            "created_at": "2024-01-15T00:00:00",
            "updated_at": "2024-01-15T00:00:00"
        },
        {
            "id": "proj-2",
            "title": "Medical Image Segmentation",
            "description": "Built a U-Net based deep learning model for automatic segmentation of medical images. Achieved 92% Dice coefficient on validation set, assisting radiologists in tumor detection and analysis.",
            "technologies": ["TensorFlow", "Keras", "Python", "Docker"],
            "image": "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTc3MDkyNDQ2OHww&ixlib=rb-4.1.0&q=85",
            "github": "https://github.com/yourusername/medical-segmentation",
            "demo": None,
            "featured": True,
            "created_at": "2023-12-10T00:00:00",
            "updated_at": "2023-12-10T00:00:00"
        },
        {
            "id": "proj-3",
            "title": "Sentiment Analysis API",
            "description": "Created a production-ready REST API for sentiment analysis using transformer models. Handles 10K+ requests per day with 94% accuracy across multiple languages. Deployed on AWS with auto-scaling.",
            "technologies": ["BERT", "FastAPI", "AWS", "Redis", "PostgreSQL"],
            "image": "https://images.unsplash.com/photo-1653179241439-c4c10083879a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwyfHxkYXRhJTIwc2NpZW5jZSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NzA5MjQ0Nzh8MA&ixlib=rb-4.1.0&q=85",
            "github": "https://github.com/yourusername/sentiment-api",
            "demo": "https://api-demo-link.com",
            "featured": True,
            "created_at": "2023-11-20T00:00:00",
            "updated_at": "2023-11-20T00:00:00"
        }
    ]
    
    # Clear existing projects
    await db.projects.delete_many({})
    print("Cleared existing projects")
    
    # Insert new projects
    result = await db.projects.insert_many(projects)
    print(f"Inserted {len(result.inserted_ids)} projects")
    
    # Verify
    count = await db.projects.count_documents({})
    print(f"Total projects in database: {count}")


async def main():
    try:
        print("Starting database seeding...")
        await seed_projects()
        print("Database seeding completed successfully!")
    except Exception as e:
        print(f"Error seeding database: {str(e)}")
    finally:
        client.close()


if __name__ == "__main__":
    asyncio.run(main())
