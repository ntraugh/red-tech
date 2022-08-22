import React, {useEffect, useState} from 'react'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';




const orderTypes = [
    "Standard",
    "ReturnOrder",
    "TransferOrder",
    "SaleOrder",
  ]

const CreateButton = () => {
    // using state for handling the opening and closing of the modal and dropdown menu
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [isOrderType, setOrderType] = useState("")
    const [data, setData] = useState({ createdByUserName: "", customerName: ""})

    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        setData( {...data, [e.target.name]: value})
        console.log(value)
        // check if value is equal to any ordertype then only display those orders from that ordertype
      }
    const handleOrder = (e) => {
        const value = e.target.value
        setOrderType( typeof value === "string" ? value.split(",") : value)
        console.log(value)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          CreatedByUserName: data.createdByUserName,
          CustomerName: data.customerName,
          OrderType: isOrderType
        };
        axios.post("https://red-candidate-web.azurewebsites.net/api/Orders/", userData, 
        { headers: 
            { "ApiKey": "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4",
              "Content-Type": "application/json"}} )
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
        });
      };
    

  return (
    <>
        <Button variant="contained" style={{"margin": "1rem", "marginBottom": "2rem"}} onClick={handleOpen}>
            Create Order
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Order</DialogTitle>
        <DialogContent onSubmit={handleSubmit}>
          <DialogContentText>
           Please fill out all applicable fields. A unique ID will be generated for your order!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            name='createdByUserName'
            type="name"
            value={data.createdByUserName}
            fullWidth
            variant="standard"
            onChange={handleChange}

          />
          <FormControl sx={{ m: 1, width: 300 }}  style={{"marginTop": "20px"}}>
        <InputLabel id="demo-multiple-name-label">Order Type</InputLabel>
          <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={isOrderType}
          onChange={handleOrder}
          name="orderType"
          input={<OutlinedInput label="Choose your order type." />}
        
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

          <TextField
            autoFocus
            margin="dense"
            id="name"
            name='customerName'
            label="Customer"
            value={data.customerName}
            type="name"
            fullWidth
            variant="standard"
            onChange={handleChange}

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create Order</Button>
        </DialogActions>
      </Dialog>
    </>
    
  )
}

export default CreateButton