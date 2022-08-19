import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios"



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'OrderId', headerName: 'Order ID', width: 130 },
  { field: 'CreationDate', headerName: 'Creation Date', width: 130 },
  {
    field: 'CreatedBy',
    headerName: 'Created By',
    type: 'string',
    width: 90,
  },
  {
    field: 'orderType',
    headerName: 'Oder Type',
    type: 'string',

  },
  {
    field: 'customer',
    headerName: 'Customer',
    type: 'string',

  },
];

const rows = [
  { id: 1, CreationDate: 'Snow', OrderId: 'Jon', CreatedBy: "Name", orderType: "Standard", customer: "Kroger" },
  { id: 2, CreationDate: 'Lannister', OrderId: 'Cersei', CreatedBy: "Name", orderType: "Standard", customer: "Kroger" },
  { id: 3, CreationDate: 'Lannister', OrderId: 'Jaime', CreatedBy: "Name", orderType: "Standard", customer: "Kroger" },
  { id: 4, CreationDate: 'Stark', OrderId: 'Arya', CreatedBy: "Name", orderType: "Standard", customer: "Kroger" },
  { id: 5, CreationDate: 'Targaryen', OrderId: 'Daenerys', CreatedBy: "Name", orderType: "Standard", customer: "Kroger" },
  { id: 6, CreationDate: 'Melisandre', OrderId: null, CreatedBy: "Name", orderType: "Standard", customer: "Kroger" },
  { id: 7, CreationDate: 'Clifford', OrderId: 'Ferrara', CreatedBy: "Name", orderType: "Standard", customer: "Kroger" },
  { id: 8, CreationDate: 'Frances', OrderId: 'Rossini', CreatedBy: "Name", orderType: "Standard", customer: "Kroger" },
  { id: 9, CreationDate: 'Roxie', OrderId: 'Harvey', CreatedBy: "Name", orderType: "Standard", customer: "Kroger" },
];


const Table = () => {
    useEffect(() => {
        const getOrders = async () => {
            const res = await axios.get("https://red-candidate-web.azurewebsites.net/api/Orders/", { headers: { "ApiKey": "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4"}})
            console.log(res.data)
        }
        getOrders()
    }, [])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection/>
    </div>
  )
}

export default Table