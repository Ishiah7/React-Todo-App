import React from "react";

const Todos = (props) => {
  const todoList = props.todos.map((todo, key) => {
    return (
      <div className="todo" key={key}>
        <span className="todoName">{todo}</span>
        <button className="deleteButton" onClick={() => props.deleteTodo(key)}>
          x
        </button>
      </div>
    );
  });

  return <div className="todoList">{todoList}</div>;
};

export default Todos;
