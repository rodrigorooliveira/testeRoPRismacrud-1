const express = require("express");
const todosRoutes = require("./routes");

const app = express()

app.use(express.json());
app.use(todosRoutes);

app.get("/testa", (req, res) => {
    return res.json("UP tudo certo");
});

app.listen(8080, () => console.log("O Servidor está rondando na porta 8080"));
