var database = require("../database/config")


function cadastrar(nome, email) {
 var instrucao = `INSERT INTO usuario (nome, email) VALUES ('${nome}', '${email}')`;
   return database.executar(instrucao);
}

module.exports = {
    cadastrar
};