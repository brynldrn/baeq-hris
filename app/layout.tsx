import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "HRIS by 3.28",
  description: "HRIS SaaS"
};

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='dark'>
      <UserProvider>
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
      </UserProvider>
    </html>
  );
}
