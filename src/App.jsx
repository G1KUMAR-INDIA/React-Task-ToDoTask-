import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import EditTodo from './components/EditTodo';
import DeleteTodo from './components/DeleteTodo';
import TodoList from './components/TodoList';
import StatusFilter from './components/StatusFilter';
import Navbar from './components/Navbar';
import { Container, Typography, Box } from '@mui/material';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    todo.id = Date.now();
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={
              <>
                <Typography variant="h4" align="center" gutterBottom>
                  My Todo
                </Typography>
                <TodoForm addTodo={addTodo} />
                <StatusFilter setFilter={setFilter} />
                <TodoList 
                  todos={todos} 
                  updateTodo={updateTodo} 
                  deleteTodo={deleteTodo} 
                  filter={filter} 
                />
              </>
            } />
            <Route path="/add" element={<TodoForm addTodo={addTodo} />} />
            <Route path="/edit/:id" element={<EditTodo todos={todos} updateTodo={updateTodo} />} />
            <Route path="/delete/:id" element={<DeleteTodo todos={todos} deleteTodo={deleteTodo} />} />
            <Route path="/list" element={<TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} filter={filter} />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
