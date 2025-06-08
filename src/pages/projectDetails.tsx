import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useState } from "react";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [copied, setCopied] = useState(false); 

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!project) {
    return <div className="p-6">Project not found.</div>;
  }

  return (
    <div className="w-full text-gray-900 font-sans bg-gradient-to-tr from-white via-pink-100 to-yellow-100 min-h-screen">
      <nav className="max-w-screen-xl mx-auto px-6 py-6 flex justify-between items-center border-b text-sm font-medium">
        <div className="space-x-8">
          <Link to="/" className="hover:underline">HOME</Link>
          <a href="#" className="hover:underline">SKILLS</a>
          <a href="#" className="hover:underline">EDUCATION</a>
          <a href="#" className="hover:underline">PROJECTS</a>
        </div>
        <a href="#" className="hover:underline">CONTACTS</a>
      </nav>

      <header className="max-w-screen-xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {project.description}
        </p>
        {/* Copy Link Button */}
        <button
         onClick={copyLink}
          className={`mt-4 px-4 py-2 text-sm rounded transition font-medium ${
           copied
            ? "bg-green-500 text-white"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
           >
          {copied ? "Link Copied!" : "Copy Link"}
          </button>
      </header>

      <section className="max-w-screen-xl mx-auto px-6 mb-24">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-1">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Screenshot</h2>
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-md mx-auto rounded shadow"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            View Live Project
          </a>

          {project.readme && (
            <a
              href={project.readme}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 text-white font-medium rounded hover:bg-gray-800 transition"
            >
              Read README
            </a>
          )}
        </div>
      </section>

      <footer className="max-w-screen-xl mx-auto px-6 text-sm text-center pb-12 space-y-2">
        <div>
          📞 +47 48214063 &nbsp;&nbsp; ✉️ julie.habbestad@hotmail.com &nbsp;&nbsp;
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
