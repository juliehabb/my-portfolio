import { Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './pages'
import ProjectDetails from './pages/projectDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}