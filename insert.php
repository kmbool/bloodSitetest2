


<?php
$servername = "localhost";
$username = " root";
$password = "";
$dbname = "project";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO donate ( Name1 , Age , blood_type , Phonenumber , Ailments ) 
values ('$Name1 , $Age , $blood_type , $phonenumber , $Ailments')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>



