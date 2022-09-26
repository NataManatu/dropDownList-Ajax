<?php

$db_host = "localhost";
$db_name = "world";
$db_user = "root";
$db_pass = "root";


$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);
// Порядок 1. Host. 2. UserName. 3. Password. 4. Database Name


// $result = $mysqli->query("SELECT name,population,continent FROM country ORDER BY name");

$query = $_POST['query'];

if ($query == 'get_continents') {
    $result = $mysqli->query("SELECT DISTINCT continent FROM country");
} else if ($query == 'get_country') {
    $continent = $_POST['continent'];
    $result = $mysqli->query("SELECT name,population FROM `country` WHERE continent = '$continent' ORDER BY name");
}
// else if($query=="get_population"){
//     $population_min= $_POST['population_min'];
//     $result = $mysqli->query("SELECT population,name FROM `country` WHERE population >= '$population_min'"); 
// }
else if ($query == "get_population") {
    $population_min = $_POST['population_min'];
    $population_max= $_POST['population_max'];
    // $population_max = 99999999;
    $result = $mysqli->query("SELECT population,name FROM `country` WHERE population BETWEEN 'population_min' AND 'population_max'");
}



$data_from_db = array();
while ($row = $result->fetch_assoc()) {
    array_push($data_from_db, $row);
}

$data_from_db = json_encode($data_from_db);

echo $data_from_db;
