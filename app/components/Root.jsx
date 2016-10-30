import React, { Component } from 'react';

import SinglePost from './SinglePost'

export default class Root extends Component {
  constructor() {
    super()
    //Set an initial state of an empty array of posts
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch('/api/posts')
    .then(res => res.json())
    .then(response => {
      this.setState({posts: response})
    })
  }

  render() {
    return (
      <div>
        <h1>welcome to not-reddit</h1>

        <ul>
        {
          this.state.posts.map(function(singlePost) {
          return (
                  <li key={singlePost.id}>
                    <a href={singlePost.url}>{singlePost.title}</a><br/>
                    <a href={"#/posts/" + singlePost.id}>Comments</a>
                  </li>
                 )
          })
        }
        </ul>
        <a href={"#/NewPostForm"}><button type="button">New Post</button></a>
      </div>
    )
  }
}
