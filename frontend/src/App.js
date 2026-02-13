import React, { useEffect } from "react";
import "./App.css";
import "./styles/portfolio.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NeuralNetworkBackground from "./components/NeuralNetworkBackground";
import AllProjects from "./pages/AllProjects";
import ProjectDetail from "./pages/ProjectDetail";
import AllPublications from "./pages/AllPublications";
import AllBlogs from "./pages/AllBlogs";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div>
      {/* Neural Network Background */}
      <NeuralNetworkBackground />
      
      {/* Main Content */}
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div>
      <NeuralNetworkBackground />
      <Header />
      <AllProjects />
      <Footer />
    </div>
  );
};

const ProjectDetailPage = () => {
  return (
    <div>
      <NeuralNetworkBackground />
      <Header />
      <ProjectDetail />
      <Footer />
    </div>
  );
};

const PublicationsPage = () => {
  return (
    <div>
      <NeuralNetworkBackground />
      <Header />
      <AllPublications />
      <Footer />
    </div>
  );
};

const BlogsPage = () => {
  return (
    <div>
      <NeuralNetworkBackground />
      <Header />
      <AllBlogs />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
