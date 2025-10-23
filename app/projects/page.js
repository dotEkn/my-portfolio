export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal site built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS"],
      link: "https://github.com/yourusername/my-portfolio",
    },
    {
      title: "Network Scanner",
      description: "A small Python tool to scan open ports for security analysis.",
      tech: ["Python", "Sockets"],
      link: "https://github.com/yourusername/network-scanner",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6 w-11/12 md:w-3/4 lg:w-1/2">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="border border-gray-700 p-6 rounded-xl hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p className="text-gray-400 mt-2">{proj.description}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-800 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              className="block mt-4 text-blue-400 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
