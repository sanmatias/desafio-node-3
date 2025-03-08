
const express =require('express');
const app = express();
const cors = require('cors');
const {getAll,insert} = require('./rutas/metodos')

app.listen(3000,console.log("Escuchando"))
app.use(express.json())
app.use(cors())

app.get("/posts",async (req,res)=>{
    
    try{
        const informacion = await getAll()
        return res.json(informacion) 
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"internal server error"})
    }
})

app.post("/posts",async(req,res)=>{
    const datos = req.body;
    if(!datos){
        return res.status(400).json({message:"Title is required"})
    }
    datos.likes = 0;
    try{
        const creacion = await insert(datos);
        return res.json(creacion);
    }catch (error){
        console.log(error);
        return res.status(500).json({message:"internal server error"})
    }
})