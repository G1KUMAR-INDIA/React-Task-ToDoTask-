import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

function DeleteTodo({ todos, deleteTodo }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.find((t) => t.id === parseInt(id));

  const handleDelete = () => {
    deleteTodo(todo.id);
    navigate('/');
  };

  if (!todo) {
    return <Typography variant="h6">Todo not found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Delete Todo
      </Typography>
      <Typography variant="h6">Are you sure you want to delete this todo?</Typography>
      <Typography>Name: {todo.name}</Typography>
      <Typography>Description: {todo.description}</Typography>
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="outlined" color="primary" onClick={() => navigate('/')}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default DeleteTodo;
