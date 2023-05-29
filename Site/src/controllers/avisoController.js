var avisoModel = require("../models/avisoModel");

function listarPorUsuario(req, res) {
      avisoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    resultado.status(200).json(resultado);
                } else {
                    resultado.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {

    var titulo = req.body.tituloServer;
    var descricao = req.body.descricaoServer;
    var classificacao = req.body.classificacaoServer;
    var email = req.body.emailVar;
    var util = req.body.utilServer;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (classificacao == undefined) {
        res.status(403).send("A classificação está indefinida!");
    } else {
        avisoModel.publicar(titulo, descricao, classificacao, util, email)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (err) {
                    res.status(500).json(err.sqlMessage);
                }
            );
    }
}

function buscarComentariosEmTempoReal(req, res) {
     avisoModel.buscarComentariosEmTempoReal()
     .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos comentários.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    listarPorUsuario,
    publicar,
     buscarComentariosEmTempoReal
}