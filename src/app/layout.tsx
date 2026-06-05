import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAP FUTURE MAROC — Orientation & Admission Master au Maroc",
  description:
    "CAP FUTURE MAROC — Accompagnement académique premium. Nous analysons votre dossier, sélectionnons les Masters et Écoles d'ingénieurs reconnus, et vous accompagnons jusqu'à l'admission.",
  keywords: [
    "orientation",
    "master",
    "Maroc",
    "école d'ingénieurs",
    "admission",
    "accompagnement",
    "bac",
    "CAP FUTURE",
    "consultation gratuite",
    "dossier académique",
  ],
  icons: {
    icon: "/logo-orientation.svg",
  },
  openGraph: {
    title: "CAP FUTURE MAROC — Votre Master au Maroc, garanti ou remboursé.",
    description:
      "Nous analysons votre dossier au millimètre, sélectionnons uniquement les Masters et Écoles d'ingénieurs reconnus, et vous accompagnons jusqu'à l'admission.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${jakarta.variable} antialiased bg-[#0B1F3A] text-white font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
