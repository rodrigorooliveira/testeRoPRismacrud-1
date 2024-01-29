const express = require("express")

const todosRoutes = express.Router()

alltodos = [{nome:"aaaa", status: false}];



todosRoutes.post("/todos", (req, res) => {
    const {name} = req.body;
    alltodos.push({name, status: false});
     return res.status(201).json(alltodos);
});

module.exports = todosRoutes;