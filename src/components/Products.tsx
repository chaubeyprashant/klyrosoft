import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    name: "AI Avatar Studio",
    description:
      "Transform your selfies or 2D images into stunning 3D avatars using advanced generative AI. Perfect for gaming, social apps, and virtual reality experiences.",
    image: "https://images.unsplash.com/photo-1603791452906-e3b6b49a7e9c?w=800&q=80",
  },
  {
    name: "SmartCopy AI",
    description:
      "An AI-powered content assistant that creates engaging, SEO-optimized text for blogs, ads, and social media — tailored to your brand’s tone in seconds.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  },
  {
    name: "VisionPro Analytics",
    description:
      "An intelligent computer vision solution that detects, analyzes, and tracks objects in real time for retail, healthcare, and industrial automation.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Upcoming Products
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are constantly working on new and innovative products to meet the needs of our customers.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={product.image} alt={product.name} className="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;