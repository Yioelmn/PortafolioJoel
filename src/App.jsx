import { Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/NavBar";
import Footer from './components/organisms/Footer';
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import News from "./pages/News";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;