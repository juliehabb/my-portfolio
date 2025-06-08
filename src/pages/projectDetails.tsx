import React from "react";
import { Link } from "react-router-dom";

export default function ProjectDetails() {
  return (
    <div className="w-full text-gray-900 font-sans bg-gradient-to-tr from-white via-pink-100 to-yellow-100 min-h-screen">
    {/* Navbar */}
      <nav className="max-w-screen-xl mx-auto px-6 py-6 flex justify-between items-center border-b text-sm font-medium">
        <div className="space-x-8">
          <Link to="/" className="hover:underline">HOME</Link>
          <a href="#" className="hover:underline">SKILLS</a>
          <a href="#" className="hover:underline">EDUCATION</a>
          <a href="#" className="hover:underline">PROJECTS</a>
        </div>
        <a href="#" className="hover:underline">CONTACTS</a>
      </nav>

      {/* Project Header */}
      <header className="max-w-screen-xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Project Title</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A short description of the project and what it aims to accomplish. Mention tools, goals, and impact here.
        </p>
      </header>

      {/* Project Content */}
      <section className="max-w-screen-xl mx-auto px-6 mb-24">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Overview</h2>
          <p>
            This section provides a full overview of the project: what the goals were, the problem it solves, who it's for, and why it matters.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>React & TypeScript</li>
            <li>Tailwind CSS</li>
            <li>REST APIs</li>
            <li>Vite</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
          <p>
            Talk about what was hard, how you overcame it, and what you learned.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-600">
              Screenshot 1
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-600">
              Screenshot 2
            </div>
          </div>
        </div>

        <div>
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            View Live Project
          </a>
        </div>
      </section>

      {/* Footer */}
            <footer className="max-w-screen-xl mx-auto px-6 text-sm text-center pb-12 space-y-2">
        <div>
          📞 +47 48214063 &nbsp;&nbsp; ✉️ julie.habbestad@hotmail.com &nbsp;&nbsp;
          <a href="#" className="hover:underline">LinkedIn</a>
        </div>
        <div className="space-x-4">
          
        </div>
      </footer>
    </div>
  );
}
