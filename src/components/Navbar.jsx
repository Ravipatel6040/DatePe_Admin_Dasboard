"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Avatar,
  Box,
  Menu,
  MenuItem,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

// Styled Search Component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#f5f5f5",
  "&:hover": {
    backgroundColor: "#ebebeb",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  display: "flex",
  alignItems: "center",
  border: "1px solid #e0e0e0",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9e9e9e",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const drawerWidth = 255;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettings = () => {
    console.log("Go to settings");
    handleClose();
  };

  const handleLogout = () => {
    console.log("Logging out...");
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          ml: { xs: 0, md: `${drawerWidth}px` },
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "transparent",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1190px",
            mx: "auto",
            px: { xs: 2, sm: 3 },
          }}
        >
          <Toolbar sx={{ padding: "0 !important", height: "100%", alignItems: "center" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: "block",
                fontWeight: "bold",
                fontSize: isMobile ? "20px" : "28px",
              }}
            >
              Overview
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for something"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  fontSize: isMobile ? "0.8rem" : "1rem",
                }}
              />
            </Search>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton size="large" aria-label="show notifications" color="inherit">
                <NotificationsIcon sx={{ fontSize: isMobile ? "1.2rem" : "1.5rem", color: "#FE5C73"}} />
              </IconButton>
              <IconButton onClick={handleAvatarClick}>
                <Avatar
                  alt="User Profile"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  sx={{ width: isMobile ? 28 : 36, height: isMobile ? 28 : 36 }}
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem onClick={handleSettings}>
                  <SettingsIcon fontSize="small" sx={{ mr: 1 }} />
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </Box>
  );
}
