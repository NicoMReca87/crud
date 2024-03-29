import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
render() {
return (
<div className="post">
  <h2 className="post_member">{this.props.post.name}  {this.props.post.surname}</h2>
  <p className="post_email">E-mail: {this.props.post.email}</p>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(Post);