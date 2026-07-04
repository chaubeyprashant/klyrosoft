import Career from "@/components/Career";
import SEO from "@/components/SEO";

const CareerPage = () => {
  return (
    <>
      <SEO
        title="Careers at KlyroSoft — AI Engineer, Developer & Designer Jobs | Irving TX"
        description="Join KlyroSoft! We're hiring AI engineers, full-stack developers, UI/UX designers, and DevOps engineers. Work on cutting-edge AI agents and workflow automation projects. Remote-first team based in Irving, Texas."
        keywords="KlyroSoft careers, KlyroSoft jobs, AI engineer jobs, web developer jobs Irving TX, React developer jobs, Node.js jobs, Flutter developer jobs, DevOps engineer jobs, UI UX designer jobs, software engineer careers, join KlyroSoft team, AI startup jobs, remote developer jobs, full stack developer jobs Texas"
        url="https://klyrosoft.com/careers"
      />
      <div className="container mx-auto px-4 py-8">
        <Career />
      </div>
    </>
  );
};

export default CareerPage;