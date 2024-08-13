import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Select, MenuItem, Box, TextField } from '@mui/material';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleStatusChange = (e) => {
    updateTodo(todo.id, { ...todo, status: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    updateTodo(todo.id, { ...todo, name: editedName, description: editedDescription });
    setIsEditing(false);
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        {isEditing ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
        ) : (
          <>
            <Typography variant="h6">{todo.name}</Typography>
            <Typography variant="body1">{todo.description}</Typography>
            <Select value={todo.status} onChange={handleStatusChange} sx={{ marginTop: 2, marginBottom: 2 }}>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Not Completed">Not Completed</MenuItem>
            </Select>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" color="secondary" onClick={handleEdit}>
                Edit
              </Button>
              <Button variant="outlined" color="error" onClick={() => deleteTodo(todo.id)}>
                Delete
              </Button>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default TodoItem;
