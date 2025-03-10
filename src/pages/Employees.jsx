import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid'; // ✅ Replacing Syncfusion Grid
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  // Ensure each row has an `id` property
  const [rows, setRows] = useState(employeesData.map((row, index) => ({ id: row.EmployeeID || index + 1, ...row })));
  const [searchQuery, setSearchQuery] = useState('');

  const handleRowEditCommit = (params) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === params.id ? { ...row, ...params } : row
      )
    );
  };

  // Filtering employees based on search input
  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search employees..."
          className="w-full p-2 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={employeesGrid}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowEditCommit={handleRowEditCommit} // ✅ Fixed event handler
        />
      </div>
    </div>
  );
};

export default Employees;
