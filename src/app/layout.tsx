import type { Metadata } from "next";
import { Nunito, Redacted_Script } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--ff-nunito",
});

const redactedFont = Redacted_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "fallback",
  variable: "--ff-redacted",
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
      <meta charSet="utf-8" />
      <body className={`${nunito.variable} ${redactedFont.variable}`}>
        <main
          className="bg-blue-dark min-h-screen 
            flex items-center justify-center  flex-col
          "
        >
          {children}
        </main>
      </body>
      {/* @ts-ignore */}
      <bds />
    </html>
  );
}
