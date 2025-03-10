import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid'; // ✅ Replacing Syncfusion Grid
import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { Button } from '@mui/material';
import * as XLSX from 'xlsx'; // ✅ Export to Excel
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // ✅ Fix: Ensure autoTable is imported

const Orders = () => {
  // ✅ Fix: Ensure each row has a unique `id` using `OrderID`
  const [rows, setRows] = useState(ordersData.map((row) => ({ id: row.OrderID, ...row })));

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Orders");
    XLSX.writeFile(wb, "Orders.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Orders Report", 14, 10);

    // ✅ Fix: Extract column headers
    const tableColumnHeaders = ordersGrid.map((col) => col.headerName);

    // ✅ Fix: Extract row data based on `field` property
    const tableRows = rows.map((row) =>
      ordersGrid.map((col) => row[col.field] || "")
    );

    autoTable(doc, {
      head: [tableColumnHeaders],
      body: tableRows,
      startY: 20,
    });

    doc.save("Orders.pdf");
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      
      {/* Export Buttons */}
      <div className="flex gap-4 mb-4">
        <Button variant="contained" color="primary" onClick={exportToExcel}>
          Export to Excel
        </Button>
        <Button variant="contained" color="secondary" onClick={exportToPDF}>
          Export to PDF
        </Button>
      </div>

      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={ordersGrid}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Orders;
