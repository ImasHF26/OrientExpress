import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAP FUTURE MAROC — Orientation Étudiante au Maroc",
  description:
    "CAP FUTURE MAROC — Plateforme N°1 d'orientation étudiante au Maroc. Découvrez les écoles adaptées à votre profil et soyez accompagné par nos conseillers experts.",
  keywords: [
    "orientation",
    "étudiant",
    "Maroc",
    "école",
    "université",
    "candidature",
    "conseil",
    "bac",
    "formation",
  ],
  icons: {
    icon: "/logo-orientation.svg",
  },
  openGraph: {
    title: "CAP FUTURE MAROC — Ton avenir mérite une vraie orientation",
    description:
      "Découvre les études adaptées à ton profil et sois accompagné dans ta décision académique.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
