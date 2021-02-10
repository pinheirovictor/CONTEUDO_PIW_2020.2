const alunoController = require("../controllers/aluno");

module.exports = (app) => {

    app.post("/alunos", alunoController.inserirAluno);
    app.get("/alunos", alunoController.listarAlunos);
    app.get("/alunos/:id/matriculas", alunoController.obterMatriculas);
    app.get("/alunos/:id/disciplinas", alunoController.obterDisciplinas);
    app.get("/alunos/:id", alunoController.buscarAlunoPorId);
    app.delete("/alunos/:id", alunoController.removerAluno);
};