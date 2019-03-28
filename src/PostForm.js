import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const name = this.getName.value;
 const surname = this.getSurname.value;
 const email = this.getEmail.value;
 const data = {
  id: new Date(),
  name,
  surname,
  email,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_POST',
 data
 })
 this.getName.value = '';
 this.getSurname.value = '';
 this.getEmail.value = '';
}
render() {
return (
<div className="post-container">
  <h1 className="post_heading">New Member</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getName = input}
   placeholder="First name(s):" /><br /><br />
   <input required type="text" ref={(input) => this.getSurname = input}
   placeholder="Surname:" /><br /><br />
   <input required type="email" ref={(input) => this.getEmail = input}
   placeholder="E-mail:" /><br /><br />
   <button>Add</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);