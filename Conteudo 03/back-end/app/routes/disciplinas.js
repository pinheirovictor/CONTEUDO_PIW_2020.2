const disciplinaController = require("../controllers/disciplinas");
const controllerAuth = require("../controllers/auth");

module.exports = (app) => {

    app.use("/disciplinas", controllerAuth.checar);
    app.post("/disciplinas", disciplinaController.inserirDisciplinas);
    app.get("/disciplinas", disciplinaController.listarDisciplinas);

};