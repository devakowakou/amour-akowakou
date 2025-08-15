import "./globals.css";

import { Metadata } from "next";
import Head from "next/head";
import SpriteAnimate from "./components/ui/SpriteAnimate";
import BottomBar from "./components/ui/BottomBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://amour-akowakou.vercel.app"), // ✅ ajouté
  title: 'devakowakou - Amour Djiawou AKOWAKOU',
  description: "Découvrez devakowakou, dirigé par Amour Djiawou AKOWAKOU, une communauté dédiée à l'innovation, au développement web et mobile, et au marketing digital.",
  other: {
    "google-site-verification": "s2T0_JipF3UXFTxuUnLFWHJjuNxOcFg-L8l-X8dYwGs"
  },
  authors: [{ name: 'Amour Djiawou AKOWAKOU' }],
  keywords: [
    'devakowakou',
    'akowakou dev',
    'akowakou',
    'Comunity',
    'ESGIS',
    'Bénin',
    'Informatique',
    'Programmation',
    'Amour Djiawou AKOWAKOU',
    'Amour',
    'Amour AKOWAKOU',
    'dev akowakou',
    'Développement web',
    'Développement mobile',
    'Marketing digital',
    'Communauté',
  ],
  openGraph: {
    title: 'devakowakou - Amour Djiawou AKOWAKOU',
    description: "Rejoignez devakowakou, une communauté innovante dirigée par Amour Djiawou AKOWAKOU, spécialisée dans le développement et le marketing digital.",
    url: 'https://amour-akowakou.vercel.app/',
    type: 'website',
    images: [
      {
        url: '/icons/image.jpg',
        alt: 'Logo devakowakou',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="s2T0_JipF3UXFTxuUnLFWHJjuNxOcFg-L8l-X8dYwGs" />
      </Head>
      <body className="dark w-full h-full bg-background antialiased">
        {children}
        <SpriteAnimate />
        <BottomBar />
      </body>
    </html>
  );
}
