import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedTodos: "",
    };
  }

  handleChange = (e) => {
    const todo = e.target.value;
    this.setState({
      addedTodos: todo,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.addedTodos);
    this.setState({
      addedTodos: "",
    });
  };

  render() {
    return (
      <form className="inputForm">
        <input
          className="input"
          type="text"
          placeholder="Add Todo..."
          onChange={this.handleChange}
          value={this.state.addedTodos}
        />
        <button className="submitButton" type="submit" onClick={this.onSubmit}>
          submit
        </button>
      </form>
    );
  }
}

export default Input;
