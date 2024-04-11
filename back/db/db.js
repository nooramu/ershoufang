const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '022000',
  database: 'back_system'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as ID ' + connection.threadId);

  // 执行数据库操作
  connection.query('insert into users set ? ',{
            account : 123,
            password : "w123"},
		 function(err, results, fields) {
    if (err) {
      console.error('Error querying database: ' + err.stack);
      return;
    }
    console.log('Query result:', results);
  });

  // 关闭数据库连接
  connection.end();
});
