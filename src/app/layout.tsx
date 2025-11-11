import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Princewill - Full Stack Developer Portfolio",
  description:
    "Portfolio of Princewill - Full Stack Developer with 3 years frontend and 6 months backend experience. Specializing in React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Princewill Ohuchukwu" }],
  openGraph: {
    title: "Princewill - Portfolio",
    description:
      "Full Stack Developer with expertise in modern web technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Princewill - Portfolio",
    description:
      "Full Stack Developer with expertise in modern web technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
