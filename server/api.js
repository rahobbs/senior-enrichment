'use strict'
const api = require('express').Router()
const db = require('APP/db')
const Post = require('../db/models/post')
const Comment = require('../db/models/comment')


api.get('/hello', (req, res) => res.send({hello: 'world'}))

//Get all posts
api.get('/posts', function(req, res, next) {
  Post.findAll().then(function(foundPost) {
    if(!foundPost){
      res.sendStatus(404);
    } else {
      console.log(foundPost);
      res.send(foundPost);
    }
  }).catch(next)
})

//Get single post based on ID
api.get('/posts/:id', function(req, res, next) {
  Post.findById(req.params.id).then(function(foundPost) {
    if (!foundPost) {
      res.sendStatus(404);
    } else {
      console.log(foundPost);
      res.send(foundPost);
    }
  })
  .catch(next)
})
//Create a new post
api.post('/posts', function(req, res, next) {
  Post.create(req.body).then(function(newPost) {
    res.send(newPost);
  }).catch(next)
})
//Create a new comment on a given post
api.post('/comments/:postId', function(req, res, next) {
  Comment.create({content: req.body.content, postId: req.params.postId})
  .then(function(newComment) {
    res.send(newComment);
  }).catch(next)
})
//Delete a given post and all associated comments
api.delete('posts/:id', function(req, res, next) {
  Post.destroy({where: {id: req.params.id}}).then(function() {
    Comment.destroy({where: {postId: req.params.id}})
  }).then(function() {
    res.sendStatus(200);
  })
  .catch(next);
})
//Delete a given comment
api.delete('comments/:id', function(req, res, next) {
  Comment.destroy({where: {id: req.params.id}}).then(function() {
    res.sendStatus(200);
  }).catch(next)
})
module.exports = api
