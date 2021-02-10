const viewAluno = require("../views/alunos");
const viewDisciplina = require("../views/disciplinas");


function render(matricula) {
    return {
        id: matricula._id,
        aluno: viewAluno.render(matricula.aluno),
        disciplina: viewDisciplina.render(matricula.disciplina),
    }
}

module.exports.render = render;

function renderMany(matriculas) {
    return matriculas.map(render);
}

module.exports.renderMany = renderMany;