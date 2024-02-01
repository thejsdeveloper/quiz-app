import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Quiz app",
  description: "Test your knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <main
          className="bg-blue-dark min-h-screen 
            flex items-center justify-center
          "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
