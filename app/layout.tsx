import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata : Metadata = {
  title: "CampusLedger – Simplify Campus Management",
  description:
    "CampusLedger is an all-in-one software for educational institutions. Manage students, finances, staff, and more.",
  keywords: [
    "CampusLedger",
    "Campus Management",
    "School ERP",
    "College Software",
    "Education CRM",
  ],
  openGraph: {
    title: "CampusLedger – Simplify Campus Management",
    description: "Manage your campus effortlessly with CampusLedger.",
    url: "https://campusledger.live",
    siteName: "CampusLedger",
    images: [
      {
        url: "https://campusledger.live/logo-website.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusLedger – Simplify Campus Management",
    description: "Manage your campus effortlessly with CampusLedger.",
    images: ["https://campusledger.live/logo-website.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
      <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CampusLedger",
              url: "https://campusledger.live",
              logo: "https://campusledger.live/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-6238964074",
                contactType: "Customer Support",
                email: "info@campusledger.live",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
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

import "./globals.css";import { Toaster } from "react-hot-toast";

