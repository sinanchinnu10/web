import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
    url: "https://campusledger.in",
    siteName: "CampusLedger",
    images: [
      {
        url: "https://campusledger.in/og-image.jpg",
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
    images: ["https://campusledger.in/twitter-image.jpg"],
  },
  additionalInfo: {
    author: "CampusLedger Team",
    version: "1.0.0",
  },
  lastUpdated: new Date().toISOString(),
  contact: {
    email: "campusledger@outlook.in",
    phone: "+91-6238964074",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CampusLedger",
              url: "https://campusledger.in",
              logo: "https://campusledger.in/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-6238964074",
                contactType: "Customer Support",
                email: "campusledger@outlook.in",
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
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
