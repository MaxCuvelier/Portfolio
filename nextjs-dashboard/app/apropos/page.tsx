import Header from "../ui/header";
import Footer from "../ui/footer";
import Image from "next/image";
import portrait from "../../public/images/portrait.png"

const Portrait = portrait

export default function APpropos() {
    return (
     <div className="flex min-h-screen flex-col p-0">
        <Header />
            <div className="flex flex-grow flex-col items-center gap-10">
                <div className="flex sm:flex-raw flex-col items-center pt-8 pb-8 gap-1 sm:gap-8 bg-gray-50 w-full">
                    <Image
                        src={Portrait}
                        alt='Portrait'
                        width={220}
                        height={100}
                        className="object-contain border border-gray-300 rounded-3xl"
                    />
                    <div className="flex flex-col gap-14">
                        <h1 className="text-2xl text-center font-bold">A propos de moi</h1>
                        <p className="text-center">Je suis Maxime cuvelier, 26 ans, jeune développeur spécialisé dans le développement front-end.</p>
                    </div>
                </div>
                <div className=" flex flex-col text-left gap-4 pr-16 pl-16 sm:pl-28 sm:pr-28">
                    <h2 className="font-bold text-left">Mon parcours :</h2>
                        <p>
                            J'ai obtenu mon baccalauréat ES en 2017 puis je me suis orienté vers des études littéraire, d'abord en classe préparatoire khâgne puis en license d'histoire à l'université de
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
            </div>
        <Footer />
     </div>
    )
}