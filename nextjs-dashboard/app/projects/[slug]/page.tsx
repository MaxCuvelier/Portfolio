import data from "../../data/data.json";
import { notFound } from "next/navigation";
import Header from 'app/ui/header'
import Footer from 'app/ui/footer'
import { Metadata } from "next";

const DEFAULT_IMAGE = "https://www.ton-site.com/images/default-preview.png";


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = data.projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Projet introuvable | Portfolio de Toto",
      description: "Ce projet n'existe pas dans mon portfolio.",
    };
  }

  return {
    title: `${project.name} | Portfolio de Toto`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      url: `https://www.ton-site.com/projects/${project.slug}`,
      images: [
        {
          url: project.image || DEFAULT_IMAGE,
          width: 1200,
          height: 630,
          alt: `Aperçu du projet ${project.name}`,
        },
      ],
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = data.projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen flex-col p-6">
      <Header />
        <main className="flex-col flex flex-grow">
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
        </main>
      <Footer />
    </div>
  );
}