export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Felipe",
      image: "/fotos/trabajador1.jpg",
    },
    {
      id: 2,
      name: "Trabajador 2",
      image: "/fotos/trabajador2.jpg",
    },
    {
      id: 3,
      name: "Trabajador 3",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Trabajador 4",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <section className="team">
      <div className="team-container">
        <div className="team-content">
          <h2>Nuestro equipo</h2>
          <p>
            En <b>Muya</b> , somos un equipo multidisciplinario comprometido con
            <b>la agricultura urbana, el paisajismo y la sostenibilidad</b>. Nos
            especializamos en el{" "}
            <b>diseño, ejecución y mantenimiento de espacios verdes</b> ,
            combinando creatividad, conocimiento técnico y responsabilidad
            ambiental. Trabajamos de manera colaborativa para ofrecer{" "}
            <b>soluciones innovadoras y adaptadas a cada entorno</b>, integrando
            <b> tecnología, eficiencia hídrica y criterios ecológicos</b>.
            Buscamos generar un impacto positivo en el medioambiente y fomentar
            una cultura de <b>reverdecimiento y conexión con la naturaleza</b>.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-card-image">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                />
              </div>
              <div className="team-card-name">{member.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
