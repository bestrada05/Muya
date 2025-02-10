import { usersModel } from '../models/usuariosModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export const verifyCredentials = async (req, res, next) => {
  try {
    const { usu_email, usu_contrasena } = req.body;  
    if (!usu_email || !usu_contrasena) {
      throw { message: 'Email and password required.' };
    }
    const user = await usersModel.getUser(usu_email);
    if (!user) {
      throw { message: `This email is not registered ${usu_email}.` };
    }

    const {password, id} = await usersModel.getContrasena(usu_email, usu_contrasena);
    const verifyPassword = await bcrypt.compare(usu_contrasena, password);
    if (!verifyPassword) {
      throw { message: 'Incorrect password.' };
    }
    req.user = { id, email: usu_email };    
    next();
  } catch (error) {
    console.log('Error Login: ', error.message);
    res.status(500).json({ message: error.message });
  }
};


export const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new Error('Error al obtener Token.');
    }

    const token = authorizationHeader.split(' ')[1];
    if (!token) {
      throw new Error('Formato token incorrecto.');
    }

    const payload = jwt.verify(token, process.env.JWT_PASSWORD);
    if (!payload) {
      throw new Error('Token inválido.');
    }

    req.body.email = payload.email;

    next();
  } catch (error) {
      console.log('Error verificar Token: ', error.message);
      res.status(401).json({ message: error.message });
  }
};

export const verificarRol = (rolesPermitidos) => {
  return async (req, res, next) => {
    try {
      console.log("user_id<---",req.user.id);
      const rolUsuario = await usersModel.getRol(req.user.id);
     
      if (!rolUsuario) return res.status(403).json({ message: "Usuario no encontrado" });

      if (!rolesPermitidos.includes(rolUsuario)) {
        return res.status(403).json({ message: "Acceso denegado" });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: "Error en la validación del rol" });
    }
  };
};
