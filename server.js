const express = require('express');
const path = require('path');
const PORT = 4000;

const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

const Users = [
  {
    id: 0,
    name: 'JACK',
  },
  {
    id: 1,
    name: 'Jennifer',
  },
];

const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));
// parsing body
app.use(express.json());
// middleware
app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url}`);
  next();
});

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});

// template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {
    imageTitle: 'wow',
  });
});
