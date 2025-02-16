"use client";

import { useState } from "react";
import { ArrowRight, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = formData.email; 
    const password = formData.password;

    try {
      const response = await fetch("http://localhost:5510/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (!data.token) {
        alert("Autenticación errónea!");
        return;
      }
      
      if (data.error) {
        alert(data.error);
        return;
      }
      alert("Autenticación exitosa!");
      localStorage.setItem("token", data.token);
      navigate("/productos");
    } catch (error) {
      console.error("Hubo un error:", error.message);
      alert("Error en la autenticación.");
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
            <Link to="/register" className="register-button">
              Registrarse
              <UserPlus className="button-icon" />
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
