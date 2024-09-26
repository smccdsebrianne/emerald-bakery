import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emerald Bakery",
  description:
    "A San Mateo County local custom bakery specializing in custom cookies, cupcakes, pastries, and petite desserts for any occasion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
