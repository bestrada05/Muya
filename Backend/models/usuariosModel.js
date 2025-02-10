import { pool } from '../database/connection.js';
import format from "pg-format";

const getAllUsers = async () => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    return result.rows; // Retorna todos los usuarios
  } catch (error) {
    console.error("Error al obtener usuarios:", error.message);
    throw error;
  }
};

const createUser = async ({usu_nombre, usu_email, usu_contrasena, usu_direccion, usu_telefono, rol_id}) => {

  const query = format(
    `INSERT INTO usuarios (usu_nombre, usu_email, usu_contrasena, usu_direccion, usu_telefono, rol_id)
     VALUES (%L, %L, %L, %L, %L, %L)
     RETURNING *;`,
    usu_nombre, usu_email, usu_contrasena, usu_direccion, usu_telefono, rol_id
  );
  const result = await pool.query(query);
  return result.rows[0];
};

const getUser = async (usu_email='') => {
  try {
    const query = format("SELECT 1 FROM usuarios WHERE usu_email = %L", usu_email);
    const result = await pool.query(query);
    return result.rowCount > 0;
  } catch (error) {
    console.error("Error al obtener usuarios:", error.message);
    throw error;
  }
};

const getContrasena = async (usu_email) => {
  try {
    const query = format("SELECT usu_contrasena, usu_id FROM usuarios WHERE usu_email = %L", usu_email);
    const result = await pool.query(query);
    if (result.rows.length > 0) {
      const usu_contrasena = result.rows[0].usu_contrasena;
      const usu_id = result.rows[0].usu_id;
      return {
        password: usu_contrasena,
        id: usu_id
      };
    }
  } catch (error) {
    console.error("Error al obtener usuarios:", error.message);
    throw error;
  }
};

const verifyUserEmail = async (usu_email='') => {

  try {
     const query = format("SELECT 1 FROM usuarios WHERE usu_email = %L", usu_email);
     const result = await pool.query(query);
    return result.rowCount > 0; // Devuelve true si el email existe, false si no existe
  } catch (error) {
    console.error("Error al verificar email:", error.message);
    throw error;
  }
};



export const usersModel = {
  verifyUserEmail,
  createUser,
  getAllUsers,
  getUser,
  getContrasena
};
