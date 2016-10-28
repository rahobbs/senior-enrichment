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
  }).catch(next);
})

//Get single post based on ID
api.get('/posts/:id', function(req, res, next) {
  Post.findById(req.params.id).then(function(foundPost) {
    if(!foundPost) {
      res.sendStatus(404);
    } else {
      console.log(foundPost);
      res.send(foundPost);
    }
  })
})
//Create a new post
api.post('/posts', function(req, res, next) {
  Post.create(req.body).then(function(newPost) {
    res.send(newPost);
  })
})
//Create a new comment on a given post
api.post('/comments/:postId', function(req, res, next) {

})
//Delete a given post and all associated comments
api.delete('posts/:id', function(req, res, next) {

})
//Delete a given comment
api.delete('comments/:id', function(req, res, next) {

})
module.exports = api
