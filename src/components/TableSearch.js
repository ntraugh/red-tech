import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const TableSearch = () => {
  return (
    <>
        <TextField id="outlined-basic" label="Customer Search" variant="outlined" />
        <Button variant="outlined" style={{"margin": "1rem"}}>
            Create Order
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete Selected
        </Button>
    </>
  )
}

export default TableSearch