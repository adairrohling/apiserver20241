import { pool } from "../shared/database";
import { Request, Response, Router } from "express";


export async function listStudent(req: Request, res: Response) {
  const client = await pool.connect();
  try {
    const products = await client.query(`select * from students`)
    if (products.rowCount === 0) {
      return res.status(404).json({ message: "não encontrado" });
    }
    return res.status(200).json(products.rows);
  }catch(error){
    console.log(error)
  }finally{
    client.release;
  }
}

export async function saveStudent(req: Request, res: Response) {
  const client = await pool.connect();
  const student = req.body;
  console.log(student);
  try {
    const response = await client.query(
      `insert INTO students (name, email) VALUES ('${student.name}','${student.email}' ) RETURNING *`,
    );
    console.log(response.rows[0]);
    res.status(201).json(response.rows[0]);
  } catch (error) {
    res.status(400).json({ message: 'Dados inválidos:', error});
  } finally {
    client.release();
  }
}



