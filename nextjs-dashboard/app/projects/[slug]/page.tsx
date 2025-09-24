import data from "../../data/data.json";
import { notFound } from "next/navigation";
import Header from 'app/ui/header'
import Footer from 'app/ui/footer'
import { PageProps } from "@/.next/types/app/page";
import Image from "next/image";
import { miniSkillIcons } from "../../ui/icons"

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = data.projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
     <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex items-center flex-col flex-grow w-full">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-28 md:pr-14 md:pl-14 w-full items-center md:mt-0 bg-gray-50 pt-6 pb-10">
          <div className="relative flex-shrink-0 w-full md:w-2/5 h-48 md:h-72">
            <Image
              priority={true}
              src={project.image}
              alt={project.name}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 md:mt-14">
              {project.name}
            </h1>

            <div className="flex flex-wrap gap-2">
              {project.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm"
                >
                  {miniSkillIcons[skill] || <span>{skill}</span>}
                  <span>{skill}</span>
                </span>
              ))}
            </div>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center py-10">
          <p className="text-gray-700 leading-relaxed text-lg">
            {project.explication}
          </p>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-48 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition text-center text-lg md:mt-16"
        >
          Voir sur GitHub
        </a>
      </main>

      <Footer />
    </div>
  );
}