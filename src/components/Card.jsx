import EventIcon from "@mui/icons-material/Event";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import {
  Avatar,
  Box,
  Card as MuiCard,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const StatCard = ({ title, value, validFrom, description, avatarUrl }) => (
  <MuiCard
    sx={{
      height: 235,
      width: 312,
      borderRadius: 6,
      boxShadow: 3,
      p: 2,
      backgroundColor: "#f9fafb",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <CardContent
      sx={{ p: 0, height: "100%", display: "flex", flexDirection: "column" }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h6"
          fontWeight="bold"
          color="text.primary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
        <Avatar sx={{ width: 40, height: 40 }} src={avatarUrl} />
      </Box>

      {/* Value Section */}
      <Box mt={2}>
        <Typography variant="h4" color="error" fontWeight="bold" lineHeight={1}>
          {value.number}
        </Typography>
        <Typography
          variant="subtitle1"
          color="error"
          fontWeight="bold"
          sx={{ mt: -0.5 }}
        >
          {value.unit}
        </Typography>
      </Box>

      {/* Valid From */}
      <Box mt={-5} display="flex" justifyContent="flex-end">
        <Box textAlign="right">
          <Typography variant="caption" color="text.secondary" display="block">
            Valid From
          </Typography>
          <Typography
            variant="caption"
            fontWeight="bold"
            color="error"
            display="block"
          >
            {validFrom}
          </Typography>
        </Box>
      </Box>

      {/* Description */}
      <Box mt="auto" pt={2} borderTop={1} borderColor="divider">
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
      </Box>
    </CardContent>
  </MuiCard>
);

const Card = () => {
  const commonAvatar = "https://randomuser.me/api/portraits/women/44.jpg";

  const cardData = [
    {
      title: "Total Users",
      value: { number: "100", unit: "millions" },
      validFrom: "12/23",
      description: "Average 11k Users daily",
      avatarUrl: commonAvatar,
    },
    {
      title: "Total Subscribers",
      value: { number: "018", unit: "millions" },
      validFrom: "12/23",
      description: "Average 10k subscribers daily",
      avatarUrl: commonAvatar,
    },
    {
      title: "Total Events",
      value: { number: "100", unit: "Thousand" },
      validFrom: "12/23",
      description: "Based on the current accounting",
      avatarUrl: commonAvatar,
    },
  ];

  return (
    <Box sx={{ maxWidth: 1280, mx: "auto", px: 2, py: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            sx={{
              mt: {
                xs: 0,   // No shift on small screens
                md: -6,  // Shift 50px up on md and up
              },
            }}
          >
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Card;
