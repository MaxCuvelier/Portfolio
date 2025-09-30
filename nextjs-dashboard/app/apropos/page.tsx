import Header from "../ui/header";
import Footer from "../ui/footer";

export default function APpropos() {
    return (
     <div className="flex min-h-screen flex-col p-0">
        <Header />
            <div className="flex flex-grow flex-col gap-10 pt-8 pr-16 pl-16 sm:pl-24 sm:pr-24">
                <h1 className="text-xl text-center font-bold">A propos de moi</h1>
                    <p>Je suis Maxime cuvelier, 26 ans, jeune développeur spécialisé dans le développement front-end.</p>
                <h2 className="font-bold">Mon parcours :</h2>
                    <p>
                        J'ai obtenu mon baccalauréat ES en 2017 puis je me suis orienté vers des études littéraire, d'abord en classe préparatoire khâgne puis en license d'histoire 
                        à marne la vallée. En 2024 j'ai décider de me réorienter vers le développement web et c'est dans ce cadre que j'ai entrepris une formation Openclassroom en 
                        intégrateur web.
                    </p>
                <h2 className="font-bold">Mes compétences :</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Developpement front-end, spécialité React</li>
                        <li>Rédaction de test fonctionnel et unitaire</li>
                        <li>Gestion de projets</li>
                        <li>Langues : français, anglais</li>
                    </ul>
            </div>
        <Footer />
     </div>
    )
}