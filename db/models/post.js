'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('posts', {
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  textContent: Sequelize.TEXT
})
