<?php
require_once('config.php');

function connect(){
  $dsn = DB.":dbname=".DBNAME.";host=".DBHOST;
  try {
    return new PDO($dsn, DBUSER, DBPWD);
  } catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
  }
}

$connection = connect();

function create($name, $address) {
  global $connection;

  $sql = "INSERT INTO host (name, address) VALUES ('${name}', '${address}');";
  
  try {
    $connection->exec($sql);
    return $connection->lastInsertId();
  } catch(PDOExecption $e) { 
    $connection->rollback(); 
    print "Error!: " . $e->getMessage(); 
    return null;
  } 
}

var_dump(readSensor(2));
/**
 *  Read by ID
 */
function read($id) {
  global $connection;
  $sql = "SELECT * FROM sensor_data WHERE id = ${id}";
  $pdoStm = $connection->query($sql);
  return $pdoStm ? $pdoStm->fetch(PDO::FETCH_ASSOC) : null;
}

/**
 *  Read by sensor_id
 */

function readSensor($sensor_id) {
  global $connection;
  $sql = "SELECT * FROM sensor_data WHERE sensor_id = ${sensor_id}";
  $pdoStm = $connection->query($sql);
  return $pdoStm ? $pdoStm->fetchAll(PDO::FETCH_ASSOC) : null;
}

/**
 * Read All
 */
function readAll() {
  global $connection;
  $sql = "SELECT * FROM sensor_data";
  $pdoStm = $connection->query($sql);
  return $pdoStm ? $pdoStm->fetchAll(PDO::FETCH_ASSOC) : null;
}

/**
 * Read or Create
 */
function readOrCreate($name, $address) {
  global $connection;
  $result = read($id);

  if ($result) {
    return $result;
  } else {
    return create($id);
  }
}
