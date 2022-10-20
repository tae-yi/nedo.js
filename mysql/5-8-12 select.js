const express = require('express')
const mysql = require('mysql2');
const app = express()

require('dotenv').config({ path: 'mysql/.env' });// yarn add dotenv

app.get('/', function (req, res) {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  let body = "<h1>single row</h1>";
  connection.query(
    'SELECT * FROM topic WHERE id = ?', [1],
    (err, results, fields) => {
      console.log(err, results, fields);
      let row = results[0]; 
      body += '<h2>' + row.title + '<h2>';
      body += row.description;
      // res.send(body);
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available

  body += '<h1>multi row</h1>';
  connection.query(
    'SELECT * FROM topic',
    (err, results, fields) => {
      console.log(err, results, fields);
      // for (var i = 0; i < results.length; i++) {
      //   let row = results[i];
      for (let row of results) {
        body += '<h2>' + row.title + '</h2>';
        body += row.description;
      }
      res.send(body);
    }
  );
  }
  );
});

//     $conn = mysqli_connect('localhost', 'root', '111111', 'opentutorials');

//     echo "<h1>single row</h1>";
//     $sql = "SELECT * FROM topic WHERE id = 5";
//     $result = mysqli_query($conn, $sql);
//     $row = mysqli_fetch_array($result);
//     echo '<h2>'.$row['title'].'</h2>';
//     echo $row['description'];

//     echo "<h1>multi row</h1>";
//     $sql = "SELECT * FROM topic";
//     $result = mysqli_query($conn, $sql);

//     while( $row = mysqli_fetch_array($result) ) {
//         echo '<h2>'.$row['title'].'</h2>';
//         echo $row['description'];
//     }

app.listen(3000, function () {
  console.log(process.env);
  console.log("Listening: http://localhost:3000");
});
