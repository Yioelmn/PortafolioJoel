import { Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/NavBar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Footer from './components/organisms/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;