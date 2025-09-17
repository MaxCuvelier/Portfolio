export default function Banner() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Bonjour, je suis <span className="text-pink-500">Maxime</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Développeur web débutant, spécialisé dans le développement front-end en React. 
          Bienvenue sur mon portfolio, ici je partage mes projets et mon travail.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}