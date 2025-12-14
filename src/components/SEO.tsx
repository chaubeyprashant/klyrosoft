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
  title = "KlyroSoft - AI Agents, Workflow Automation & IT Solutions | Expert AI Development",
  description = "KlyroSoft specializes in AI agents, AI workflow automation, voice assistants, image & video generation. Expert IT services, web development, mobile apps, and digital solutions. 500+ satisfied clients, 150+ projects completed.",
  keywords = "KlyroSoft, Klyrosoft, AI agents, AI workflow automation, AI voice assistant, AI image generation, AI video generation, AI chatbot, custom AI agents, intelligent workflows, IT services, web development, mobile app development",
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
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
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

