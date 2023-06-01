var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT 
            a.idComentario,
            a.titulo,
            a.descricao,
            a.classificacao,
            a.fk_usuario,
            u.idUsuario,
            u.nome,
            u.email
              FROM aviso a
            INNER JOIN usuario u
                ON a.fk_usuario = u.idUsuario;`;
    return database.executar(instrucao);
}

function publicar(titulo, descricao, classificacao, util, emailVar) {
    var instrucao = `INSERT INTO aviso (titulo, descricao, classificacao, util, fk_usuario) VALUES ('${titulo}', '${descricao}', ${classificacao}, '${util}', (select idUsuario from usuario where email = '${emailVar}'));`;
    database.executar(instrucao);
    return database.executar(`select titulo, descricao, classificacao, util, nome from usuario join aviso on idUsuario = Fk_usuario;`)
}

function buscarUltimasClassificacoes() {
    instrucaoSql = `SELECT classificacao AS "classificacao" , count(classificacao) AS "quantidade" FROM aviso GROUP BY classificacao ORDER BY classificacao ASC;    `
    console.log("Executando a instrução SQL do buscar classificacao: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarComentariosEmTempoReal() {
    instrucaoSql = `select titulo, descricao, classificacao, util, nome from usuario join aviso on idUsuario = Fk_usuario;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    publicar,
    buscarComentariosEmTempoReal,
    buscarUltimasClassificacoes
}
