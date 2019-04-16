'use strict';


var mongoose = require('mongoose'),
  Post = mongoose.model('Posts');

//to list all the posts from the blog
exports.list_all_posts = function(req, res) {
  Post.find({}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

//create a new post
exports.create_a_post = function(req, res) {
  var new_post = new Post(req.body);
  new_post.save(function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

//read an existing post
exports.read_a_post = function(req, res) {
  Post.findById(req.params.postId, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};

//update an existing post
exports.update_a_post = function(req, res) {
  Post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true}, function(err, post) {
    if (err)
      res.send(err);
    res.json(post);
  });
};
