import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";

const data = [
  {
    id: "france",
    color: "hsl(4, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 79,
      },
      {
        x: "helicopter",
        y: 28,
      },
      {
        x: "boat",
        y: 150,
      },
      {
        x: "train",
        y: 173,
      },
      {
        x: "subway",
        y: 234,
      },
      {
        x: "bus",
        y: 98,
      },
      {
        x: "car",
        y: 244,
      },
      {
        x: "moto",
        y: 295,
      },
      {
        x: "bicycle",
        y: 287,
      },
      {
        x: "horse",
        y: 157,
      },
      {
        x: "skateboard",
        y: 239,
      },
      {
        x: "others",
        y: 69,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(205, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 278,
      },
      {
        x: "helicopter",
        y: 222,
      },
      {
        x: "boat",
        y: 65,
      },
      {
        x: "train",
        y: 213,
      },
      {
        x: "subway",
        y: 89,
      },
      {
        x: "bus",
        y: 278,
      },
      {
        x: "car",
        y: 231,
      },
      {
        x: "moto",
        y: 47,
      },
      {
        x: "bicycle",
        y: 126,
      },
      {
        x: "horse",
        y: 191,
      },
      {
        x: "skateboard",
        y: 95,
      },
      {
        x: "others",
        y: 26,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(39, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 3,
      },
      {
        x: "helicopter",
        y: 187,
      },
      {
        x: "boat",
        y: 259,
      },
      {
        x: "train",
        y: 294,
      },
      {
        x: "subway",
        y: 158,
      },
      {
        x: "bus",
        y: 146,
      },
      {
        x: "car",
        y: 125,
      },
      {
        x: "moto",
        y: 253,
      },
      {
        x: "bicycle",
        y: 230,
      },
      {
        x: "horse",
        y: 287,
      },
      {
        x: "skateboard",
        y: 193,
      },
      {
        x: "others",
        y: 12,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(179, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 213,
      },
      {
        x: "helicopter",
        y: 271,
      },
      {
        x: "boat",
        y: 22,
      },
      {
        x: "train",
        y: 270,
      },
      {
        x: "subway",
        y: 97,
      },
      {
        x: "bus",
        y: 146,
      },
      {
        x: "car",
        y: 116,
      },
      {
        x: "moto",
        y: 159,
      },
      {
        x: "bicycle",
        y: 165,
      },
      {
        x: "horse",
        y: 210,
      },
      {
        x: "skateboard",
        y: 76,
      },
      {
        x: "others",
        y: 126,
      },
    ],
  },
];

export default function Line({ isDashboard = false }) {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        curve="catmullRom"
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "#ffffff",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.text.secondary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            // @ts-ignore
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisBottom={{
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
        }}
        axisLeft={{ legend: isDashboard ? null : "Count", legendOffset: -44 }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
}
