'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router'


import store from './store'
import Root from './components/Root'
import SinglePost from './components/SinglePost'

render (
    <Router history={hashHistory}>
      <Route path="/" component={Root} />
      <Route path='posts/:id' component={SinglePost} />
    </Router>,
  document.getElementById('main')
)
