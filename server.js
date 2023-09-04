const express = require('express');
const path = require('path');
const PORT = 4000;

const productsRouter = require('./routes/products.router');
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');
const { default: mongoose } = require('mongoose');

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
app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});

// template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
  setImmediate(() => {
    next(new Error('it is an error'));
  });
  // res.render('index', {
  //   imageTitle: 'wow',
  // });
});

//! handle async error
app.use((error, req, res, next) => {
  res.json({ message: error.message });
});

mongoose
  .connect(
    `mongodb+srv://tndhworl1998:12341234@cluster0.gbjaff4.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log(err));
