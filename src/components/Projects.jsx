import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      image: "/placeholder.svg?height=400&width=600",
      slug: "project-1",
    },
    {
      id: 2,
      title: "Proyecto 2",
      image: "/placeholder.svg?height=400&width=600",
      slug: "project-2",
    },
    {
      id: 3,
      title: "Proyecto 3",
      image: "/placeholder.svg?height=400&width=600",
      slug: "project-3",
    },
    {
      id: 4,
      title: "Proyecto 4",
      image: "/placeholder.svg?height=400&width=600",
      slug: "project-4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - visibleCards : prevIndex - 1
    );
  };

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>Proyectos</h2>
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}>
            &#8249;
          </button>
          <div className="carousel-content">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="project-card"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className="project-card-image">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                    />
                  </div>
                  <div className="project-card-content">
                    <h3>{project.title}</h3>
                    <button className="project-button">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      <span>Ver más</span>
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <button className="carousel-button next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
