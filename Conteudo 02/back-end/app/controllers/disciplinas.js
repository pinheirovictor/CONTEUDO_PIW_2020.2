const Disciplina = require("../models/disciplina");
const view = require("../views/disciplinas");

module.exports.inserirDisciplinas = function(req, res) {
    let disciplina = req.body;
    let promise = Disciplina.create(disciplina);

    promise.then(function(disciplina) {
        res.status(201).json(view.render(disciplina));
    }).catch(function(error) {
        res.status(400).json({ mensagem: "sua requisição deu erro", error: error });
    })
};

module.exports.listarDisciplinas = function(req, res) {
    let promise = Disciplina.find().exec();

    promise.then(function(disciplinas) {
        res.status(200).json(view.renderMany(disciplinas));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error });
    });
};