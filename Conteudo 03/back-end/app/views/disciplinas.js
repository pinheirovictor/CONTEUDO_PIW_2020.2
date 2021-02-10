function render(disciplina) {
    return {
        id: disciplina._id,
        nome: disciplina.nome,
        codigo: disciplina.matricula,
        carga_horaria: disciplina.carga_horaria,
    }
}

module.exports.render = render;

function renderMany(disciplinas) {
    return disciplinas.map(render);
}

module.exports.renderMany = renderMany;