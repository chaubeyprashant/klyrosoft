import { useParams, Navigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts, BlogPostBlock } from "@/data/blog";
import { servicesData } from "@/data/services";
import { ArrowRight, Calendar, Clock, User, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const renderBlock = (block: BlogPostBlock, index: number) => {
  switch (block.type) {
    case 'h2':
      return <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-foreground">{block.content}</h2>;
    case 'h3':
      return <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">{block.content}</h3>;
    case 'p':
      return <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">{block.content}</p>;
    case 'ul':
      return (
        <ul key={index} className="list-disc list-inside space-y-3 mb-8 text-lg text-muted-foreground">
          {block.items?.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  // Find the related service for the CTA
  const relatedService = servicesData.find((s) => s.slug === post.relatedServiceSlug);

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription}
        keywords={post.keywords}
        url={`https://klyrosoft.com/blog/${post.slug}`}
      />
      
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-grow pt-24 pb-16">
          <article className="max-w-3xl mx-auto px-4 md:px-8">
            
            {/* Back Button */}
            <div className="mb-8">
              <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Blog
              </Link>
            </div>

            {/* Header */}
            <header className="mb-12 border-b border-border pb-8">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wide uppercase">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            {/* Content Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
              {post.content.map((block, index) => renderBlock(block, index))}
            </div>

            {/* Related Service CTA Box */}
            {relatedService && (
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 my-12">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Need help with {relatedService.primaryKeyword}?</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  KlyroSoft's expert team is ready to build tailored solutions for your business.
                </p>
                <Button asChild size="lg">
                  <Link to={`/services/${relatedService.slug}`}>
                    View Our Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
