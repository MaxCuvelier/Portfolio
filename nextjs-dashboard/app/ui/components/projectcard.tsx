import Link from "next/link";

interface ProjectCardProps {
  name: string;
  description: string;
  slug: string;
}

export default function ProjectCard({ name, description, slug }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="mt-4 text-blue-600 text-sm font-medium">Voir le projet →</p>
      </div>
    </Link>
  );
}