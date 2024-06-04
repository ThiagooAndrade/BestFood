<?php

require_once 'conn.php';

if (isset($_POST['username'], $_POST['email'], $_POST['password'], $_POST['firstName'])) {
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_SPECIAL_CHARS);
    $firstName = filter_input(INPUT_POST, 'firstName', FILTER_SANITIZE_SPECIAL_CHARS);

    // Validação adicional (opcional)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email inválido!";
        exit;
    }

    // Criptografar a senha
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    try {
        $stmt = $pdo->prepare("INSERT INTO accounts (username, email, password, firstName) VALUES (?, ?, ?, ?)");
        $stmt->execute([$username, $email, $hashed_password, $firstName]);

        echo "Conta Criada!";
    } catch (PDOException $e) {
        http_response_code(500);
        echo "Erro ao criar a conta: " . $e->getMessage();
    }
} else {
    http_response_code(400); // Código de resposta 400 para bad request
    echo "Dados incompletos!";
}
