<?php

require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Conectar ao banco de dados SQLite
    $db = new SQLite3('banco.db');

    if ($db) {
        // Consulta para verificar se o email e senha correspondem
        $query = "SELECT * FROM accounts WHERE email = :email AND senha = :senha";
        $stmt = $db->prepare($query);
        $stmt->bindValue(':email', $email, SQLITE3_TEXT);
        $stmt->bindValue(':senha', $senha, SQLITE3_TEXT);
        $result = $stmt->execute();

        // Verificar se as credenciais são válidas
        if ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            // Se o login for bem-sucedido, defina um cookie com o status de login
            setcookie('isLogged', 'true', time() + 3600, '/'); // O cookie expirará em 1 hora

            // URL para redirecionar
            $redirectUrl = "http://localhost:8080/BestFood/Homepage.html";

            // Gerando o script JavaScript de redirecionamento
            $javascript = "
            <script type='text/javascript'>
                window.location.href = '$redirectUrl';
            </script>
            ";

            // Exibindo o script JavaScript na página
            echo $javascript;
        } else {
            echo "Credenciais inválidas. Tente novamente.";
            $redirectToLogin = "<script type='text/javascript'>
            setTimeout(() => {
                window.location.href = 'http://localhost:8080/BestFood/login.html';
                }, 2000);
            </script>";
            echo $redirectToLogin;
            exit();
        }
    } else {
        echo "Desculpe, não foi possível conectar ao banco de dados.";
        exit();
    }
}
