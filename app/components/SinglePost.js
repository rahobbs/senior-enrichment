import React, { Component } from 'react';

export default class SinglePost extends Component {
  constructor(props) {
    super(props);
    console.log("the props: ", props)
    this.state = {};
  }
  componentDidMount() {
    fetch(`/api/posts/${this.props.params.id}`)
    .then(res => res.json())
    .then(response => {
      console.log("the response", response);
      this.setState = response;
    })
  }


  render() {
    console.log("the state in render", this.state)
    return (
      <div>
        <h1>boo</h1>
      </div>
    )
  }
}
