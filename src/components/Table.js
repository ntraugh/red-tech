import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios"



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'orderId', headerName: 'Order ID', width: 130 },
  { field: 'createdDate', headerName: 'Creation Date', width: 130 },
  {
    field: 'createdByUserName',
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
    field: 'customerName',
    headerName: 'Customer',
    type: 'string',

  },
];




const Table = () => {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        
            fetch("https://red-candidate-web.azurewebsites.net/api/Orders/", { headers: { "ApiKey": "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4"}})
            .then((res) => res.json())
            .then((res) => setTableData(res))
      
    }, [])
  return (
    <div style={{ height: 400, width: '100%', boxShadow: "6px 6px 10px black" }}>
      <DataGrid
      rows={tableData}
      columns={columns}
      pageSize={5}
      getRowId={(row) => row.orderId}
      rowsPerPageOptions={[5]}
      checkboxSelection/>
    </div>
  )
}

export default Table