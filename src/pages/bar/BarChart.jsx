import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Bar from "./Bar";

export default function BarChart() {
  //const theme = useTheme();
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
}
