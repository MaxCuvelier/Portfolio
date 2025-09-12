import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Header from 'app/ui/header'
import Footer from 'app/ui/footer'
import data from "app/data/data.json";
import ProjectCard from "app/ui/components/projectcard";
import Banner from "app/ui/components/banner"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-0">
      <Header />
        <Banner />
        <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mes Projets</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            slug={project.slug}
            image={project.image}
          />
        ))}
      </div>
    </section>
      <Footer />
    </main>
  );
}
