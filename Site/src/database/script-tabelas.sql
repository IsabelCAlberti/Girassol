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

CREATE TABLE aviso (
	idComentario INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
    classificacao CHAR(1),
    util CHAR(1),
	fk_usuario INT,
    constraint usuariofk
	FOREIGN KEY (fk_usuario) REFERENCES usuario(idUsuario)
);

select * from usuario;
select * from aviso;


