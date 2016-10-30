import React, { Component } from 'react';

export default class SinglePost extends Component {
  constructor(props) {
    super(props);
    //Initializing local state to have a post that is an empty object
    this.state = {
      post: {},
      comments: []
    };
  }

  componentDidMount() {
    var postId = this.props.params.id;
    fetch(`/api/posts/${postId}`)
    .then(response => {
      return response.json()
    }).then( data => {
      return this.setState({post: data})
    }).then (function() {
      return fetch(`/api/comments/${postId}`)
    }).then(commentResponse => {
      return commentResponse.json()
    }).then( commentData => {
      return this.setState({comments: commentData})
    })
  }


  render() {
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <a href={this.state.post.url}>{this.state.post.url}</a><br/>
        <p>{this.state.post.textContent}</p>
          {
            this.state.comments.map(function(comment) {
            return (
                      <p key={comment.id}>{comment.content}</p>
                   )
            })
          }
      </div>
    )
  }
}
