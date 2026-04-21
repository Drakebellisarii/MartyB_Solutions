import { useEffect, useCallback } from "react";

export default function ParticlesBg() {
  const initParticles = useCallback((isDark) => {
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    if (window.pJSDom?.length > 0) {
      window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
    }

    // Marty B palette: gold particles + blue lines on dark navy
    const colors = isDark
      ? {
          particles: "#C9A84C",   // gold
          lines: "#1E6EF5",       // brand blue
          accent: "#0A1628",      // deep navy stroke
        }
      : {
          particles: "#0277bd",
          lines: "#0288d1",
          accent: "#039be5",
        };

    window.particlesJS("particles-js", {
      particles: {
        number: { value: 120, density: { enable: true, value_area: 900 } },
        color: { value: colors.particles },
        shape: { type: "circle", stroke: { width: 0.5, color: colors.accent } },
        opacity: {
          value: 0.55,
          random: true,
          anim: { enable: true, speed: 0.8, opacity_min: 0.2 },
        },
        size: {
          value: 2.5,
          random: true,
          anim: { enable: true, speed: 1.5, size_min: 0.8 },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: colors.lines,
          opacity: 0.3,
          width: 1,
        },
        move: { enable: true, speed: 1.5, random: true, out_mode: "bounce" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.7 } },
          push: { particles_nb: 3 },
          repulse: { distance: 160, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const html = document.documentElement;
      const detectDark = () =>
        html.classList.contains("dark") ||
        html.getAttribute("data-theme") === "dark";

      initParticles(detectDark());

      const observer = new MutationObserver(() => initParticles(detectDark()));
      observer.observe(html, {
        attributes: true,
        attributeFilter: ["class", "data-theme"],
      });
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [initParticles]);

  return (
    <div
      id="particles-js"
      className="w-full h-full absolute inset-0 transition-colors duration-500"
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 50% 0%, #0E1E35 0%, #070D1A 50%, #050D1A 100%)",
      }}
    />
  );
}
