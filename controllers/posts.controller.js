const path = require('path');

function getPosts(req, res) {
  res.render('posts', {
    templateName: 'post'
  })
  // res.sendFile(
  //   path.join(__dirname, '..', 'public', 'images', 'pngwing.com.png')
  // );
  //res.send('<div><h1>Posts</h1></div>');
}

module.exports = {
  getPosts,
};
