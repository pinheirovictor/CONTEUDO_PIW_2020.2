const alunoController = require("../controllers/aluno");
const controllerAuth = require("../controllers/auth");

module.exports = (app) => {

    app.post("/alunos/signin", controllerAuth.logar);
    app.post("/alunos", alunoController.inserirAluno);

    app.use("/alunos", controllerAuth.checar);
    app.get("/alunos", alunoController.listarAlunos);
    app.get("/alunos/:id/matriculas", alunoController.obterMatriculas);
    app.get("/alunos/:id/disciplinas", alunoController.obterDisciplinas);
    app.get("/alunos/:id", alunoController.buscarAlunoPorId);
    app.delete("/alunos/:id", alunoController.removerAluno);
};