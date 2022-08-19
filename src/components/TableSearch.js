import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

const TableSearch = () => {
  return (
    <>
        <TextField label="Customer Search"
          id="outlined-size-small"
          defaultValue="Small"
          size="small" 
          style={{"marginTop": "16px"}}/>
        <SearchIcon style={{"color": "white", "backgroundColor": "#1976d2", "borderRadius": "2px", "marginTop": "24px"}}/>

        <Button variant="contained" style={{"margin": "1rem"}}>
            Create Order
        </Button>
        <Button variant="contained" style={{"marginRight": "2rem"}} startIcon={<DeleteIcon />}>
            Delete Selected
        </Button>
        <TextField label="Needs to be dropdown"
          id="outlined-size-small"
          defaultValue="Small"
          size="small" 
          style={{"marginTop": "16px"}}/>
    </>
  )
}

export default TableSearch