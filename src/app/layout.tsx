import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanshul22 Bookmarks App",
  description: "Vanshul22 Bookmark App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
