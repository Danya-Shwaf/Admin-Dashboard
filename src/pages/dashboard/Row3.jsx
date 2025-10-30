import React from "react";
import { Stack, Paper, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/Pie/Pie";
import Bar from "../../pages/bar/Bar";
import Geography from "../../pages/geography/Geography";
export default function Row3() {
  const theme = useTheme();
  return (
    <Stack mt={2} direction={"row"} gap={1.5}>
      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "28%" }}>
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight={"600"}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "33%" }}>
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight={"600"}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>
      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "33%" }}>
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight={"600"}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Geography
        </Typography>
        <Geography isDashboard ={true}/>
      </Paper>
    </Stack>
  );
}
