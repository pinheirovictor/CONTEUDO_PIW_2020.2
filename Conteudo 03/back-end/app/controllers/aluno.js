const Aluno = require("../models/aluno");
const view = require("../views/alunos");
const Matricula = require("../models/matricula");
const Disciplina = require("../models/disciplina");
const bcrypt = require("bcrypt");

module.exports.inserirAluno = (req, res) => {
    //let aluno = req.body;

    let aluno = {
        nome: req.body.nome,
        matricula: req.body.matricula,
        senha: bcrypt.hashSync(req.body.senha, 10),
    };
    let promise = Aluno.create(aluno);

    promise.then(function(aluno) {
        res.status(201).json(view.render(aluno));
    }).catch(function(error) {
        res.status(400).json({ mensagem: "sua requisição deu erro", error: error })
    })

};

module.exports.listarAlunos = function(req, res) {
    let promise = Aluno.find().exec();
    promise.then(function(alunos) {
        res.status(200).json(view.renderMany(alunos));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    })
};

module.exports.buscarAlunoPorId = function(req, res) {
    let id = req.params.id;
    let promise = Aluno.findById(id).exec();

    promise.then(function(aluno) {
        res.status(200).json(view.render(aluno));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    });
};

module.exports.removerAluno = function(req, res) {
    let id = req.params.id;
    let promise = Aluno.findByIdAndDelete(id);

    promise.then(function(aluno) {
        res.status(200).json(view.render(aluno));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    })
};


module.exports.obterMatriculas = function(req, res) {
    let id = req.params.id;
    let promise = Matricula.find({ aluno: id }).exec();

    promise.then(function(matriculas) {
        res.status(200).json(matriculas);
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    });

}

module.exports.obterDisciplinas = function(req, res) {
    let id = req.params.id;
    let promise = Matricula.find({ aluno: id }).populate("disciplina").exec();

    promise.then(function(matriculas) {
        let disciplinas = matriculas.map(function(matricula) {
            return matricula.disciplina;
        })
        res.status(200).json(disciplinas)
    }).catch(function(error) {
        res.status(500).json({ mensagem: "sua requisição deu erro", error: error })
    });

}