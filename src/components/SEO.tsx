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
  title = "KlyroSoft — AI Agents, Workflow Automation, Web & Mobile Development | Irving TX",
  description = "KlyroSoft (klyrosoft.com) — AI solutions agency founded by Prashant Chaubey in Irving, Texas. Custom AI agents, workflow automation, AI voice assistants, AI chatbots, web apps, mobile apps, SaaS platforms. 500+ clients worldwide.",
  keywords = "KlyroSoft, Klyrosoft, klyrosoft, klyrosoft.com, KlyroSoft official website, KlyroSoft AI, KlyroSoft agency, KlyroSoft Irving TX, KlyroSoft Texas, KlyroSoft Prashant Chaubey, KlyroSoft AI agents, AI agents company, AI workflow automation, AI voice assistant, AI chatbot development, custom AI agents, AI image generation, AI video generation, AI content generation, AI document processing, web development company, React developer, Node.js developer, Flutter app development, SaaS development, full stack development, IT solutions company, digital marketing agency, cloud solutions, DevOps services, software development company Irving TX, AI automation agency, business process automation, intelligent workflow, machine learning solutions, NLP development, computer vision, AI consulting, startup technology partner, enterprise AI solutions, hire AI developers, best AI agency USA, AI agency Texas, KlyroSoft reviews, KlyroSoft services, KlyroSoft portfolio",
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

