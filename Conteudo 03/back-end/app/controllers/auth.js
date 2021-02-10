const bcrypt = require("bcrypt");
const Aluno = require("../models/aluno");
const jwt = require("jsonwebtoken");

module.exports.logar = function(req, res) {
    Aluno.findOne({ matricula: req.body.matricula })
        .then(function(aluno) {
            if (bcrypt.compareSync(req.body.senha, aluno.senha)) {
                let token = jwt.sign({ id: aluno._id }, "senha_secreta");
                res.status(200).json({ token: token });
            } else {
                res.status(401).send("ERRO!")
            }
        }).catch(function(error) {
            res.status(401).send("ERRO!")
        })
}


module.exports.checar = function(req, res, next) {
    let token = req.headers.token;
    jwt.verify(token, "senha_secreta", function(err, decode) {
        if (err) {
            res.status(401).send("Token inválido");
        } else {
            next();
        }
    })
}