import Career from "@/components/Career";
import SEO from "@/components/SEO";

const CareerPage = () => {
  return (
    <>
      <SEO
        title="Careers - Join KlyroSoft Team"
        description="Join KlyroSoft team! We're looking for talented developers, AI engineers, and IT professionals. Work on cutting-edge AI projects and innovative solutions."
        keywords="KlyroSoft careers, AI engineer jobs, web developer jobs, IT jobs, software engineer careers, join KlyroSoft"
        url="https://klyrosoft.com/careers"
      />
      <div className="container mx-auto px-4 py-8">
        <Career />
      </div>
    </>
  );
};

export default CareerPage;