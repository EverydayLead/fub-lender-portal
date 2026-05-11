import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUB Lender — Build Portal",
  description: "First United Bank · Lending Transformation · Mobile-First Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-lato antialiased bg-[#FAF9F5] text-gray-800">
        {children}
      </body>
    </html>
  );
}
