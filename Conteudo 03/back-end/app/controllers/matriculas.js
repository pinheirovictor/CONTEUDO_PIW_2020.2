const Matricula = require("../models/matricula");
const view = require("../views/matriculas");
const jwt = require("jsonwebtoken");

module.exports.inserirMatriculas = function(req, res) {
    //let matricula = req.body;

    let id_disciplina = req.body.disciplina;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_aluno_logado = payload.id;

    let promise = Matricula.create({ disciplina: id_disciplina, aluno: id_aluno_logado });

    promise.then(function(matricula) {
        res.status(201).json(view.render(matricula));
    }).catch(function(error) {
        res.status(400).json({ mensagem: "sua requisição deu erro", error: error });
    })
};


module.exports.listarMatriculas = function(req, res) {
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_aluno_logado = payload.id;

    let promise = Matricula.find({ aluno: id_aluno_logado })
        .populate("aluno")
        .populate("disciplina")
        .exec();

    promise.then(function(matriculas) {
        res.status(200).json(view.renderMany(matriculas));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error });
    });
};