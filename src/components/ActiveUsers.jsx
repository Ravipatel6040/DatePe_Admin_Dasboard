import React from "react";
import AbuseReportsChart from "./AbuseReportsChart";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const activeUsers = [
  {
    name: "Livia Bator",
    country: "Brazil",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    countryColor: "red",
  },
  {
    name: "Randy Gupta",
    country: "India",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    countryColor: "orange",
  },
  {
    name: "Workman",
    country: "USA",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    countryColor: "blue",
  },
];

export default function ActiveUsers() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        mt: 6,
        ml: 4,
        
      }}
    >
      {/* Active Users Card */}
      <Card
        sx={{
          p: 2,
          borderRadius: 3,
          bgcolor: "#f8f9fc",
          width: "100%",
          maxWidth: { xs: "100%", md: "420px" },
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Active Users
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              {activeUsers.map((user, index) => (
                <Box key={index} sx={{ textAlign: "center" }}>
                  <Avatar src={user.image} sx={{ width: 50, height: 50, mb: 0.5 }} />
                  <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>{user.name}</Typography>
                  <Typography sx={{ fontSize: "12px", color: user.countryColor }}>
                    {user.country}
                  </Typography>
                </Box>
              ))}
            </Box>
            <IconButton>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Message Input */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#EFF2F7",
              borderRadius: "20px",
              p: "4px",
              mt: 2,
            }}
          >
            <Typography sx={{ fontSize: "12px", color: "#8a8a8a", ml: 1 }}>
              Write Message
            </Typography>
            <TextField
              variant="standard"
              fullWidth
              placeholder="message"
              InputProps={{
                disableUnderline: true,
                sx: { ml: 1, fontSize: "14px" },
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#222",
                        color: "718EBF",
                        px: 2,
                        borderRadius: "20px",
                        "&:hover": { bgcolor: "#000" },
                      }}
                      endIcon={<SendIcon />}
                    >
                      Send
                    </Button>
                  </InputAdornment>
                ),
              }}
              sx={{ bgcolor: "transparent", borderRadius: "20px" }}
            />
          </Box>
        </CardContent>
      </Card>

      {/* Abuse Reports Chart on the right */}
      <Box sx={{ flexGrow: 1 }}>
        <AbuseReportsChart />
      </Box>
    </Box>
  );
}
