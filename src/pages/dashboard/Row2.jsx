import React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Line from "../../pages/line/Line";
import { Transactions } from "./data";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
export default function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper sx={{ minWidth: "60%", flexGrow: 1 }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              variant="h6"
              my={2}
              ml={4}
              color={theme.palette.secondary.main}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342,32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>
      <Box
        minWidth={"250px"}
        maxHeight={"380px"}
        overflow={"auto"}
        flexGrow={1}
        className="custom-scrollbar"
      >
        <Paper>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            p={1.2}
            color={theme.palette.secondary.main}
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
