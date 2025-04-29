import React from "react";
import { Card, Typography, Box, Avatar, Button } from "@mui/material";

const recentActivities = [
  {
    name: "Priyanka",
    age: 24,
    subscription: "Premium Subscription: 1 year",
    validTill: "24 July 2025",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Piyush",
    age: 24,
    subscription: "Premium Subscription: 1 year",
    validTill: "24 July 2025",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Samantha",
    age: 24,
    subscription: "Premium Subscription: 1 year",
    validTill: "24 July 2025",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

export default function RecentActivity() {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "#f8f9fc",
        borderRadius: 5,
        width: "350px",
        height: "285px",
        marginTop:"30px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        Recent Activity
      </Typography>
      <Box>
        {recentActivities.map((user, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              p: 1.5,
              borderRadius: 3,
              height: "65px",
              
            }}
          >
            <Avatar src={user.image} sx={{ width: 40, height: 40, mr: 1 }} />
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                {user.name}{" "}
                <Typography component="span" sx={{ color: "gray", fontSize: "12px" }}>
                  {user.age}
                </Typography>
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ fontSize: "10px" }}>
                {user.subscription}
              </Typography>
            </Box>
            <Button sx={{ color: "#f44336", fontWeight: 600, fontSize: "12px", minWidth: "auto", p: 0 }}>
              Manage
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
