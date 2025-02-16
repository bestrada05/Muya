"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = formData.nombre;
    const email = formData.email;
    const password = formData.password;
    const password2 = formData.password2;

    try {
      const response = await fetch("http://localhost:5510/usuarios/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          password,
          password2
        }),
      });

      const data = await response.json();
      if (data.error) {
        alert(data.error);
        return;
      }
      alert("Registro exitoso!");
      navigate("/login");
    } catch (error) {
      console.error("Hubo un error:", error.message);
      alert("Error en el registro.");
    } 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="login">
      <div className="login-container">
        <h2 className="login-item">CREA TU CUENTA</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
              required
              className="input-login"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="input-login"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
              className="input-login"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              placeholder="Confirma tu Contraseña"
              required
              className="input-login"
            />
          </div>
          <div className="login-button">
            <button type="submit" className="register-button">
              REGISTRAR
              <UserPlus className="button-icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
