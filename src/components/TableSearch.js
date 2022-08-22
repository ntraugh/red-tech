import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CreateButton from './CreateButton';

const orderTypes = [
  "Standard",
  "ReturnOrder",
  "TransferOrder",
  "SaleOrder",
]

const TableSearch = () => {
    // using state for handling the opening and closing of the modal and dropdown menu
    const [orderType, setOrderType] = useState([])
    

    const handleChange = (e) => {
      const { target: { value }, } = e
      setOrderType( typeof value === "string" ? value.split(",") : value)
      console.log(value)
    }

  return (
    <>
        <TextField label="Customer Search"
          id="outlined-size-small"
          defaultValue="Customer Search"
          size="small" 
          style={{"marginTop": "16px"}}/>
        <SearchIcon style={{"color": "white", "backgroundColor": "#1976d2", "borderRadius": "2px", "marginTop": "24px"}}/>

        {/* CREATE MODAL HERE FOR CREATE ORDER BUTTON*/}
        <CreateButton />
        <Button variant="contained" style={{"marginRight": "2rem"}} startIcon={<DeleteIcon />}>
            Delete Selected
        </Button>
        {/* Dropdown form */}
        <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-name-label">Order Type</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={orderType}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {orderTypes.map((order) => (
            <MenuItem
              key={order}
              value={order}
            >
              {order}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    
       
    </>
  )
}

export default TableSearch