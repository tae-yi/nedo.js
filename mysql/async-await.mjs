import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2';
const app = express();

dotenv.config({ path: 'mysql/.env'});   // yarn and dotenv

app.get('/', async (req, res) => {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

  let body = '<h1>multiple row</h1>';
    // let value = awiat connection.query('SELECT * FROM tpic');
   // let results = value[0]; // row가 모여있는 배열데이터
  // let fields = values[1]; // 필드 정보  
  let [results, fields] = await connection.query('SELECT * FROM topic');
  console.log({results, fields});
  results.forEach((row) => {
    let {title, description} = row;
    body += `<h2>${title}</h2>`;
    body += description;
  });
  res.send(body);
});

app.listen(3333, function () {
  console.log('Listening: http://localhost:3333');  // Live Server인지 preview인지도 포트 3000쓰므로 3333으로 변경.
});




