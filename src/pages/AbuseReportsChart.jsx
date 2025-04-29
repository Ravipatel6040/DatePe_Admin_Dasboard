import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box as MUIBox, Typography, useTheme } from "@mui/material";

// Chart data
const data = [
  { name: "Jul", value: 0 },
  { name: "Aug", value: 400 },
  { name: "Sep", value: 300 },
  { name: "Oct", value: 700 },
  { name: "Nov", value: 400 },
  { name: "Dec", value: 600 },
];

const AbuseReportsChart = () => {
  const theme = useTheme();

  return (
    <MUIBox
      sx={{
        width: "100%",
        maxWidth: "100%",
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 3 },
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: "#b1b1b1",
          fontSize: { xs: "18px", sm: "20px", md: "22px" },
          mb: { xs: 2, sm: 3 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        Abuse Reports Performance Chart
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "#9e9e9e", fontSize: 12 }} />
          <YAxis tick={{ fill: "#9e9e9e", fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ff0000"
            strokeWidth={2}
            dot={{
              stroke: "#000",
              strokeWidth: 2,
              fill: "#fff",
              r: 4,
            }}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </MUIBox>
  );
};

export default AbuseReportsChart;
