import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function StatusFilter({ setFilter }) {
  return (
    <FormControl sx={{ marginBottom: 2, minWidth: 200 }}>
      <InputLabel>Status Filter</InputLabel>
      <Select
        label="Status Filter"
        onChange={(e) => setFilter(e.target.value)}
        defaultValue="All"
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
        <MenuItem value="Not Completed">Not Completed</MenuItem>
      </Select>
    </FormControl>
  );
}

export default StatusFilter;
