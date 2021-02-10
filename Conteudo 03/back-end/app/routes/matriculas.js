const matriculaController = require("../controllers/matriculas");
const controllerAuth = require("../controllers/auth");


module.exports = function(app) {
    app.use("/matriculas", controllerAuth.checar);
    app.post("/matriculas", matriculaController.inserirMatriculas);
    app.get("/matriculas", matriculaController.listarMatriculas);
}