import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import ResumeTailor from "@/components/ResumeTailor";

const ResumeTailorPage = () => {
  return (
    <>
      <SEO
        title="AI Resume Tailor | KlyroSoft"
        description="Optimize your LaTeX resume for any job description automatically using AI."
        keywords="resume tailoring, AI resume, LaTeX resume, job description optimization"
        url="https://klyrosoft.com/resume-tailor"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        {/* Main content wrapper to push footer down and handle fixed nav space */}
        <main className="flex-grow pt-24 pb-12">
           <ResumeTailor />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ResumeTailorPage;
