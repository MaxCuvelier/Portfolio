import data from "app/data/data.json";
import { skillIcons } from "../icons";

const skills = data.skills

export default function Banner() {
  return (
    <section className="bg-gray-50 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Bonjour, je suis <span className="text-pink-500">Maxime</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Développeur web débutant, spécialisé dans le développement front-end en React. 
          Bienvenue sur mon portfolio, ici je partage mes projets et mon travail.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mt-4">Mes compétences :</h3>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {skills.map((skill) => (
            <div key={skill} className="flex flex-col items-center">
              {skillIcons[skill] || (
                <span className="text-sm text-gray-600">{skill}</span>
              )}
              <span className="text-xs mt-1 capitalize">{skill}</span>
            </div>
          ))}
        </div>
        <a
          href="#projects"
          className="mt-8 inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition"
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}