<?php
// Conectando o banco de dados
$conn  = new PDO('sqlite:db.sqlite');

//Definindo atributos de conexão
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//Consulta para criar a tabela de membro no banco de dados, se ainda não existir.
$query = 'CREATE TABLE IF NOT EXISTS accounts(
        id INTEGER PRIMARY KEY NOT NULL,
        username TEXT,
        email TEXT,
        password TEXT,
        firstName TEXT
        )';

//Executando a consulta
$conn->exec($query);
