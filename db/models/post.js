'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('posts', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  textContent: Sequelize.TEXT
})
