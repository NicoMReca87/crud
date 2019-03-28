import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newSurname = this.getSurname.value;
  const newEmail = this.getEmail.value;
  const data = {
    newName,
    newSurname,
    newEmail
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.post.name} placeholder="First name(s):" /><br /><br />
    <input required type="text" ref={(input) => this.getSurname = input}
    defaultValue={this.props.post.surname} placeholder="Surname:" /><br /><br />
    <input required type="email" ref={(input) => this.getEmail = input} 
    defaultValue={this.props.post.email} placeholder="E-mail:" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);