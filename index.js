const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pessoasRotas = require("./routes/pessoasRotas");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Rotas ligadas a tabela pessoa
app.use("/api", pessoasRotas.routes);

app.get("/",(req,res) => {
    console.log("Rota raiz");
    res.send("Acesso a raiz da API");
});

app.listen(3003, () => console.log("Servidor funcionando na porta 3003"));