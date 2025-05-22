import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto ({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
    title: "Professores e Disciplinas",
    icons: {
    icon: "/icons/favicon.png",
  },
    description: "Projeto para gerenciar Professores e Disciplinas",

};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={font.variable}>{children}</body>
        </html>
    );
}
