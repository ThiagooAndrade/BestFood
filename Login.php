<!DOCTYPE html>
<?php
//starting the session
session_start();
?>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./src/global.css" />
    <title>Login</title>
</head>

<body>
    <div class="col-12 p-5">

        <div class="col-md-6 m-auto">
            <!-- Login Form Starts -->
            <form method="POST" action="login_query.php">
                <div class="alert alert-info">Login</div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" name="email" class="form-control" required="required" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" class="form-control" required="required" />
                </div>
                <?php
                //checking if the session 'error' is set. Erro session is the message if the 'Username' and 'Password' is not valid.
                if (isset($_SESSION['error'])) {
                ?>
                    <!-- Display Login Error message -->
                    <div class="alert alert-danger"><?php echo $_SESSION['error'] ?></div>
                <?php
                    //Unsetting the 'error' session after displaying the message. 
                    unset($_SESSION['error']);
                }
                ?>
                <button class="btn btn-primary btn-block" name="login"><span class="glyphicon glyphicon-log-in"></span> Login</button>
            </form>
            <!-- Login Form Ends -->
            <hr style="border-top:1px dotted #ccc;" />
            <!-- Link for redirecting page to Registration page -->
            <a href="index.php">Not a member yet? Register here...</a>
            <br style="clear:both;" /><br />
            <div class="col-md-3"></div>
        </div>
    </div>
</body>

</html>