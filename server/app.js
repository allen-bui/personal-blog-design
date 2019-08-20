const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./../db/app.js');
const app = express();
const port = 8080;

app.use(express.static(__dirname + './../dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
  db.getRowCount((data) => {
    db.registerUser(data, req.body.username, req.body.password);
    res.send();
  });
});

app.post('/login', (req, res) => {
  db.userLogin(req.body.username, (data) => {
    if (data) {
      res.send({
        isUserFound: true,
      });
    } else {
      res.send({
        isUserFound: false,
      });
    }
  });
});

app.post('/posts', (req, res) => {
  db.fetchPosts(req.body.username, (data) => {
    res.send(data);
  });
});

app.post('/storePost', (req, res) => {
  console.log(req.body);
  db.registerPost(req.body.username, req.body.postTitle, req.body.postBody);
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
