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
            Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis at eu
            vulputate magna faucibus elementum. Quam nisi lobortis ligula ante
            dolor rhoncus. Massa porta fringilla mus ut enim. Volutpat morbi
            feugiat magna magnis ligula odio praesent. Ornare ipsum semper
            venenatis tellus consectetur ex. Massa ad suscipit elit sit
            habitasse rutrum amet nascetur. Commodo curabitur netus mauris;
            gravida odio vitae quis tempor.
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
