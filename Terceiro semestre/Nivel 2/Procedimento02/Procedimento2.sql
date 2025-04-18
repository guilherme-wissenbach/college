use Loja;

insert into usuario
values
    (1, 'op1', 'op1'),
    (2, 'op2', 'op2');

insert into produto
values
    (1, 'Banana', 100, 5.00),
    (3, 'Laranja', 500, 2.00),
    (4, 'Manga', 800, 4.00);

insert into pessoa
values
    (NEXT VALUE FOR seq_Pessoa, 'Joao', 'Rua 12, cas 3, Quitanda', 'Riacho do Sul', 'PA', '1111-1111','joao@riacho.com');

insert into pessoa
values
    (NEXT VALUE FOR seq_Pessoa, 'JJC', 'Rua 11, Centro','Riacho do Norte', 'PA', '1212-1212','jjc@riacho.com');

insert into pessoa_fisica
values
    (1,'11111111111');

insert into pessoa_juridica
values
    (2,'22222222222222');

insert into movimento
values
    (1,1,1,1,20,'S',4.00),
    (4,1,1,3,15,'S',2.00),
    (5,2,1,3,10,'S',3.00),
    (7,1,2,3,15,'E',5),
    (8,1,2,4,20,'E',4.00);

-- Dados completos de pessoas físicas.
SELECT *
FROM pessoa, pessoa_fisica
WHERE pessoa.id_pessoa = pessoa_fisica.id_pessoa;

--Dados completos de pessoas jurídicas.
SELECT *
FROM pessoa, pessoa_juridica
WHERE pessoa.id_pessoa = pessoa_juridica.id_pessoa;

--Movimentações de entrada, com produto, fornecedor, quantidade, preço unitário e valor total.
SELECT id_movimento, movimento.id_produto, produto.nome as 'Produto',pessoa.id_pessoa, pessoa.nome as 'Fornecedor', movimento.quantidade, valor_unitario,
(movimento.quantidade *  valor_unitario) as valor_total
FROM movimento
JOIN pessoa
    ON movimento.id_pessoa = pessoa.id_pessoa
JOIN produto
    ON movimento.id_produto = produto.id_produto
WHERE movimento.tipo = 'E';

--Movimentações de saída, com produto, comprador, quantidade, preço unitário e valor total
SELECT
    id_movimento,
    movimento.id_produto,
    produto.nome as 'Produto',
    movimento.id_pessoa,
    pessoa.nome as 'Comprador',
    movimento.quantidade,
    valor_unitario,
    (movimento.quantidade * valor_unitario) as valor_total
FROM movimento
JOIN pessoa
    ON movimento.id_pessoa = pessoa.id_pessoa
JOIN produto
    ON movimento.id_produto = produto.id_produto
WHERE movimento.tipo = 'S';

--Valor total das entradas agrupadas por produto.
SELECT
    produto.nome,
   SUM(movimento.quantidade * movimento.valor_unitario) AS 'VALOR TOTAL ENTRADAS'
FROM movimento
JOIN produto
    ON produto.id_produto = movimento.id_produto
WHERE movimento.tipo = 'E'
GROUP BY produto.nome;

--Valor total das saídas agrupadas por produto.
SELECT produto.nome, SUM (movimento.quantidade * movimento.valor_unitario) AS 'VALOR TOTAL SAIDAS'
FROM movimento
JOIN produto
    ON produto.id_produto = movimento.id_produto
WHERE movimento.tipo = 'S'
GROUP BY produto.nome;

--Operadores que não efetuaram movimentações de entrada (compra).
SELECT movimento.id_usuario AS 'ID DO OPERADOR'
FROM movimento
except
SELECT movimento.id_usuario
FROM movimento
WHERE movimento.tipo = 'E';

--Valor total de entrada, agrupado por operador.
SELECT usuario.login AS OPERADOR, SUM (movimento.quantidade * movimento.valor_unitario) AS 'VALOR TOTAL ENTRADAS'
FROM movimento
JOIN usuario
    ON usuario.id_usuario = movimento.id_usuario
WHERE movimento.tipo = 'E'
GROUP BY usuario.login;

--Valor total de saída, agrupado por operador.
SELECT usuario.login AS OPERADOR, SUM (movimento.quantidade * movimento.valor_unitario) AS 'VALOR TOTAL SAIDAS'
FROM movimento
JOIN usuario
    ON usuario.id_usuario = movimento.id_usuario
WHERE movimento.tipo = 'S'
GROUP BY usuario.login;

--Valor médio de venda por produto, utilizando média ponderada.
SELECT produto.nome, SUM (movimento.quantidade * movimento.valor_unitario) / SUM(movimento.quantidade) as 'Valor médio de venda'
FROM movimento
JOIN produto
    ON produto.id_produto = movimento.id_produto
WHERE movimento.tipo = 'S'
GROUP BY produto.nome;
















