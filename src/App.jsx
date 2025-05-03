import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import ErrorBoundary from "./components/ErrorBoundary";
import HireMeButton from "./components/HireMeButton";
import ProfileImage from "./components/profileImage";

function App() {
  console.log("Rendering App component");
  return (
    <ErrorBoundary>
      <div className="min-h-screen relative">
        {/* Starry Background */}
        <div className="stars">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="star" />
          ))}
        </div>
        {/* HireMeButton - Fixed in Top-Right */}
        <div className="fixed top-4 left-4 z-50">
          <HireMeButton isSticky={true} />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          {/* Hero Section - Fixed on the left for desktop */}
          <div className="md:sticky md:top-0 md:h-screen md:flex md:items-center">
            <Hero />
          </div>
          {/* Scrollable Content on the right for desktop */}
          <div className="md:overflow-y-auto">
            <About />
            <Technologies />
            <Projects />
            <Experiences />
            <Contact />
            <ProfileImage />
            <Footer />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;