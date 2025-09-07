import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Header from 'app/ui/header'
import Footer from 'app/ui/footer'
import data from "app/data/data.json";
import ProjectCard from "app/ui/components/projectcard";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header />
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
          <p className='flex-start '>Bienvenue sur mon Portfolio</p>
        </div>
        <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mes Projets</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
      <Footer />
    </main>
  );
}
