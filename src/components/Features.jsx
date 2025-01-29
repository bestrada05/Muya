export function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <div className="feature-item">
          <img
            src="/fotos/sostenibilidad_ambiental.png"
            alt="Icon"
            className="feature-icon"
          />
          <h3>Sostenibilidad Ambiental</h3>
        </div>

        <div className="feature-item">
          <img src="/fotos/seguridad.png" alt="Icon" className="feature-icon" />
          <h3>Inversión en Seguridad</h3>
        </div>

        <div className="feature-item">
          <img src="/fotos/etica.png" alt="Icon" className="feature-icon" />
          <h3>Ética Empresarial</h3>
        </div>

        <div className="feature-item">
          <img
            src="/fotos/calidadpro.png"
            alt="Icon"
            className="feature-icon"
          />
          <h3>Calidad Profesional</h3>
        </div>
      </div>
    </section>
  );
}
