<?php
session_start(); // Start a session to "remember" the user

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "marooners_maps";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phone = $_POST['phone'];
    $password = $_POST['password'];

    // 1. Search for the user by phone number
    $sql = "SELECT * FROM users WHERE phone = '$phone'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // 2. Verify the hashed password
        if (password_verify($password, $user['password'])) {
            // SUCCESS: Store data in session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['fullname'] = $user['fullname'];
            
            // Redirect to your main map page
            header("Location: main.html"); 
            exit();
        } else {
            echo "<script>alert('Invalid password. Please try again.'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('Phone number not found. Please sign up first.'); window.location.href='signup.html';</script>";
    }
}
$conn->close();
?>