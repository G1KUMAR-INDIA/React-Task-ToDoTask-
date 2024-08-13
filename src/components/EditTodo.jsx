import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

function EditTodo({ todos, updateTodo }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.find((t) => t.id === parseInt(id));

  const [editedName, setEditedName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  useEffect(() => {
    if (todo) {
      setEditedName(todo.name);
      setEditedDescription(todo.description);
    }
  }, [todo]);

  const handleSave = () => {
    updateTodo(todo.id, { ...todo, name: editedName, description: editedDescription });
    navigate('/');
  };

  if (!todo) {
    return <Typography variant="h6">Todo not found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Edit Todo
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Task Name"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <TextField
          label="Task Description"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default EditTodo;
