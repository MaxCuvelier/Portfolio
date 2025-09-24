import type { Metadata } from "next";
import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: "Portfolio de Cuvelier Maxime",
  description: "Découvrez mes projets et réalisations en développement web.",
  keywords: ["portfolio", "développeur web", "React", "Next.js", "Frontend"],
  authors: [{ name: "Maxime", url: "https://github.com/MaxCuvelier/Portfolio" }],
  openGraph: {
    title: "Portfolio de Maxime Cuvelier",
    description: "Découvrez mes projets et réalisations en développement web.",
    url: "https://portfolio-olive-three-25.vercel.app/",
    siteName: "Portfolio Maxime Cuvelier",
    images: [
      {
        url: "https://www.ton-site.com/images/default-preview.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Maxime",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
