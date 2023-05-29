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


function publicar(titulo, descricao, classificacao, emailVar) {
    var instrucao = `INSERT INTO aviso (titulo, descricao, classificacao, fk_usuario) VALUES ('${titulo}', '${descricao}', ${classificacao}, (select idUsuario from usuario where email = '${emailVar}'));`;
    return database.executar(instrucao);
}


function buscarComentariosEmTempoReal() {
    instrucaoSql = `select texto, nota, nome from usuario join comentario on idUsuario = Fkusuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    publicar,
      buscarComentariosEmTempoReal
}
