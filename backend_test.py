#!/usr/bin/env python3
"""
Backend API Testing Script for ML/DL Portfolio
Tests all backend endpoints as specified in the review request
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, Any, List

# Backend URL from frontend .env
BACKEND_URL = "https://datascience-pro-9.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.results = []
        self.failed_tests = []
        self.passed_tests = []
        
    def log_result(self, test_name: str, success: bool, details: str = "", response_data: Any = None):
        """Log test result"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat(),
            "response_data": response_data
        }
        self.results.append(result)
        
        if success:
            self.passed_tests.append(test_name)
            print(f"✅ {test_name}: PASSED")
        else:
            self.failed_tests.append(test_name)
            print(f"❌ {test_name}: FAILED - {details}")
            
        if details:
            print(f"   Details: {details}")
    
    def test_root_endpoint(self):
        """Test GET /api/"""
        try:
            response = requests.get(f"{BACKEND_URL}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                expected_message = "ML/DL Portfolio API - Running"
                
                if data.get("message") == expected_message:
                    self.log_result("Root Endpoint", True, f"Returned correct message: {data['message']}", data)
                else:
                    self.log_result("Root Endpoint", False, f"Unexpected message: {data.get('message')}", data)
            else:
                self.log_result("Root Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Root Endpoint", False, f"Request failed: {str(e)}")
    
    def test_projects_get_all(self):
        """Test GET /api/projects - should return all 3 seeded projects"""
        try:
            response = requests.get(f"{BACKEND_URL}/projects", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list) and len(data) == 3:
                    # Verify project structure
                    required_fields = ["id", "title", "description", "technologies", "image", "featured"]
                    all_valid = True
                    
                    for project in data:
                        for field in required_fields:
                            if field not in project:
                                all_valid = False
                                break
                    
                    if all_valid:
                        self.log_result("Projects Get All", True, f"Retrieved {len(data)} projects with correct structure", {"count": len(data), "sample": data[0] if data else None})
                    else:
                        self.log_result("Projects Get All", False, "Projects missing required fields", data)
                else:
                    self.log_result("Projects Get All", False, f"Expected 3 projects, got {len(data) if isinstance(data, list) else 'non-list'}", data)
            else:
                self.log_result("Projects Get All", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Projects Get All", False, f"Request failed: {str(e)}")
    
    def test_projects_featured(self):
        """Test GET /api/projects?featured=true"""
        try:
            response = requests.get(f"{BACKEND_URL}/projects?featured=true", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    # All returned projects should be featured
                    all_featured = all(project.get("featured", False) for project in data)
                    
                    if all_featured and len(data) > 0:
                        self.log_result("Projects Featured Filter", True, f"Retrieved {len(data)} featured projects", {"count": len(data)})
                    elif len(data) == 0:
                        self.log_result("Projects Featured Filter", False, "No featured projects found", data)
                    else:
                        self.log_result("Projects Featured Filter", False, "Some returned projects are not featured", data)
                else:
                    self.log_result("Projects Featured Filter", False, "Response is not a list", data)
            else:
                self.log_result("Projects Featured Filter", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Projects Featured Filter", False, f"Request failed: {str(e)}")
    
    def test_projects_featured_limit(self):
        """Test GET /api/projects?featured=true&limit=2"""
        try:
            response = requests.get(f"{BACKEND_URL}/projects?featured=true&limit=2", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list) and len(data) <= 2:
                    all_featured = all(project.get("featured", False) for project in data)
                    
                    if all_featured:
                        self.log_result("Projects Featured Limit", True, f"Retrieved {len(data)} featured projects (limit 2)", {"count": len(data)})
                    else:
                        self.log_result("Projects Featured Limit", False, "Some returned projects are not featured", data)
                else:
                    self.log_result("Projects Featured Limit", False, f"Expected max 2 projects, got {len(data) if isinstance(data, list) else 'non-list'}", data)
            else:
                self.log_result("Projects Featured Limit", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Projects Featured Limit", False, f"Request failed: {str(e)}")
    
    def test_projects_create(self):
        """Test POST /api/projects - create a new test project"""
        try:
            test_project = {
                "title": "Test Project",
                "description": "Test Description",
                "technologies": ["Test"],
                "image": "http://test.com/img.jpg",
                "featured": False
            }
            
            response = requests.post(f"{BACKEND_URL}/projects", json=test_project, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Verify the created project has required fields
                required_fields = ["id", "title", "description", "technologies", "image", "featured"]
                has_all_fields = all(field in data for field in required_fields)
                
                if has_all_fields and data["title"] == test_project["title"]:
                    self.created_project_id = data["id"]  # Store for verification
                    self.log_result("Projects Create", True, f"Created project with ID: {data['id']}", data)
                else:
                    self.log_result("Projects Create", False, "Created project missing fields or incorrect data", data)
            else:
                self.log_result("Projects Create", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Projects Create", False, f"Request failed: {str(e)}")
    
    def test_projects_verify_created(self):
        """Verify the created project appears in GET /api/projects"""
        if not hasattr(self, 'created_project_id'):
            self.log_result("Projects Verify Created", False, "No project was created to verify")
            return
            
        try:
            response = requests.get(f"{BACKEND_URL}/projects", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Look for our created project
                created_project = next((p for p in data if p.get("id") == self.created_project_id), None)
                
                if created_project and created_project["title"] == "Test Project":
                    self.log_result("Projects Verify Created", True, f"Created project found in projects list", created_project)
                else:
                    self.log_result("Projects Verify Created", False, "Created project not found in projects list", {"searched_id": self.created_project_id, "found_projects": len(data)})
            else:
                self.log_result("Projects Verify Created", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Projects Verify Created", False, f"Request failed: {str(e)}")
    
    def test_blogs_get_all(self):
        """Test GET /api/blogs - should return mock blog data"""
        try:
            response = requests.get(f"{BACKEND_URL}/blogs", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list) and len(data) > 0:
                    # Verify blog structure
                    required_fields = ["id", "title", "excerpt", "date", "read_time", "tags", "url"]
                    sample_blog = data[0]
                    has_all_fields = all(field in sample_blog for field in required_fields)
                    
                    if has_all_fields:
                        self.log_result("Blogs Get All", True, f"Retrieved {len(data)} blogs with correct structure", {"count": len(data), "sample": sample_blog})
                    else:
                        missing_fields = [field for field in required_fields if field not in sample_blog]
                        self.log_result("Blogs Get All", False, f"Blogs missing required fields: {missing_fields}", sample_blog)
                else:
                    self.log_result("Blogs Get All", False, f"Expected blog list, got {type(data)} with length {len(data) if isinstance(data, list) else 'N/A'}", data)
            else:
                self.log_result("Blogs Get All", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Blogs Get All", False, f"Request failed: {str(e)}")
    
    def test_blogs_limit(self):
        """Test GET /api/blogs?limit=2"""
        try:
            response = requests.get(f"{BACKEND_URL}/blogs?limit=2", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list) and len(data) <= 2:
                    self.log_result("Blogs Limit", True, f"Retrieved {len(data)} blogs (limit 2)", {"count": len(data)})
                else:
                    self.log_result("Blogs Limit", False, f"Expected max 2 blogs, got {len(data) if isinstance(data, list) else 'non-list'}", data)
            else:
                self.log_result("Blogs Limit", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Blogs Limit", False, f"Request failed: {str(e)}")
    
    def test_contact_create(self):
        """Test POST /api/contact"""
        try:
            test_message = {
                "name": "Test User",
                "email": "test@example.com",
                "subject": "Test Subject",
                "message": "Test message content"
            }
            
            response = requests.post(f"{BACKEND_URL}/contact", json=test_message, timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Verify the created message has required fields
                required_fields = ["id", "name", "email", "subject", "message", "created_at", "read"]
                has_all_fields = all(field in data for field in required_fields)
                
                if has_all_fields and data["name"] == test_message["name"]:
                    self.created_message_id = data["id"]  # Store for verification
                    self.log_result("Contact Create", True, f"Created contact message with ID: {data['id']}", data)
                else:
                    self.log_result("Contact Create", False, "Created message missing fields or incorrect data", data)
            else:
                self.log_result("Contact Create", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Contact Create", False, f"Request failed: {str(e)}")
    
    def test_contact_get_all(self):
        """Test GET /api/contact"""
        try:
            response = requests.get(f"{BACKEND_URL}/contact", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    # Look for our created message if it exists
                    if hasattr(self, 'created_message_id'):
                        created_message = next((m for m in data if m.get("id") == self.created_message_id), None)
                        
                        if created_message:
                            self.log_result("Contact Get All", True, f"Retrieved {len(data)} messages, including created test message", {"count": len(data), "found_test_message": True})
                        else:
                            self.log_result("Contact Get All", False, f"Retrieved {len(data)} messages, but test message not found", {"count": len(data), "searched_id": self.created_message_id})
                    else:
                        self.log_result("Contact Get All", True, f"Retrieved {len(data)} contact messages", {"count": len(data)})
                else:
                    self.log_result("Contact Get All", False, f"Expected message list, got {type(data)}", data)
            else:
                self.log_result("Contact Get All", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Contact Get All", False, f"Request failed: {str(e)}")
    
    def test_resume_exists(self):
        """Test GET /api/resume/exists"""
        try:
            response = requests.get(f"{BACKEND_URL}/resume/exists", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if "exists" in data:
                    self.log_result("Resume Exists Check", True, f"Resume exists: {data['exists']}", data)
                else:
                    self.log_result("Resume Exists Check", False, "Response missing 'exists' field", data)
            else:
                self.log_result("Resume Exists Check", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Resume Exists Check", False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend API Tests for: {BACKEND_URL}")
        print("=" * 60)
        
        # Test in order as specified in review request
        self.test_root_endpoint()
        self.test_projects_get_all()
        self.test_projects_featured()
        self.test_projects_featured_limit()
        self.test_projects_create()
        self.test_projects_verify_created()
        self.test_blogs_get_all()
        self.test_blogs_limit()
        self.test_contact_create()
        self.test_contact_get_all()
        self.test_resume_exists()
        
        # Print summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"✅ Passed: {len(self.passed_tests)}")
        print(f"❌ Failed: {len(self.failed_tests)}")
        print(f"📈 Success Rate: {len(self.passed_tests)}/{len(self.results)} ({len(self.passed_tests)/len(self.results)*100:.1f}%)")
        
        if self.failed_tests:
            print(f"\n🔍 Failed Tests:")
            for test in self.failed_tests:
                print(f"   - {test}")
        
        return len(self.failed_tests) == 0


def main():
    """Main test runner"""
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Save detailed results to file
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump(tester.results, f, indent=2, default=str)
    
    print(f"\n📄 Detailed results saved to: /app/backend_test_results.json")
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()