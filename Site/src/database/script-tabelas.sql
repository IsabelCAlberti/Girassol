-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

create database girassol;

use girassol;

DROP database girassol;


CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50)
);

ALTER TABLE usuario modify email VARCHAR(50) UNIQUE;

CREATE TABLE aviso (
	idComentario INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
    classificacao INT,
    util VARCHAR(5),
	fk_usuario INT,
    constraint usuariofk
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

select * from usuario;
select * from aviso;

SELECT classificacao AS "classificacao" , count(classificacao) AS "quantidade" FROM aviso GROUP BY classificacao ORDER BY classificacao ASC;

DELETE FROM `girassol`.`aviso` WHERE (`idComentario` = '16');
DELETE FROM `girassol`.`aviso` WHERE (`idComentario` = '17');