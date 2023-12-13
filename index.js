const { default: axios } = require('axios');
const express = require('express');
const data = require('../database/databaseAPI.JS');

const app = express();

app.get("/api/testPaulo", async(req, res) => {
    try{
    const response = await  axios.get("https://jsonplaceholder.typicode.com/todos")

      res.json(response.data)
    } catch (error) {
      res.status(500).json({error: 'Erro ao buscar dados da API externa'});
    }
});

const dados = {
    userId:	1,
    id:201,
    title:"testando metodo Post",
   completed:false
}
app.post("/api/testPaulo/post", async(req, res) => {
    try{
        const response = await  axios.post("https://jsonplaceholder.typicode.com/todos", dados)
        res.json(response.data);
        } catch (error) {
          res.status(500).json({error: 'Erro ao buscar dados da API externa'});
        }
})


const PORT = "4000"
app.listen(PORT, ()=> {
    console.log(`Server Running Lorrys Code on the door ${PORT}👌`)
})