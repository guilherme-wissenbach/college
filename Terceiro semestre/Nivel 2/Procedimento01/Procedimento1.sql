create database Loja;

use Loja;

create table pessoa(
  id_pessoa int NOT NULL ,
  nome varchar(255) NOT NULL  ,
  logradouro varchar(255) NOT  NULL  ,
  cidade varchar(255)NOT  NULL  ,
  estado char(2)NOT  NULL  ,
  telefone varchar(11)NOT  NULL  ,
  email varchar(255)NOT  NULL    ,
primary key(id_pessoa));

create table pessoa_fisica (
 id_pessoa int NOT NULL,
  cpf varchar(255)  NOT NULL,
  primary key (id_pessoa),
  foreign key (id_pessoa) references pessoa(id_pessoa));

create table pessoa_juridica (
  id_pessoa int NOT NULL,
  cnpj varchar(255)  NOT NULL,
  primary key (id_pessoa),
  foreign key (id_pessoa) references pessoa(id_pessoa));

create table produto (
  id_produto int NOT NULL  ,
  nome varchar(255)  NOT NULL  ,
  quantidade varchar(255)  NOT NULL  ,
  preco_venda numeric(5,2)  NOT NULL    ,
primary key(id_produto));

create table usuario (
  id_usuario int NOT NULL ,
  login varchar(255)   NOT NULL  ,
  senha varchar(255)   NOT NULL    ,
primary key(id_usuario));

create table movimento (
  id_movimento int NOT NULL,
  id_usuario int  NOT NULL  ,
  id_pessoa int  NOT NULL  ,
  id_produto int  NOT NULL  ,
  quantidade int  NOT NULL  ,
  tipo char  NOT NULL  ,
  valor_unitario numeric(5,2)  NOT NULL    ,
primary key(id_movimento),
foreign key (id_usuario) references usuario(id_usuario),
foreign key (id_produto) references produto(id_produto),
foreign key (id_pessoa) references pessoa(id_pessoa));

create sequence seq_pessoa
	as numeric
	start with 1
	increment by 1
	no cycle;