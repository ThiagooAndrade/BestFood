<?php

require_once 'conn.php';

if (isset($_POST['username'], $_POST['email'], $_POST['password'], $_POST['firstName'])) {
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_SPECIAL_CHARS);
    $firstName = filter_input(INPUT_POST, 'firstName', FILTER_SANITIZE_SPECIAL_CHARS);

    $stmt = $pdo->prepare("INSERT INTO accounts (username,email,password,firstName) VALUES (?,?,?,?)");
    $stmt->execute([$username, $email, $password, $firstName]);

    echo "Conta Criada!";
} else {
    http_response_code(500);
}
