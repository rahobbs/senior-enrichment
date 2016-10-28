'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Post = require('./post')
const Comment = require('./comment')

Post.hasMany(Comment);

module.exports = {Post, Comment}
