const matriculaController = require("../controllers/matriculas");


module.exports = function(app) {
    app.post("/matriculas", matriculaController.inserirMatriculas);
    app.get("/matriculas", matriculaController.listarMatriculas);
}