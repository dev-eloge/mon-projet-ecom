import { useEffect, useRef } from "react";

export function useParallaxScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-scroll-animate]");
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const windowCenter = window.innerHeight / 2;
        
        // Si l'élément est en vue (entre le haut et le bas de l'écran)
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Calcul de la progression (0 à 1)
          const progress = 1 - (elementCenter - windowCenter) / (window.innerHeight);
          
          // Applique l'animation proportionnellement
          const opacity = Math.max(0, Math.min(1, 0.3 + progress * 0.7));
          const translateY = Math.max(0, (1 - progress) * 20);
          
          el.style.opacity = opacity;
          el.style.transform = `translateY(${translateY}px)`;
          el.style.transition = "none";
        } else if (rect.top >= window.innerHeight) {
          // Au-dessus de l'écran (pas encore visible)
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
        } else {
          // En bas (complètement passé)
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Appel initial
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
