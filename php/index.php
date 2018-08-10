<?php
echo 'entrou';
const DB = 'mysql';
const DBHOST = 'www.ceu-aberto.firebaseapp.com';
const DBNAME = 'ceu_aberto';
const DBUSER = 'root';
const DBPWD = 'abc123';

function connect(){
  $dsn = DB.":dbname=".DBNAME.";host=".DBHOST;
  try {
    return new PDO($dsn, DBUSER, DBPWD);
  } catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
  }
}

$connection = connect();
$isWet = $_GET['isWet'];
$sensor_id = $_GET['sensor_id'];

$schema = "USE ceu_aberto;
INSERT INTO sensor_data
  (agua, sensor_id, time)
VALUES
    ({$isWet}, {$sensor_id}, now());";

  /// (1, 1, now() );     Dados ??? ;

try {
  global $connection;
  global $schema;
  $connection = new PDO(DB.":host=".DBHOST, DBUSER, DBPWD);
  $connection->exec($schema);
  echo "Database installed!\n";
  // header('Location: home.php');;
} catch (PDOException $e) {
  echo 'Connection failed: ' . $e->getMessage();
}





?>