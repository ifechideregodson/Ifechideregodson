import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ifechid ere Godson | Software Developer & AI Builder",
    template: "%s | Ifechid ere Godson"
  },
  description: "Portfolio of Ifechid ere Godson — software development, AI and medical technology, online education, and digital media projects.",
  applicationName: "Ifechid ere Godson Portfolio",
  keywords: ["Ifechid ere Godson", "software developer", "web developer Nigeria", "Next.js developer", "AI projects", "medical AI", "portfolio"],
  authors: [{ name: "Ifechid ere Godson" }],
  creator: "Ifechid ere Godson",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Ifechid ere Godson Portfolio",
    title: "Ifechid ere Godson | Software Developer & AI Builder",
    description: "Explore software, AI, education, and media projects by Ifechid ere Godson.",
    url: siteUrl
  },
  twitter: {
    card: "summary_large_image",
    title: "Ifechid ere Godson | Software Developer & AI Builder",
    description: "Software development, AI, education, and media projects."
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  alternates: { canonical: "/" }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b0d12" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ifechid ere Godson",
    url: siteUrl,
    jobTitle: "Software Developer and AI Builder",
    knowsAbout: ["Web Development", "Artificial Intelligence", "Medical Technology", "Online Education"]
  };
  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    {children}
  </body></html>;
}
