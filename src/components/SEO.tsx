import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "KlyroSoft | Official Website — AI Agents, Workflow Automation & IT Solutions",
  description = "KlyroSoft is an AI solutions agency specializing in AI agents, workflow automation, voice assistants, and web & mobile development. Visit the official KlyroSoft website.",
  keywords = "KlyroSoft, Klyrosoft, klyrosoft, klyrosoft.com, KlyroSoft official website, KlyroSoft AI agency, AI agents, AI workflow automation, AI voice assistant, web development, mobile app development, IT solutions",
  image = "https://klyrosoft.com/klyrosoft.png",
  url = "https://klyrosoft.com",
  type = "website",
}: SEOProps) => {
  const fullTitle = title.includes("KlyroSoft") ? title : `${title} | KlyroSoft`;
  const fullUrl = url.startsWith("http") ? url : `https://klyrosoft.com${url}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="application-name" content="KlyroSoft" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="KlyroSoft" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />
    </Helmet>
  );
};

export default SEO;

