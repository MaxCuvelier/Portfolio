import data from "../../data/data.json";
import { notFound } from "next/navigation";
import Header from 'app/ui/header'
import Footer from 'app/ui/footer'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = data.projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen flex-col p-6">
      <Header />
        <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
        <p className="mt-4 text-gray-700">{project.description}</p>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-1/6 mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Voir sur GitHub
        </a>
      <Footer />
    </div>
  );
}