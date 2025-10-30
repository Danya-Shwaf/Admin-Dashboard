import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./data";
import { Box } from "@mui/material";
import Header from "../../components/Header";

export default function Contacts() {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
      <DataGrid
        // Filtering
        slots={{
          toolbar: GridToolbar,
        }}
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
