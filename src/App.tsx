import { Header } from "./components/header";
import { HeroSection } from "./components/heroSection";
import { AboutSection } from "./components/aboutSection";
import { PackagesSection } from "./components/packagesSection";
// import { ExperiencesSection } from "./components/experienceSection";
import { HowItWorksSection } from "./components/howWorks";
import { RegistrationForm } from "./components/registrationForm";
import { Gallery } from "./components/galery";
import { Footer } from "./components/footer";
import { Groups } from "./components/groups";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PackagesSection />
        {/* <ExperiencesSection /> */}
        <HowItWorksSection />
        <Groups />
        <RegistrationForm />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
