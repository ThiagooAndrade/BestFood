<?php

require_once 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Conectar ao banco de dados SQLite
    $db = new SQLite3("banco.db");

    if ($db) {
        // Consulta para verificar se o email já está cadastrado
        $query = "SELECT * FROM accounts WHERE email = :email";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':email', $email, SQLITE3_TEXT);
        $result = $stmt->execute();


        if ($result->fetchArray(SQLITE3_ASSOC)) {
            echo "Este email já está cadastrado. Tente outro email.";
        } else {
            // Se o email não estiver cadastrado, insira o novo usuário

            $hashed_password = password_hash($password, PASSWORD_BCRYPT);

            $query = "INSERT INTO accounts (username, email, senha) VALUES (:username, :email, :senha)";
            $stmt = $db->prepare($query);
            $stmt->bindValue(':username', $username, SQLITE3_TEXT);
            $stmt->bindValue(':email', $email, SQLITE3_TEXT);
            $stmt->bindValue(':senha', $senha, SQLITE3_TEXT);

            // Executar a consulta de inserção
            $stmt->execute();
        }
    } else {
        echo "Desculpe, não foi possível conectar ao banco de dados SQLite 'banco.db'.";
    }
}
