import React, { Component } from 'react';

export default class BonesJokes extends Component {
  constructor() {
    super()
    //Set an initial state of an empty array of posts
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    console.log("component did mount")
    fetch('/api/posts')
    .then(res => res.json())
    .then(response => {
      console.log("fetch response", response)
      this.setState({posts: response})
    })
  }

  render() {
    return (
      <div>
        <h1>welcome to not-reddit</h1>
        {console.log("the posts inside of render", this.state.posts)}
        {
          // this.state.posts.length > 0 ? console.log("posts loaded") : console.log("posts not loaded")
          this.state.posts.map(function(singlePost) {
          return <p>the post: {singlePost.url}</p>
          })
        }
      </div>
    )
  }
}
