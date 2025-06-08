import { Link } from "react-router-dom";
import { projects } from "../data/projects";


export default function HomePage() {
  return (
    <div className="w-full bg-gradient-to-tr from-white via-pink-100 to-yellow-100 text-gray-900 font-sans">
      
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

      {/* Header */}
      <header className="max-w-screen-xl mx-auto px-6 text-center py-24">
        <h1 className="text-6xl font-bold tracking-wide">FRONT-END</h1>
        <h2 className="text-6xl font-bold tracking-wide">DEVELOPER</h2>
      </header>

      {/* Skills Section */}
      <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 px-6">
        <div>
          <h3 className="font-bold border-b mb-2">HARD SKILLS</h3>
          <ul className="space-y-1">
            <li>HTML5 & CSS3</li>
            <li>Javascript (ES6+)</li>
            <li>Typescript</li>
            <li>React & React Router</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
            <li>Vite / Webpack</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold border-b mb-2">SOFT SKILLS</h3>
          <ul className="space-y-1">
            <li>Problem Solving</li>
            <li>Attention to Detail</li>
            <li>Team Collaboration</li>
            <li>Agile Development</li>
            <li>Communication</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-screen-xl mx-auto px-6 mb-24">
        <h3 className="font-bold border-b mb-8">PROJECTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border p-2 bg-white rounded shadow hover:shadow-md transition">
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-xs text-gray-600">No Image</span>
                )}
              </div>
              <div className="mt-2">
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block mt-2 text-sm font-medium text-blue-600 hover:underline"
                >
                  GO TO PROJECT ↘
                </Link>
              </div>
            </div>
          ))}
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


