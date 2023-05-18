var database = require("../database/config");


function buscarMedidasEmTempoReal() {
    instrucaoSql = ` select count(interacao_big) as interacao_big, 
                            count(buracosNegros) as buracosNegros, 
                            count(bigCrunch) as bigCrunch, 
                            count(multiversos) as multiversos from interacao`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarComentariosEmTempoReal() {
    instrucaoSql = `select texto, nota, nome from usuario join comentario on idUsuario = Fkusuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMedidasEmTempoReal,
    buscarComentariosEmTempoReal
}