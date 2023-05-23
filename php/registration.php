<?php
session_start();
if (isset($_SESSION["user"])) {
   header("Location: index.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        #myModal {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 100px;
            
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0,0.4);
        }

        .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            
            width: 40%;
        }

        .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
    <style>
        #myModal1 {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 100px;
            
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0,0.4);
        }

        .modal-content1 {
            background-color: #fff;
            margin: auto;
            padding: 20px;
            border: 5px solid #aaaaaa;
            border-radius: 15px;
            width: 40%;
        }

        .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
    <script>
        $(document).ready(function() {
            $("#showModalBtn").click(function() {
                $("#myModal").css("display", "block");
            });

            $(".close").click(function() {
                $("#myModal").css("display", "none");
            });

            $(window).click(function(event) {
                if (event.target == $("#myModal")[0]) {
                    $("#myModal").css("display", "none");
                }
            });
        });
    </script>
    <script>
        $(document).ready(function() {
            $("#showLoginModalBtn").click(function() {
                $("#myModal1").css("display", "block");
            });

            $(".close").click(function() {
                $("#myModal1").css("display", "none");
            });

            $(window).click(function(event) {
                if (event.target == $("#myModal1")[0]) {
                    $("#myModal1").css("display", "none");
                }
            });
        });
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,600,600i');
        html, body {
            margin: 0;
            height: 120%;
            font-family: 'Josefin Sans', sans-serif;
            background-color: black;
        }

        a {
            text-decoration: none;
        }

        .header {
            position: relative;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start;
            align-content: flex-start;
            height: 50vw;
            min-height: 400px;
            max-height: 550px;
            min-width: 300px;
            color: #eee;
            border-radius: 15px;
        }

        .header:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: -1;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.12) 40%, rgba(27, 32, 48, 1) 100%);
            border-radius: 15px;
        }

        .header:before {
    content: "";
    width: 100%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
    transform: translateZ(0);
    background-image: url("startap.jpg");
    border-radius: 15px;
    background-size: 100%;
    background-attachment: fixed;
    animation: grow 360s linear 10ms infinite;
    transition: all 0.4s ease-in-out;
    z-index: 0;
}

        .header a {
            color: #eee;
            border-radius: 15px;
        }

        .menu {
            display: block;
            width: 40px;
            height: 30px;
            border: 2px solid #fff;
            border-radius: 3px;
            position: absolute;
            right: 20px;
            top: 20px;
            text-decoration: none;
        }

        .menu:after {
            content: "";
            display: block;
            width: 20px;
            height: 3px;
            background: #fff;
            position: absolute;
            margin: 0 auto;
            top: 5px;
            left: 0;
            right: 0;
            box-shadow: 0 8px, 0 16px;
        }

        .logo {
    border: 2px solid #fff;
    border-radius: 3px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    align-content: center;
    margin: 20px;
    padding: 0px 10px;
    font-weight: 900;
    font-size: 1.1em;
    line-height: 1;
    box-sizing: border-box;
    height: 40px;
    
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
}


.submenu {
    display: none;
    position: absolute;
    top: 35px;
    right: 0;
    text-align: center;
    background:white;
    padding: 10px;
    border-radius: 15px;
    z-index: 2;
}

        .sides, .info {
            flex: 0 0 auto;
            width: 50%;
        }

        .info {
            width: 100%;
            padding: 15% 10% 0 10%;
            text-align: center;
            text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }

        .author {
            display: inline-block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: url(https://i.imgur.com/6DLCsZcb.jpg) center no-repeat;
            background-size: cover;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
            margin-bottom: 3px;
        }

        .info h4,
        .meta {
            font-size: 0.7em;
        }

        .meta {
            font-style: italic;
        }

        @keyframes grow {
            0% {
                transform: scale(1) translateY(0px);
            }

            50% {
                transform: scale(1.2) translateY(-400px);
            }
        }

        .content {
            padding: 5% 10%;
            text-align: center;
            color: #eee;
        }

        .btn {
            color: #333;
            border: 2px solid;
            border-radius: 3px;
            text-decoration: none;
            display: inline-block;
            padding: 5px 10px;
            font-weight: 600;
        }
        
        .twtr {
            margin-top: 100px;
        }
        #showModalBtn{
            border-radius: 4px;
           
        }
        #showLoginModalBtn{
            border-radius: 4px;
           
        }
        .btn.twtr:after {
            content: "\1F426";
            padding-left: 5px;
        }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $('.menu').click(function() {
                $('.submenu').toggle();
            });
        });
    </script>

</head>
<body>
<div class="header">
    <div class="sides">
        <a href="#" class="logo">Startap Portal</a>
    </div>
    <div class="sides">
        <a href="#" class="menu"></a>
        <div class="submenu">
            <button id="showModalBtn" >Sign Up</button><br>
            <p></p>
            <button id="showLoginModalBtn" >Log In</button>
        </div>
    </div>
</div>
<section class="content">
    <p>The product consists of buying and selling start-ups, has potential expansion opportunities in the areas of hiring workers,  
        selling finished products. Product users are divided into 2 categories: investors and startups. Investors will have access to 
         the list of "offers", the "offer" consists of: the name of the startup, a link to the profile in the form of a start-up name, 
          a short description of its startup.</p>
    <p align="center"><a href="https://twitter.com/nodws" class="btn twtr" target="_b">Follow us on `Moodle`</a>
    </p>
    <p><img src="MasterCard.png" alt=""  height="50"  >        <img src="Visa_Logo.png" alt=""  height="50"> <img src="Paypal_2014_logo.png" alt=""  height="75">
    </p>
</section>

<div id="myModal1" class="modal1">
    <div class="modal-content1">
        <span class="close">&times;</span>
        <div class="container">
<?php
if (isset($_POST["login"])) {
   $email = $_POST["email"];
   $password = $_POST["password"];
    require_once "database.php";
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $sql);
    $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
    if ($user) {
        if (password_verify($password, $user["password"])) {
            session_start();
            $_SESSION["user"] = "yes";
            header("Location:registration.php");
            die();
        }else{
            echo "<div class='alert alert-danger'>Password does not match</div>";
        }
    }else{
        echo "<div class='alert alert-danger'>Email does not match</div>";
    }
}
?>
<form action="login.php" method="post">
<div class="form-group">
    <input type="email" placeholder="Enter Email:" name="email" class="form-control">
</div>
<div class="form-group">
    <input type="password" placeholder="Enter Password:" name="password" class="form-control">
</div>
<div class="form-btn">
    <input type="submit" value="Login" name="login" class="btn btn-primary">
</div>
</form>

</div>
    </div>
</div>




<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div class="container">
            <?php
            if (isset($_POST["submit"])) {
               $fullName = $_POST["fullname"];
               $email = $_POST["email"];
               $password = $_POST["password"];
               $passwordRepeat = $_POST["repeat_password"];
               
               $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    
               $errors = array();
               
               if (empty($fullName) OR empty($email) OR empty($password) OR empty($passwordRepeat)) {
                array_push($errors,"All fields are required");
               }
               if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                array_push($errors, "Email is not valid");
               }
               if (strlen($password)<8) {
                array_push($errors,"Password must be at least 8 charactes long");
               }
               if ($password!==$passwordRepeat) {
                array_push($errors,"Password does not match");
               }
               require_once "database.php";
               $sql = "SELECT * FROM users WHERE email = '$email'";
               $result = mysqli_query($conn, $sql);
               $rowCount = mysqli_num_rows($result);
               if ($rowCount>0) {
                array_push($errors,"Email already exists!");
               }
               if (count($errors)>0) {
                foreach ($errors as  $error) {
                    echo "<div class='alert alert-danger'>$error</div>";
                }
               }else{
                
                $sql = "INSERT INTO users (full_name, email, password) VALUES ( ?, ?, ? )";
                $stmt = mysqli_stmt_init($conn);
                $prepareStmt = mysqli_stmt_prepare($stmt,$sql);
                if ($prepareStmt) {
                    mysqli_stmt_bind_param($stmt,"sss",$fullName, $email, $passwordHash);
                    mysqli_stmt_execute($stmt);
                    echo "<div class='alert alert-success'>You are registered successfully.</div>";
                }else{
                    die("Something went wrong");
                }
               }
              
    
            }
            ?>
            <form action="registration.php" method="post">
                <div class="form-group">
                    <label for="fullname">Full Name:</label>
                    <input type="text" class="form-control" id="fullname" placeholder="Enter your full name" name="fullname" required>
                </div>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="repeat_password">Repeat Password:</label>
                    <input type="password" class="form-control" id="repeat_password" placeholder="Repeat password" name="repeat_password" required>
                </div>
                <button type="submit" class="btn btn-primary" name="submit">Submit</button>
            </form>
        </div>
    </div>
</div>
</body>
</html>
