import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography} from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

export default function Team() {
  const theme = useTheme();
  // properties for columns: 
  // field => required 
  // align : center
  // headerAlign : center
  // flex : 1
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              mx: "auto",
              my: 1,
              bgcolor:
                access == "Admin"
                  ? theme.palette.primary.dark
                  : access == "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access == "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "white" }}
                fontSize="small"
              />
            )}
            {access == "Manager" && (
              <SecurityOutlined sx={{ color: "white" }} fontSize="small" />
            )}
            {access == "User" && (
              <LockOpenOutlined sx={{ color: "white" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "15px" }} variant="body1" color="white">
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box style={{ height: 600 }}>
      <Header title={"Team"} subTitle={"Managing the Team Members"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}