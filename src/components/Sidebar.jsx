import React, { useState } from "react";
import { Link } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  IconButton,
  Drawer,
  Typography,
} from "@mui/material";

const sidebarItemsData = [
  { text: "Dashboard", icon: <HomeIcon />, path: "/" },
  { text: "Users", icon: <PeopleIcon />, path: "/users" },
  { text: "Abuse Reports", icon: <PersonIcon />, path: "/abuse-reports" },
  { text: "Subscriptions", icon: <BarChartIcon />, path: "/subscriptions" },
  { text: "Management", icon: <CreditCardIcon />, path: "/management" },
  { text: "Gifts", icon: <CardGiftcardIcon />, path: "/gifts" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ height: "100%" }}>
      {/* Logo */}
      <Box sx={{ px: 2, pt: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            pl: "20px",
          }}
        >
          <span style={{ color: "#FF4B4B" }}>Date</span>
          <span style={{ color: "#000" }}>Pe</span>
        </Typography>
      </Box>

      {/* Sidebar List */}
      <List sx={{ pt: 2 }}>
        {sidebarItemsData.map((item, index) => (
          <ListItem
            key={index}
            button
            onClick={() => {
              setActiveIndex(index);
              setMobileOpen(false);
            }}
            component={Link}
            to={item.path}
            sx={{
              py: 1.5,
              px: 2,
              borderRadius: 2,
              mx: 1,
              transition: "background 0.3s",
              "&:hover": {
                bgcolor: "rgba(244, 67, 54, 0.08)",
              },
              bgcolor:
                activeIndex === index ? "rgba(244, 67, 54, 0.12)" : "transparent",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 35,
                color: activeIndex === index ? "#f44336" : "text.secondary",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                "& .MuiListItemText-primary": {
                  color: activeIndex === index ? "#f44336" : "text.secondary",
                  fontWeight: activeIndex === index ? 600 : 400,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Hamburger Menu Button (Mobile Only) */}
      {!mobileOpen && (
        <IconButton
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            top: 20,
            left: 16,
            zIndex: 1300,
            bgcolor: "white",
            boxShadow: 1,
          }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar for Desktop */}
      <Box
        component={Paper}
        elevation={3}
        sx={{
          width: { xs: 0, md: "255px" },
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          bgcolor: "background.paper",
          display: { xs: "none", md: "block" },
          overflowY: "auto",
        }}
      >
        {drawerContent}
      </Box>

      {/* Sidebar Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        transitionDuration={{ enter: 300, exit: 200 }}
        ModalProps={{ keepMounted: true }}
        sx={{
          zIndex: (theme) => theme.zIndex.appBar + 10,
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "255px",
            boxSizing: "border-box",
            height: "100vh",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;