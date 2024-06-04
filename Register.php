<!DOCTYPE html>
<?php
//starting the session
session_start();
?>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./src/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="./src/styles/Register/register.css">
</head>

<body>
    <div class="container login-container">
        <div class="card login-card">
            <div class="card-body">
                <h5 class="card-title text-center">Login</h5>
                <form method="post" id="cadastro">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" name="username" class="form-control" id="username" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required>
                    </div>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">FirstName</label>
                        <input type="text" name="firstName" class="form-control" id="firstName" required>
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- <main>
        <section>
            <h1>Registre-se</h1>

            </div>
            <form method="post" class="col" id="cadastro">
                <div class="col-12">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" name="username" class="form-control" id="username" required>
                </div>
                <div class="col-12">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" name="email" class="form-control" id="email" required>
                </div>
                <div class="col-12">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="password" required>
                </div>
                <div class="col-12">
                    <label for="senha" class="form-label">FirstName</label>
                    <input type="text" name="firstName" class="form-control" id="firstName" required>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </section>
    </main> -->

    <script>
        const form = document.querySelector("#cadastro");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const dados = new FormData(form);

            fetch('./src/db/salvarConta.php', {
                method: "POST",
                body: dados
            }).then((response) => {
                console.log(response)
                if (response.ok) {
                    return response.text();
                }
                throw new Error("Falha ao enviar mensagem!");
            }).then((data) => {
                // alert(data);
                form.reset();
                console.log(data)
                window.location.href = "./Login.php"
            }).catch((error) => {
                alert(error.message);
            })
        });
    </script>
</body>

</html>