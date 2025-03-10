import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid'; // ✅ Replacing Syncfusion Grid
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  // ✅ Fix: Ensure each row has a unique `id` using `CustomerID`
  const [rows, setRows] = useState(customersData.map((row) => ({ id: row.CustomerID, ...row })));

  const handleRowEditCommit = (params) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === params.id ? { ...row, ...params } : row))
    );
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={customersGrid}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowEditCommit={handleRowEditCommit} // ✅ Fix: Correct event handler
        />
      </div>
    </div>
  );
};

export default Customers;

