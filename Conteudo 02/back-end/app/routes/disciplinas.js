const disciplinaController = require("../controllers/disciplinas");

module.exports = (app) => {

    app.post("/disciplinas", disciplinaController.inserirDisciplinas);
    app.get("/disciplinas", disciplinaController.listarDisciplinas);

};