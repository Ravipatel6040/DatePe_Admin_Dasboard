import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Fab,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ellipse32 from "../assets/Images/ellipse-3-2.png";
import ellipse33 from "../assets/Images/ellipse-3-3.png";
import ellipse34 from "../assets/Images/ellipse-3-4.png";
import ellipse3 from "../assets/Images/ellipse-3.png";
import image from "../assets/Images/image.png";

const Chat = () => {
  const [chatData, setChatData] = useState([
    {
      id: 1,
      name: "Matthew Wilson",
      avatar: ellipse3,
      country: "United States",
      accountCreated: "06-03-2021",
      chatCreated: "06-03-2021",
    },
    {
      id: 2,
      name: "Sarah Martinez",
      avatar: image,
      country: "Brazil",
      accountCreated: "06-03-2021",
      chatCreated: "06-03-2021",
    },
    {
      id: 3,
      name: "Christopher Brown",
      avatar: ellipse32,
      country: "India",
      accountCreated: "18-03-2021",
      chatCreated: "20-03-2021",
    },
    {
      id: 4,
      name: "Emily Thompson",
      avatar: ellipse33,
      country: "United States",
      accountCreated: "11-06-2021",
      chatCreated: "11-06-2021",
    },
    {
      id: 5,
      name: "David Smith",
      avatar: ellipse34,
      country: "Brazil",
      accountCreated: "25-06-2021",
      chatCreated: "28-06-2021",
    },
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAddRow = () => {
    const maxId = chatData.reduce((max, item) => Math.max(max, item.id), 0);
    const newRow = {
      id: maxId + 1,
      name: "New User",
      avatar: ellipse3,
      country: "Unknown",
      accountCreated: "01-01-2022",
      chatCreated: "01-01-2022",
    };
    setChatData([...chatData, newRow]);
  };

  const columns = [
    { id: "name", label: "Name" },
    { id: "country", label: "Country" },
    { id: "accountCreated", label: "Account Created" },
    { id: "chatCreated", label: "Chat Created date" },
    { id: "actions", label: "Actions" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        overflowX: "auto",
        px: { xs: 2.5, sm: 5 }, // Responsive horizontal padding
        pb: 4,
        
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          maxWidth: "1035px",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CardHeader
          title="Chats"
          sx={{
            height: "48px",
            padding: "0 24px",
            backgroundColor: "rgba(238, 238, 238, 0.5)",
            display: "flex",
            alignItems: "center",
            "& .MuiCardHeader-title": {
              fontWeight: 600,
              fontSize: "16px",
              
              
              fontFamily: "Source Sans Pro, Helvetica",
            },
          }}
        />

        <TableContainer sx={{ flex: 1, overflowX: "auto" }}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow sx={{ height: "48px" }}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      height: "48px",
                      
                      padding: "0 16px",
                      fontWeight: 600,
                      fontSize: isMobile ? "12px" : "14px",
                      lineHeight: "48px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {chatData.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    
                    height: "48px",
                    backgroundColor:
                      index % 2 === 0 ? "rgba(238,238,238,0.25)" : "white",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                  }}
                >
                  <TableCell sx={{ padding: "0 16px", height: "48px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box
                        component="img"
                        src={row.avatar}
                        alt="avatar"
                        sx={{
                          width: isMobile ? 24 : 28,
                          height: isMobile ? 24 : 28,
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: isMobile ? "12px" : "14px",
                          fontWeight: 400,
                          lineHeight: "48px",
                        }}
                      >
                        {row.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{ padding: "0 16px", height: "48px", lineHeight: "48px" }}
                  >
                    {row.country}
                  </TableCell>
                  <TableCell
                    sx={{ padding: "0 16px", height: "48px", lineHeight: "48px" }}
                  >
                    {row.accountCreated}
                  </TableCell>
                  <TableCell
                    sx={{ padding: "0 16px", height: "48px", lineHeight: "48px" }}
                  >
                    {row.chatCreated}
                  </TableCell>
                  <TableCell sx={{ padding: "0 16px", height: "48px" }}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <IconButton size="small">
                        <EditIcon sx={{ width: 16, height: 16 }} />
                      </IconButton>
                      <IconButton size="small">
                        <DeleteIcon sx={{ width: 16, height: 16 }} />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Fab
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "90px",
            width: "30px",
            height: "30px",
            border: "1.5px solid red",
            color: "red",
            backgroundColor: "white",
            boxShadow: "none",
            "&:hover": { backgroundColor: "#ffe6e6" },
          }}
          onClick={handleAddRow}
        >
          <AddIcon sx={{ fontSize: "18px" }} />
        </Fab>

        <Box
          sx={{
            height: "52px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            padding: "0 10px",
            backgroundColor: "white",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              borderRadius: "8px",

              padding: "7.5px 16px",
              textTransform: "none",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                fontFamily: "Source Sans Pro, Helvetica",
               

              }}
            >
              Save
            </Typography>
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Chat;
