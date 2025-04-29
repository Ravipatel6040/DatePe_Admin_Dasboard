import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from "recharts";
  import { Box, Card, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
  import React from "react";
  
  // Sample Data
  const data = [
    { month: "Oct 2021", chats: 5, events: 3 },
    { month: "Nov 2021", chats: 6, events: 4 },
    { month: "Dec 2021", chats: 7, events: 5 },
    { month: "Jan 2022", chats: 6, events: 5 },
    { month: "Feb 2022", chats: 5, events: 6 },
    { month: "Mar 2022", chats: 7, events: 5 },
  ];
  
  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            p: 1,
            fontSize: 12,
          }}
        >
          <Typography sx={{ fontWeight: 600, mb: 0.5 }}>{label}</Typography>
          {payload.map((entry, index) => {
            const isChats = entry.dataKey === "chats";
            return (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: isChats ? "#f54848" : "rgba(35, 35, 35, 0.7)",
                  }}
                />
                <Typography sx={{ color: "#333" }}>
                  {isChats ? "Chats" : "Events"}: {entry.value}
                </Typography>
              </Box>
            );
          })}
        </Box>
      );
    }
  
    return null;
  };
  
  // Chart Component
  const UserChart = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          ml: "15px",
          px: { xs: 1.5, md: 2 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: 625,
            height: { xs: 300, sm: 423.5 },
            borderRadius: "34.58px",
            p: 2,
            boxShadow: "0 0 12px rgba(0,0,0,0.05)",
            border: "1px solid #e0e0e0",
          }}
        >
          <Box sx={{ position: "relative", height: "100%" }}>
            {/* Legend */}
            <Stack
              direction="row"
              spacing={4}
              sx={{ position: "absolute", top: 12, right: 24, zIndex: 2 }}
            >
              <Stack direction="row" spacing={0.6} alignItems="center">
                <Box
                  sx={{
                    width: 8.23,
                    height: 8.23,
                    bgcolor: "#f54848",
                    borderRadius: "50%",
                  }}
                />
                <Typography sx={{ color: "#787486", fontSize: 11.5 }}>
                  Chats
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.6} alignItems="center">
                <Box
                  sx={{
                    width: 8.23,
                    height: 8.23,
                    bgcolor: "rgba(35, 35, 35, 0.7)",
                    borderRadius: "50%",
                  }}
                />
                <Typography sx={{ color: "#787486", fontSize: 11.5 }}>
                  Events
                </Typography>
              </Stack>
            </Stack>
  
            {/* Line Chart */}
            <Box sx={{ position: "absolute", top: 50, left: 26, right: 26, bottom: 26 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid stroke="#f5f5f5" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} domain={[0, 12]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="chats"
                    stroke="#f54848"
                    strokeWidth={2}
                    dot={{ r: 4, stroke: "#f54848", strokeWidth: 1 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="events"
                    stroke="rgba(35, 35, 35, 0.7)"
                    strokeWidth={2}
                    dot={{ r: 4, stroke: "rgba(35, 35, 35, 0.7)", strokeWidth: 1 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Card>
      </Box>
    );
  };
  
  export default UserChart;
  