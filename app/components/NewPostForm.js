import React, { Component } from 'react';

export default class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      url: undefined,
      textContent: undefined
    }
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateTitle (e) {
    this.setState({ title: e.target.value });
  }

  updateContent (e) {
    this.setState({ textContent: e.target.value });
  }
  updateUrl (e) {
    this.setState({ url: e.target.value });
  }

  submitForm (currentState) {
    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(currentState),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }

  render () {
    return (
      <form onSubmit={() => this.submitForm(this.state)}>
        <div className="form-group">
          <label>Title: </label>
          <input type="text" id="item-name-field" onChange={this.updateTitle} />
        </div>
        <div className="form-group">
          <label>Post Content: </label>
          <input type="text" id="item-price-field" onChange={this.updateContent}/>
        </div>
        <div className="form-group">
          <label>URL: </label>
          <input type="text" id="item-price-field" onChange={this.updateUrl}/>
        </div>
        <button type="submit">Save Post</button>
      </form>
    );
  }
}
