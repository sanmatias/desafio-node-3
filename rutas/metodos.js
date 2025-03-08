const {pool}  = require('../db/conexion')

const getAll = async () =>{
    const consulta = 'SELECT * FROM posts'
    const resultado = await pool.query(consulta)
    return resultado.rows

}

const insert = async (datos) =>{
    const consulta = 'INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1, $2, $3,$4) RETURNING *'
    const {rows} = await pool.query(consulta,[datos.titulo ,datos.url,datos.descripcion,datos.likes])
    return rows[0];
}
module.exports = {getAll,insert}