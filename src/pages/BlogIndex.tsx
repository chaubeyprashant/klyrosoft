import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const BlogIndex = () => {
  return (
    <>
      <SEO
        title="KlyroSoft Blog | AI, Mobile, and Web Development Insights"
        description="Read the latest insights from KlyroSoft on AI agents, workflow automation, mobile app development, and software engineering best practices."
        keywords="KlyroSoft blog, AI development blog, mobile app development insights, software engineering articles"
        url="https://klyrosoft.com/blog"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />

        <main className="flex-grow pt-24 pb-16">
          <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Latest Insights</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover actionable strategies, technical guides, and industry trends from our expert software engineers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group h-full">
                  <article className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold tracking-wide uppercase">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogIndex;
