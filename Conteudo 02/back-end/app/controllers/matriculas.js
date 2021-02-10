const Matricula = require("../models/matricula");
const view = require("../views/matriculas");


module.exports.inserirMatriculas = function(req, res) {
    let matricula = req.body;
    let promise = Matricula.create(matricula);

    promise.then(function(matricula) {
        res.status(201).json(view.render(matricula));
    }).catch(function(error) {
        res.status(400).json({ mensagem: "sua requisição deu erro", error: error });
    })
};


module.exports.listarMatriculas = function(req, res) {
    let promise = Matricula.find().populate("aluno").populate("disciplina").exec();

    promise.then(function(matriculas) {
        res.status(200).json(view.renderMany(matriculas));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error });
    });
};