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


function publicar(titulo, descricao, classificacao, idUsuario) {
    var instrucao = `INSERT INTO aviso (titulo, descricao, classificacao, fk_usuario) VALUES ('${titulo}', '${descricao}', ${classificacao}, ${idUsuario});`;
    return database.executar(instrucao);
}

function deletar(idComentario) {
    var instrucao = ` DELETE FROM aviso WHERE id = ${idComentario}; `;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    publicar,
     deletar
}
