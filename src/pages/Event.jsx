import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

// Importing images
import olivia from "../assets/Images/olivia.png";
import joseph from "../assets/Images/joseph.png";
import william from "../assets/Images/william.png";
import nicholas from "../assets/Images/nicholas.png";

const avatarImages = { olivia, joseph, william, nicholas };

const Event = () => {
  const eventData = [
    {
      id: 1,
      name: "Olivia Turner",
      avatar: avatarImages.olivia,
      country: "User",
      accountCreatedDate: "02-11-2021",
      eventCreatedDate: "11-11-2021",
    },
    {
      id: 2,
      name: "Joseph Wright",
      avatar: avatarImages.joseph,
      country: "User",
      accountCreatedDate: "06-12-2021",
      eventCreatedDate: "06-12-2021",
    },
    {
      id: 3,
      name: "William Cooper",
      avatar: avatarImages.william,
      country: "User",
      accountCreatedDate: "18-07-2022",
      eventCreatedDate: "20-07-2022",
    },
    {
      id: 4,
      name: "Nicholas Young",
      avatar: avatarImages.nicholas,
      country: "User",
      accountCreatedDate: "18-07-2022",
      eventCreatedDate: "20-07-2022",
    },
  ];

  const handleEdit = (id) => {
    console.log(`Edit item with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with id: ${id}`);
  };

  const handleSave = () => {
    console.log("Save button clicked");
  };

  const handleAdd = () => {
    console.log("Add button clicked");
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        overflowX: "auto",
        px: { xs: 2.5, sm: 5 },
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
          title="Events"
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

        <TableContainer component={Paper} elevation={0} sx={{ flex: 1, overflowX: "auto" }}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow sx={{ height: "48px" }}>
                <TableCell sx={{ fontWeight: 600, fontSize: "14px", padding: "0 16px" }}>
                  Name
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "14px", padding: "0 16px" }}>
                  Country
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "14px", padding: "0 16px" }}>
                  Account Created Date
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "14px", padding: "0 16px" }}>
                  Event Created Date
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "14px", padding: "0 16px" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {eventData.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    height: "48px",
                    backgroundColor: index % 2 === 0 ? "rgba(238,238,238,0.25)" : "white",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                  }}
                >
                  <TableCell sx={{ padding: "0 16px", height: "48px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar src={row.avatar} alt={row.name} sx={{ width: 28, height: 28 }} />
                      <Typography variant="body2" sx={{ fontSize: "14px", lineHeight: "48px" }}>
                        {row.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ padding: "0 16px", height: "48px", lineHeight: "48px" }}>
                    {row.country}
                  </TableCell>
                  <TableCell sx={{ padding: "0 16px", height: "48px", lineHeight: "48px" }}>
                    {row.accountCreatedDate}
                  </TableCell>
                  <TableCell sx={{ padding: "0 16px", height: "48px", lineHeight: "48px" }}>
                    {row.eventCreatedDate}
                  </TableCell>
                  <TableCell sx={{ padding: "0 16px", height: "48px" }}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <IconButton size="small" onClick={() => handleEdit(row.id)}>
                        <EditIcon sx={{ width: 16, height: 16 }} />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleDelete(row.id)}>
                        <DeleteIcon sx={{ width: 16, height: 16 }} />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <CardActions
          sx={{
            height: "52px",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            padding: "0 24px",
            backgroundColor: "white",
            gap: 1,
          }}
        >
          <IconButton
            onClick={handleAdd}
            sx={{
              width: "30px",
              height: "30px",
              border: "1.5px solid red",
              color: "red",
              backgroundColor: "white",
              boxShadow: "none",
              "&:hover": { backgroundColor: "#ffe6e6" },
            }}
          >
            <AddIcon sx={{ fontSize: "18px" }} />
          </IconButton>

          <Button
            variant="contained"
            onClick={handleSave}
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
        </CardActions>
      </Card>
    </Box>
  );
};

export default Event;
