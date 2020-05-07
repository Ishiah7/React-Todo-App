import React from "react";
import Todos from "./Todos";
import Input from "./Input";

class TodoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  handleSubmit = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  todoDelete = (i) => {
    const todos = this.state.todos;
    this.setState({
      todos: todos.filter((todo, index) => {
        return index !== i;
      }),
    });
  };
  render() {
    return (
      <div className="todoPage">
        <h1 className="title">React Todo App</h1>
        <Input handleSubmit={this.handleSubmit} />
        <h2 className="todoTitle">
          {this.state.todos.length <= 0 ? "There are no todos..." : "Todos:"}
        </h2>
        <Todos todos={this.state.todos} deleteTodo={this.todoDelete} />
      </div>
    );
  }
}

export default TodoPage;
