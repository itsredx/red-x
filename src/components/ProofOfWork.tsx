// components/ProofOfWork.tsx

import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Pythra",
    icon: <Github size={16} />,
    description:
      "A Python GUI framework inspired by Flutter, built from scratch. Features include widget registry, state management, layout engine, and more.",
    github: "https://github.com/itsredx/pythra-0.0.1",
    link_label: "Github",
  },
  {
    title: "InquisiStem",
    icon: <Globe size={16} />,
    description:
      "A curiosity-driven 3D learning prototype built in under 6 hours. Combines AI with an interactive 3D vibe for engaging and fun education.",
    github: "https://inquisi-stem.vercel.app/",
    link_label: "InquisiStem",
  },
  {
    title: "FarmWisely",
    icon: <Github size={16} />,
    description:
      "An AI-powered assistant that gives smart farm recommendations based on user-submitted data. Built for rural impact and simplicity.",
    github: "https://github.com/itsredx/Farmwisely-mobile",
    link_label: "Github",
  },
];

export default function ProofOfWork() {
  return (
    <section className="py-12 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">🚀 Proof of Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="border border-muted rounded-2xl p-4 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{proj.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-500 hover:underline"
                >
                  {proj.link_label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
