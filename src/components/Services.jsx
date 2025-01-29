import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export function Services() {
  const [expandedId, setExpandedId] = useState(null);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Título",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      number: "02",
      title: "Título",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      number: "03",
      title: "Título",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      number: "04",
      title: "Título",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const toggleService = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="services">
      <div className="services-container">
        <h2>Servicios</h2>
        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <button
                className="service-header"
                onClick={() => toggleService(service.id)}
                aria-expanded={expandedId === service.id}
              >
                <div className="service-title">
                  <span className="service-number">{service.number}</span>
                  <span className="service-name">{service.title}</span>
                </div>
                {expandedId === service.id ? (
                  <ChevronUp className="service-icon" />
                ) : (
                  <ChevronDown className="service-icon" />
                )}
              </button>
              {expandedId === service.id && (
                <div className="service-content">
                  <p>{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
