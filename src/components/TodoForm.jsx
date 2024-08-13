import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TodoForm({ addTodo }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ name, description, status: 'Not Completed' });
    setName('');
    setDescription('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
      <TextField
        label="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Add Task
      </Button>
    </Box>
  );
}

export default TodoForm;
