import "@/app/globals.css";
import Script from "next/script";

export const metadata = {
  title: "Pendyala Shankar | Data Analysis & AI-Driven Developer",
  description: "Portfolio of Pendyala Shankar - Computer Science Engineering student, 3x Hackathon Winner, Software Development Intern skilled in Python, React, AI/ML, and Data Analytics.",
  keywords: ["Pendyala Shankar", "Computer Science", "Portfolio", "Software Development", "React", "Next.js", "Python", "Data Analysis", "AI Developer"],
  authors: [{ name: "Pendyala Shankar" }],
  openGraph: {
    title: "Pendyala Shankar | Data Analysis & AI-Driven Developer",
    description: "Building data-driven and scalable software solutions to solve real-world challenges.",
    type: "website",
    url: "https://github.com/cs-techie",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Script src="/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
