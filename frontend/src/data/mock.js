// Mock data for ML/DL Portfolio

export const personalInfo = {
  name: "Suvinava Basak",
  title: "Machine Learning Engineer",
  tagline: "Specializing in Deep Learning & AI Solutions",
  bio: "Passionate Machine Learning Engineer with expertise in developing and deploying deep learning models. Experienced in computer vision, natural language processing, and building scalable AI solutions. Committed to pushing the boundaries of artificial intelligence to solve real-world problems.",
  email: "suvinava.basak@outlook.com",
  location: "Braunschweig, DE",
  image: "https://images.unsplash.com/photo-1618593706014-06782cd3bb3b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwaGVhZHNob3R8ZW58MHx8fHwxNzcwOTI0NDU4fDA&ixlib=rb-4.1.0&q=85",
  resume: `${process.env.REACT_APP_BACKEND_URL}/api/resume/download`,
  social: {
    github: "https://github.com/baksho",
    linkedin: "https://linkedin.com/in/suvinava-basak",
    medium: "https://medium.com/@yourusername",
    twitter: "https://x.com/time_scribbler"
  }
};

export const skills = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn",
  "Deep Learning", "Computer Vision", "NLP",
  "AWS", "Docker", "Git", "Data Visualization",
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
  }
];

export const education = [
  {
    id: "edu-1",
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
  },
  {
    id: "edu-2",
    title: "Bachelor of Technology in Computer Science",
    company: "Institute Name",
    location: "City, Country",
    period: "2014 - 2018",
    type: "education",
    description: [
      "Major in Computer Science and Engineering",
      "Relevant coursework: Data Structures, Algorithms, Machine Learning, AI",
      "Final year project: Predictive Analytics using Deep Learning",
      "Dean's List holder for 3 consecutive years"
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

export const publications = [
  {
    id: "pub-1",
    title: "Deep Learning Architectures for Medical Image Segmentation",
    authors: "Your Name, Co-Author Name, Another Author",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: "2024",
    type: "Conference",
    url: "https://arxiv.org/example-link",
    abstract: "This paper presents novel deep learning architectures for automated medical image segmentation. We propose a U-Net variant that achieves state-of-the-art performance on multiple benchmark datasets.",
    featured: true,
    citations: 45,
    pdf: "https://arxiv.org/pdf/example.pdf"
  },
  {
    id: "pub-2",
    title: "Attention Mechanisms in Natural Language Processing: A Survey",
    authors: "Your Name, Research Team",
    venue: "Journal of Machine Learning Research (JMLR)",
    year: "2023",
    type: "Journal",
    url: "https://jmlr.org/example-link",
    abstract: "A comprehensive survey of attention mechanisms in NLP, covering transformer architectures, self-attention variants, and recent advancements in efficient attention for large language models.",
    featured: true,
    citations: 128,
    pdf: "https://jmlr.org/papers/example.pdf"
  },
  {
    id: "pub-3",
    title: "Efficient Neural Architecture Search for Edge Devices",
    authors: "Your Name, Engineering Team",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2023",
    type: "Conference",
    url: "https://proceedings.mlr.press/example",
    abstract: "We introduce an efficient neural architecture search method specifically designed for resource-constrained edge devices, achieving significant improvements in inference speed while maintaining accuracy.",
    featured: true,
    citations: 32,
    pdf: "https://proceedings.mlr.press/example.pdf"
  }
];
