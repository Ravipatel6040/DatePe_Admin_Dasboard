import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jul", value: 0 },
  { name: "Aug", value: 400 },
  { name: "Sep", value: 250 },
  { name: "Oct", value: 700 },
  { name: "Nov", value: 350 },
  { name: "Dec", value: 500 },
  { name: "Jan", value: null },
];

export default function AbuseReportsChart() {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 3,
        bgcolor: "#f8f9fc",
        width: "100%",
        maxWidth: "600px",
        mt: 2, // Added margin-top 20px
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Abuse Reports
        </Typography>
        <Box sx={{ width: "100%", height: 180 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 15, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="red"
                strokeWidth={2}
                dot={{ stroke: "black", strokeWidth: 2, fill: "white", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}
