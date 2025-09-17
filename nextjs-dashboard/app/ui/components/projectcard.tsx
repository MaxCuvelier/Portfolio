import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  name: string;
  description: string;
  slug: string;
  image: string;
}

export default function ProjectCard({ name, description, slug, image }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:scale-[1.02] transition cursor-pointer md:h-[360px]">
        <div className="relative w-full h-1/2 md:h-48">
          <Image
            src={image}
            alt={name}
            width={400}
            height={160}
            className="object-contain"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="mt-4 text-pink-500 text-sm font-medium">Voir le projet</p>
      </div>
    </Link>
  );
}