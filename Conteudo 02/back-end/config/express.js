const bodyParser = require('body-parser');
const express = require('express');
const routesAlunos = require("../app/routes/alunos");
const routesDisciplinas = require("../app/routes/disciplinas")
const routesMatriculas = require("../app/routes/matriculas")


module.exports = function() {
    let app = express();
    app.set("port", 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.static("/.public"));
    routesAlunos(app);
    routesDisciplinas(app);
    routesMatriculas(app);
    return app;
}