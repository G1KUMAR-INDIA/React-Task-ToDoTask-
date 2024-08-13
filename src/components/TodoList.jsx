import React from 'react';
import TodoItem from './TodoItem';
import { Grid } from '@mui/material';

function TodoList({ todos, updateTodo, deleteTodo, filter }) {
  return (
    <Grid container spacing={2}>
      {todos
        .filter(todo => filter === 'All' || todo.status === filter)
        .map(todo => (
          <Grid item xs={12} sm={6} md={4} key={todo.id}>
            <TodoItem 
              todo={todo} 
              updateTodo={updateTodo} 
              deleteTodo={deleteTodo} 
            />
          </Grid>
      ))}
    </Grid>
  );
}

export default TodoList;
