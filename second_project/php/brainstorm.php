<?php
$servername = "localhost";
$username = "root";
$password = "Sq&^k3EzmKmz";
$dbname = "brainstorm";

$comand = $_REQUEST['comand'];
$name = $_REQUEST['name'];
$link = $_REQUEST['link'];
$parent = $_REQUEST['parent'];
//$comand = '11143312';
//$name = '221222';
//$link = '2223';
//$parent = '44325';

//if ($comand == 'add'){
  
echo $comand;
echo $name;
echo $link;
echo $parent;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO menu (name, link, parent)
VALUES ($name, $link, $parent)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
  
  
  
  
//}
?>
