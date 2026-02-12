// Mock data for ML/DL Portfolio

export const personalInfo = {
  name: "Suvinava Basak",
  title: "Machine Learning Engineer",
  tagline: "Specializing in Deep Learning & AI Solutions",
  bio: "Passionate Machine Learning Engineer with expertise in developing and deploying deep learning models. Experienced in computer vision, natural language processing, and building scalable AI solutions. Committed to pushing the boundaries of artificial intelligence to solve real-world problems.",
  email: "your.email@example.com",
  location: "Braunschweig, DE",
  image: "https://images.unsplash.com/photo-1618593706014-06782cd3bb3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwaGVhZHNob3R8ZW58MHx8fHwxNzcwOTI0NDU4fDA&ixlib=rb-4.1.0&q=85",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/baksho",
    linkedin: "https://linkedin.com/in/suvinava-basak",
    medium: "https://medium.com/@yourusername",
    twitter: "https://x.com/time_scribbler"
  }
};

export const skills = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn",
  "Deep Learning", "Computer Vision", "NLP", "MLOps",
  "AWS", "Docker", "Kubernetes", "Git",
  "Data Analysis", "Model Deployment", "Neural Networks", "Transformers"
];

export const experiences = [
  {
    id: "exp-1",
    title: "Senior Machine Learning Engineer",
    company: "Tech Company",
    location: "City, Country",
    period: "2022 - Present",
    type: "work",
    description: [
      "Led development of production ML models serving 1M+ users",
      "Implemented end-to-end deep learning pipelines for computer vision applications",
      "Reduced model inference time by 40% through optimization techniques",
      "Mentored junior ML engineers and conducted technical workshops"
    ]
  },
  {
    id: "exp-2",
    title: "Machine Learning Engineer",
    company: "AI Startup",
    location: "City, Country",
    period: "2020 - 2022",
    type: "work",
    description: [
      "Built and deployed NLP models for text classification and sentiment analysis",
      "Designed data preprocessing pipelines handling 100K+ documents daily",
      "Collaborated with cross-functional teams to integrate ML solutions",
      "Achieved 95% model accuracy on production datasets"
    ]
  },
  {
    id: "exp-3",
    title: "Master of Science in Computer Science",
    company: "University Name",
    location: "City, Country",
    period: "2018 - 2020",
    type: "education",
    description: [
      "Specialized in Machine Learning and Artificial Intelligence",
      "Thesis: Advanced Deep Learning Architectures for Image Recognition",
      "GPA: 3.9/4.0",
      "Teaching Assistant for Machine Learning course"
    ]
  }
];

export const projects = [
  {
    id: "proj-1",
    title: "Neural Style Transfer for Video",
    description: "Developed a real-time neural style transfer system that applies artistic styles to video streams using deep convolutional neural networks. Optimized for GPU acceleration and achieved 30 FPS processing speed.",
    technologies: ["PyTorch", "CUDA", "OpenCV", "Flask"],
    image: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTc3MDkyNDQ2OHww&ixlib=rb-4.1.0&q=85",
    github: "https://github.com/yourusername/neural-style-transfer",
    demo: "https://demo-link.com",
    featured: true
  },
  {
    id: "proj-2",
    title: "Medical Image Segmentation",
    description: "Built a U-Net based deep learning model for automatic segmentation of medical images. Achieved 92% Dice coefficient on validation set, assisting radiologists in tumor detection and analysis.",
    technologies: ["TensorFlow", "Keras", "Python", "Docker"],
    image: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTc3MDkyNDQ2OHww&ixlib=rb-4.1.0&q=85",
    github: "https://github.com/yourusername/medical-segmentation",
    demo: null,
    featured: true
  },
  {
    id: "proj-3",
    title: "Sentiment Analysis API",
    description: "Created a production-ready REST API for sentiment analysis using transformer models. Handles 10K+ requests per day with 94% accuracy across multiple languages. Deployed on AWS with auto-scaling.",
    technologies: ["BERT", "FastAPI", "AWS", "Redis", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1653179241439-c4c10083879a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwyfHxkYXRhJTIwc2NpZW5jZSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NzA5MjQ0Nzh8MA&ixlib=rb-4.1.0&q=85",
    github: "https://github.com/yourusername/sentiment-api",
    demo: "https://api-demo-link.com",
    featured: true
  }
];

export const blogs = [
  {
    id: "blog-1",
    title: "Understanding Transformer Architecture: A Deep Dive",
    excerpt: "An in-depth exploration of the transformer architecture, covering attention mechanisms, positional encoding, and practical implementation tips for NLP tasks.",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["Deep Learning", "NLP", "Transformers"],
    url: "https://medium.com/@yourusername/understanding-transformer-architecture",
    image: "https://images.unsplash.com/photo-1653179241553-891d33f05410?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwzfHxkYXRhJTIwc2NpZW5jZSUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NzA5MjQ0Nzh8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: "blog-2",
    title: "Optimizing Deep Learning Models for Production",
    excerpt: "Learn practical techniques for optimizing neural networks for production deployment, including quantization, pruning, and efficient inference strategies.",
    date: "2023-12-10",
    readTime: "10 min read",
    tags: ["MLOps", "Optimization", "Production"],
    url: "https://medium.com/@yourusername/optimizing-dl-models",
    image: "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTc3MDkyNDQ2OHww&ixlib=rb-4.1.0&q=85"
  },
  {
    id: "blog-3",
    title: "Computer Vision with PyTorch: From Basics to Advanced",
    excerpt: "A comprehensive guide to computer vision using PyTorch, covering CNNs, transfer learning, and building custom architectures for image classification.",
    date: "2023-11-20",
    readTime: "15 min read",
    tags: ["Computer Vision", "PyTorch", "Tutorial"],
    url: "https://medium.com/@yourusername/computer-vision-pytorch",
    image: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTc3MDkyNDQ2OHww&ixlib=rb-4.1.0&q=85"
  }
];
