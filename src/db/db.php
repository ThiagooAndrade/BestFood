<?php
// Conectando o banco de dados
$db  = new SQLite3('banco.db');

if ($db) {
    $query = 'CREATE TABLE IF NOT EXISTS accounts(
        username TEXT,
        email TEXT PRIMARY KEY,
        senha TEXT
        )';
    $db->exec($query);
} else {
    echo "Não foi possivel criar o banco de dados";
}
