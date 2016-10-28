'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('comments', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})
