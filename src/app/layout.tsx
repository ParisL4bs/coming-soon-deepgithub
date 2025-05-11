import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Deep Github",
  description: "Explore and connect your code and docs with the community. Welcome to the deep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
