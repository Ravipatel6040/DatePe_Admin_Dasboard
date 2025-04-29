import React, { useState } from "react";
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
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
} from "@mui/material";

import avatarImage1 from "../assets/Images/ellipse-30.png";
import avatarImage2 from "../assets/Images/ellipse-31.png";
import avatarImage3 from "../assets/Images/ellipse-32.png";

const Matches = () => {
  const [matchesData, setMatchesData] = useState([
    {
      id: 1,
      name: "Michael Johnson",
      country: "United States",
      accountCreatedDate: "02-11-2021",
      matchCreatedDate: "02-11-2021",
      avatar: avatarImage1,
    },
    {
      id: 2,
      name: "Daniel Davis",
      country: "India",
      accountCreatedDate: "18-11-2021",
      matchCreatedDate: "18-11-2021",
      avatar: avatarImage2,
    },
    {
      id: 3,
      name: "Jennifer Taylor",
      country: "Brazil",
      accountCreatedDate: "30-12-2021",
      matchCreatedDate: "30-12-2021",
      avatar: avatarImage3,
    },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit item with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete item with id: ${id}`);
  };

  const handleSave = () => {
    console.log("Save changes");
  };

  const handleAddRow = () => {
    const maxId = matchesData.reduce((max, item) => Math.max(max, item.id), 0);
    const newRow = {
      id: maxId + 1,
      name: "New Match",
      avatar: avatarImage1,
      country: "Unknown",
      accountCreatedDate: "01-01-2022",
      matchCreatedDate: "01-01-2022",
    };
    setMatchesData([...matchesData, newRow]);
  };

  const columns = [
    { id: "name", label: "Name" },
    { id: "country", label: "Country" },
    { id: "accountCreatedDate", label: "Account Created Date" },
    { id: "matchCreatedDate", label: "Match Created Date" },
    { id: "actions", label: "Actions" },
  ];

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
          title="Matches"
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
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      height: "48px",
                      padding: "0 16px",
                      fontWeight: 600,
                      fontSize: "14px",
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
              {matchesData.map((row, index) => (
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
                    {row.matchCreatedDate}
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
        </Box>
      </Card>
    </Box>
  );
};

export default Matches;
