import { useEffect, useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Home from "./components/Home";
import Roadmap from "./components/Roadmap";
import Specialties from "./components/Specialties";
import AOS from "aos";
import "aos/dist/aos.css"
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>('Home'); // Default to Home
  const sections = ["Home", "About", "Specialist", "Experience", "Roadmap"];
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether the animation should happen only once
    });
  }, []);

  // Improved intersection observer with more reliable detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px", // Focus on elements near the top of viewport
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5], // Multiple thresholds for better detection
    };
  
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter for intersecting entries first
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        
        if (intersectingEntries.length === 0) return;
        
        // Find the topmost visible section
        let topmostSection = null;
        let smallestTop = Infinity;
    
        intersectingEntries.forEach((entry) => {
          const { top } = entry.boundingClientRect;
          if (top < smallestTop) {
            smallestTop = top;
            topmostSection = entry.target.id;
          }
        });
    
        if (topmostSection) {
          setActiveLink(topmostSection); // Update active link
        }
      },
      observerOptions
    );
  
    // Observe all sections including Feature for scroll detection
    [...sections, "Feature"].forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });
  
    return () => observer.disconnect();
  }, []);
  
  // Enhanced scroll listener that works with the intersection observer
  useEffect(() => {
    const handleScroll = () => {
      // At the very top of the page, ensure Home is active
      if (window.scrollY < 50) {
        setActiveLink("Home");
        return;
      }
      
      // For other positions, find the section that's most visible
      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 3; // Focus on top third of screen
      
      let bestVisibleSection = null;
      let bestVisibility = -1;
      
      // Include Feature section for detection but not for sidebar display
      [...sections, "Feature"].forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        
        // Calculate how much of the section is visible in the top part of viewport
        const visibleTop = Math.max(0, Math.min(viewportMiddle, rect.bottom) - Math.max(0, rect.top));
        const sectionVisibility = visibleTop / viewportMiddle;
        
        if (sectionVisibility > bestVisibility) {
          bestVisibility = sectionVisibility;
          bestVisibleSection = sectionId;
        }
      });
      
      if (bestVisibleSection && bestVisibility > 0.1) { // Only update if reasonably visible
        setActiveLink(bestVisibleSection);
      }
    };
    
    // Use both scroll and resize events for reliable updates
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector(".sidebar");
      if (
        isSidebarOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false); // Close the sidebar
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="font-manrope">
      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 w-[60%] h-full bg-black z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="h-[56px] px-[16px] py-[9px] flex items-center">
          <button
            className="self-end text-white h-full py-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col px-[16px] py-[13px] space-y-[24px]">
          {["Home", "About", "Specialist", "Experience", "Roadmap", "Docs"].map(
            (link, index) => {
              // Make sure the active link check handles section names correctly
              const isActive = activeLink === link || 
                (link === "Specialist" && activeLink === "Specialties");
              
              return (
                <a
                  key={index}
                  href={link === "Docs" ? 'https://sallya1c.gitbook.io/docs' : `#${link}`}
                  className={`text-white font-manrope font-semibold text-[16px] leading-[21.86px] transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-[30%]"
                  }`}
                  target={link === "Docs" ? '_blank' : '_self'}
                  onClick={() => {
                    setIsSidebarOpen(false);
                    if (link !== "Docs") {
                      setActiveLink(link);
                    }
                  }}
                >
                  {link}
                </a>
              );
            }
          )}
          <a
            href="https://creator.bid/agents/678648cdba2b8db95be3f5bb"
            target="_blank"
            className="text-center w-full max-h-[38px] font-manrope font-bold text-base leading-[21.86px] bg-[#287CF1] border-2 border-white/30 rounded-[6px] px-[14px] py-[8px]"
          >
            Buy $A1C
          </a>
        </div>
      </div>

      {/* Main Content */}
      <Home
        setIsSidebarOpen={setIsSidebarOpen}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <div className="bg-gradient-to-b from-black via-[#1a1a1a] to-black overflow-hidden">
        <About />
        <Feature />
        <Specialties />
        <Experience />
        <Roadmap />
        <Faq />
        <Banner />
      </div>
    </div>
  );
}
  

export default App;