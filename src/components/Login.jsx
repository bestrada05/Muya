"use client";

import { useState } from "react";
import { ArrowRight, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log("Form submitted:", formData);
    alert("Validando Acceso!");
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
        <h2 className="login-item">BIENVENIDO</h2>
        <form onSubmit={handleSubmit} className="contact-form">
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
          <div className="login-button">
            <button type="submit" className="register-button">
              INICIAR SESIÓN
              <ArrowRight className="button-icon" />
            </button>
            <Link to="/register" className="about-button">
              Registrarse
              <UserPlus className="button-icon" />
            </Link>
          </div>
        </form>
      </div> 
    </section>
  );
}
