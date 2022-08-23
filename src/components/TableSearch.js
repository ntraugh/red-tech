import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
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
    // using state to set our orderType to an empty array
    const [orderType, setOrderType] = useState([])
    

    const handleChange = (e) => {
      const value = e.target.value
      setOrderType( typeof value === "string" ? value.split(",") : value)
      console.log(value)
    }

  return (
    <>
      <div style={{"alignItems": "center"}}>
          <TextField label="Search by Id"
            id="outlined-size-small"
            defaultValue="Customer Search"
            size="small" 
            style={{"marginTop": "16px"}}/>
          <Button variant="contained" style={{"marginBottom": "10px"}}>
          <SearchIcon style={{"color": "white", "borderRadius": "2px", "width": "30"}}/>
          </Button>
        {/* CREATE MODAL HERE FOR CREATE ORDER BUTTON*/}
        <CreateButton />
        <Button variant="contained" style={{"marginBottom": "1rem"}} startIcon={<DeleteIcon />}>
            Delete Order
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
      </div>
       
    </>
  )
}

export default TableSearch