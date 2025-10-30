import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Button, Box, Stack } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <div>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Header title={"Dashboard"} subTitle={"Welcome to your dashboard"} />
        <Box textAlign={"end"} mb={1.3}>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}
