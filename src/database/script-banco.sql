create database universe;
use universe;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45)
)auto_increment = 100;

create table interacao (
idInteracao int primary key auto_increment,
interacao_big char(1),
buracosNegros char(1),
bigCrunch char(1),
multiversos char(1)
);

create table comentario(
idComentario INT PRIMARY KEY AUTO_INCREMENT,
texto VARCHAR(200),
nota VARCHAR(45),
fkUsuario int,
constraint usuariofk foreign key (fkUsuario) references usuario(idUsuario)
);