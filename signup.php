<?php
// 1. Connection Settings
$host = "localhost";
$user = "root";
$pass = ""; 
$dbname = "marooners_maps"; 

// Create the connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check if the connection works
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 2. Process the Form Data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Collect data from HTML "name" attributes
    $fullname = $_POST['fullname'];
    $phone    = $_POST['phone'];
    $birthday = $_POST['birthday'];
    $password = $_POST['password'];

    // Collect the TEXT names from the hidden inputs
    $region   = isset($_POST['region_text']) ? $_POST['region_text'] :  '';
    $province = isset($_POST['province_text']) ? $_POST['province_text'] : '';
    $city     = isset($_POST['city_text']) ? $_POST['city_text'] : '';
    $barangay = isset($_POST['barangay_text']) ? $_POST['barangay_text'] : '';
    
    // Combine them into one readable string
    $full_location = "$barangay, $city, $province, $region";

    // Encrypt the password (Security First!)
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // 3. The SQL Command (Matches your table columns exactly)
    $sql = "INSERT INTO users (fullname, phone, birthday, location, password) 
            VALUES ('$fullname', '$phone', '$birthday', '$full_location', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>
                alert('Registration Successful! Welcome to Marooner\'s Map.');
                window.location.href='login.html'; 
              </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>