import React, { useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../utils/data';

const SEO = ({
  title = "Pendyala Shankar | Full-Stack & AI Software Developer | 3x Hackathon Winner",
  description = "Portfolio of Pendyala Shankar (cs-techie) - Computer Science Engineering Student at MVSREC (CPI 8.90), Software Developer Intern at LawVriksh, 3x Hackathon Winner. Specializing in Python, React, RESTful APIs, MySQL, and Data Analytics.",
  keywords = "Pendyala Shankar, Shankar Pendyala, cs-techie, MVSREC, Software Developer, Full-Stack Developer, AI Developer, React, Python, LawVriksh Intern, AgriConnect, ASL Sign Language Translator, Data Analytics, Hyderabad Software Engineer",
  url = "https://shankarpendyala.me/",
  ogImage = "https://shankarpendyala.me/og-image.png"
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to set or update meta tag
    const setMetaTag = (nameAttr, valueAttr, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function for link rel tags
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', PERSONAL_INFO.name);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'theme-color', '#030712');

    // Open Graph / Facebook / LinkedIn
    setMetaTag('property', 'og:site_name', `${PERSONAL_INFO.name} | Portfolio`);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'en_US');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:creator', `@${PERSONAL_INFO.handle}`);

    // Canonical Link
    setLinkTag('canonical', url);

    // Dynamic Structured Data (JSON-LD)
    const jsonLdData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${url}#person`,
          "name": PERSONAL_INFO.name,
          "alternateName": ["Shankar Pendyala", PERSONAL_INFO.handle],
          "jobTitle": "Full-Stack & AI Software Developer",
          "description": PERSONAL_INFO.bio.replace(/\n+/g, ' '),
          "url": url,
          "email": PERSONAL_INFO.email,
          "telephone": PERSONAL_INFO.phone,
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": PERSONAL_INFO.college
          },
          "worksFor": {
            "@type": "Organization",
            "name": "LawVriksh",
            "role": "Software Development Intern"
          },
          "sameAs": [
            PERSONAL_INFO.github,
            PERSONAL_INFO.linkedin
          ],
          "knowsAbout": [
            "Software Engineering",
            "Full-Stack Web Development",
            "Python",
            "React.js",
            "RESTful APIs",
            "MySQL",
            "Deep Learning",
            "Computer Vision",
            "Data Analytics",
            "Tableau",
            "PowerBI"
          ],
          "award": "3-Time Hackathon Winner",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressCountry": "India"
          }
        },
        {
          "@type": "WebSite",
          "@id": `${url}#website`,
          "url": url,
          "name": `${PERSONAL_INFO.name} Portfolio`,
          "description": description,
          "publisher": {
            "@id": `${url}#person`
          },
          "inLanguage": "en-US"
        },
        {
          "@type": "ProfilePage",
          "@id": `${url}#profilepage`,
          "url": url,
          "name": title,
          "mainEntity": {
            "@id": `${url}#person`
          }
        },
        {
          "@type": "ItemList",
          "name": "Featured Software Projects",
          "itemListElement": PROJECTS.map((proj, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "SoftwareApplication",
              "name": proj.title,
              "description": proj.summary,
              "applicationCategory": proj.category === "ai_cv" ? "ArtificialIntelligence" : "BusinessApplication",
              "operatingSystem": "Web",
              "author": {
                "@id": `${url}#person`
              },
              "url": proj.githubUrl || url
            }
          }))
        }
      ]
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(jsonLdData, null, 2);

  }, [title, description, keywords, url, ogImage]);

  return null;
};

export default SEO;
