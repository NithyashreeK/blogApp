'use strict';
module.exports = function(app) {
  var blogPost = require('../controllers/blogController');

  // blogPost Routes
  app.route('/posts')
    .get(blogPost.list_all_posts)
    .post(blogPost.create_a_post);


  app.route('/posts/:postId')
    .get(blogPost.read_a_post)
    .put(blogPost.update_a_post);
};