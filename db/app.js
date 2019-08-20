const mysql = require('mysql');
const faker = require('faker');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mvp',
});

connection.connect();

const seed = (username, numberOfRecords) => {

  for (let i = 0; i < numberOfRecords; i++) {

    const current = faker.date.between('2018-01-01', '2019-08-01');
    const currentTimeString = JSON.stringify(current)
      .split('"')[1]
      .split('T');
    const date = currentTimeString[0];
    const time = currentTimeString[1].split('.')[0];

    const sql = `INSERT INTO posts (username, title, post, date)
                 VALUES ('${username}',
                         '${faker.lorem.words(5)}',
                         '${faker.lorem.paragraphs(2)}',
                         '${[date, time].join(' ')}')`;
    connection.query(sql, (err, row) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${i + 1} of ${numberOfRecords} completed`);
      }
    });
  }
};

const registerUser = (id, username, password) => {
  const sql = `INSERT INTO users (id, username, password)
               VALUES ('${id}', '${username}', '${password}')`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      console.log('User Inserted Successfully');
    }
  });
};

const registerPost = (username, title, post) => {
  const current = new Date();
  const currentTimeString = JSON.stringify(current)
    .split('"')[1]
    .split('T');
  const date = currentTimeString[0];
  const time = currentTimeString[1].split('.')[0];

  const sql = `INSERT INTO posts (username, title, post, date)
               VALUES ('${username}', '${title}', '${post}', '${[date, time].join(' ')}')`;

  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Post Inserted Successfully');
    }
  });
};

const getRowCount = (callback) => {
  const sql = 'SELECT COUNT(*) as count FROM users';
  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      callback(row[0].count);
    }
  });
};

const userLogin = (username, callback) => {
  const sql = `SELECT * FROM users WHERE username = '${username}'`;
  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      callback(row[0]);
    }
  });
};

const fetchPosts = (username, callback) => {
  const sql = `SELECT * FROM posts WHERE username = '${username}' ORDER BY date DESC`;
  connection.query(sql, (err, row) => {
    if (err) {
      console.log(err);
    } else {
      callback(row);
    }
  });
};

module.exports = {
  registerUser,
  registerPost,
  getRowCount,
  userLogin,
  fetchPosts,
  seed,
};
