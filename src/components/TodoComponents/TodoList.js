import React from 'react';

import './Todo.css'
import Todo from './Todo';

const TodoList = props => {
  return (
    <div class='list'>
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
