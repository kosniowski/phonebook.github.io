import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          placeholder="Number"
          name="number"
          value={number}
          onChange={this.handleChange}
        />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default PhoneForm;
