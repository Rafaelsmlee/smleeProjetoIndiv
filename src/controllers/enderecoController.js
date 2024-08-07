var enderecoModel = require("../models/enderecoModel");

function listarEndereco(req, res) {
    console.log(`ESTOU NO enderecoController.js | Na função listarEndereco!`);
    enderecoModel.listarEndereco()
        .then(function (resultado) {
            console.log("Resultado da query:", resultado);
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log("Erro ao realizar a query:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarEndereco
};
