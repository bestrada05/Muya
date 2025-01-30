import { useParams } from "react-router-dom";

export function ProjectDetail() {
  const { id } = useParams();

  // This would typically fetch project data based on the ID
  const project = {
    name: "Nombre Proyecto",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis at eu vulputate magna faucibus elementum. Quam nisi lobortis ligula ante dolor rhoncus. Massa porta fringilla mus ut enim. Volutpat morbi feugiat magna magnis ligula odio praesent. Ornare ipsum semper venenatis tellus consectetur ex. Massa ad suscipit elit sit habitasse rutrum amet nascetur. Commodo curabitur netus mauris; gravida odio vitae quis tempor.",
    mainImage: {
      src: "/fotos/DSC06165.jpg",
      title: "Título",
    },
    images: [
      {
        id: 1,
        src: "/fotos/DSC06165.jpg",
        title: "Título",
      },
      {
        id: 2,
        src: "/fotos/DSC06165.jpg",
        title: "Título",
      },
      {
        id: 3,
        src: "/fotos/DSC06165.jpg",
        title: "Título",
      },
    ],
  };

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <h1>{project.name}</h1>
        <div className="project-detail-content">
          <p className="project-description">{project.description}</p>
          <div className="project-images">
            <div className="project-main-image">
              <img
                src={project.mainImage.src || "/placeholder.svg"}
                alt={project.mainImage.title}
              />
              <div className="image-overlay">
                <span className="image-title">{project.mainImage.title}</span>
              </div>
            </div>
            <div className="project-images-grid">
              {project.images.map((image) => (
                <div key={image.id} className="project-image-card">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                  />
                  <div className="image-overlay">
                    <span className="image-title">{image.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
