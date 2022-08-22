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

const orderTypes = [
  "Standard",
  "ReturnOrder",
  "TransferOrder",
  "SaleOrder",
]

const TableSearch = () => {
    // using state for handling the opening and closing of the modal and dropdown menu
    const [open, setOpen] = useState(false)
    const [orderType, setOrderType] = useState([])
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleChange = (e) => {
      const { target: { value }, } = e
      setOrderType( typeof value === "string" ? value.split(",") : value)
      console.log(e.target.value)
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
        <Button variant="contained" style={{"margin": "1rem"}} onClick={handleOpen}>
            Create Order
        </Button>
        <Button variant="contained" style={{"marginRight": "2rem"}} startIcon={<DeleteIcon />}>
            Delete Selected
        </Button>
        {/* Dropdown form */}
        <FormControl sx={{ m: 1, width: 300 }}>
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