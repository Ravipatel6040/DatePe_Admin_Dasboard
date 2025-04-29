import React, { useState } from "react";
import StartCard from "./StartCard";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Fab,
  useTheme,
  useMediaQuery
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Image imports
import ellipse32 from "../assets/Images/ellipse-3-2.png";
import ellipse33 from "../assets/Images/ellipse-3-3.png";
import ellipse34 from "../assets/Images/ellipse-3-4.png";
import ellipse3 from "../assets/Images/ellipse-3.png";
import image from "../assets/Images/image.png";

const GiftsPage = () => {
  const [stickers, setStickers] = useState([
    { id: 1, name: "Smiley face", avatar: ellipse3, category: "Premium", createdDate: "06-03-2024", price: 3.0 },
    { id: 2, name: "Heart", avatar: ellipse32, category: "Free", createdDate: "06-03-2024", price: 0.0 },
    { id: 3, name: "Birthday Cake", avatar: ellipse33, category: "Free", createdDate: "18-03-2024", price: 0.0 },
    { id: 4, name: "Thumb Up", avatar: image, category: "Free", createdDate: "06-03-2024", price: 0.0 },
    { id: 5, name: "Flowers", avatar: ellipse34, category: "Premium", createdDate: "18-03-2024", price: 7.0 },
    { id: 6, name: "Star", avatar: ellipse3, category: "Premium", createdDate: "20-03-2024", price: 2.5 },
    { id: 7, name: "Gift Box", avatar: ellipse32, category: "Free", createdDate: "21-03-2024", price: 0.0 },
    { id: 8, name: "Cheers", avatar: ellipse33, category: "Free", createdDate: "22-03-2024", price: 0.0 },
    { id: 9, name: "Clap", avatar: ellipse34, category: "Premium", createdDate: "23-03-2024", price: 1.5 },
    { id: 10, name: "Rose", avatar: ellipse3, category: "Premium", createdDate: "24-03-2024", price: 2.0 },
    { id: 11, name: "Congrats", avatar: ellipse32, category: "Free", createdDate: "25-03-2024", price: 0.0 },
    { id: 12, name: "Love You", avatar: ellipse33, category: "Premium", createdDate: "26-03-2024", price: 3.5 },
    { id: 13, name: "Wow", avatar: ellipse34, category: "Free", createdDate: "27-03-2024", price: 0.0 },
    { id: 14, name: "Peace", avatar: ellipse3, category: "Free", createdDate: "28-03-2024", price: 0.0 },
    { id: 15, name: "Fire", avatar: image, category: "Premium", createdDate: "29-03-2024", price: 4.0 }
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAddSticker = () => {
    const maxId = stickers.reduce((max, item) => Math.max(max, item.id), 0);
    const newSticker = {
      id: maxId + 1,
      name: "New Sticker",
      avatar: ellipse3,
      category: "Free",
      createdDate: new Date().toLocaleDateString("en-GB"),
      price: 0.0
    };
    setStickers([...stickers, newSticker]);
  };

  const handleDelete = (id) => {
    setStickers(stickers.filter((s) => s.id !== id));
  };

  return (
    <>
      <StartCard />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", px: 2.5, pb: 4 }}>
        <Card
          variant="outlined"
          sx={{
            width: "100%",
            maxWidth: "1035px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            position: "relative"
          }}
        >
          <CardHeader
            title="Gift / Stickers Management"
            sx={{
              height: "48px",
              padding: "0 24px",
              backgroundColor: "rgba(238, 238, 238, 0.5)",
              "& .MuiCardHeader-title": {
                fontWeight: 600,
                fontSize: "16px",
                fontFamily: "Source Sans Pro, Helvetica"
              }
            }}
          />
          <TableContainer>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Sticker Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Created Date</TableCell>
                  <TableCell>Price ($)</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stickers.map((sticker, index) => (
                  <TableRow
                    key={sticker.id}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "rgba(238,238,238,0.25)" : "white",
                      "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" }
                    }}
                  >
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <img
                          src={sticker.avatar}
                          alt={sticker.name}
                          style={{
                            width: isMobile ? 24 : 28,
                            height: isMobile ? 24 : 28,
                            borderRadius: "50%"
                          }}
                        />
                        <Typography variant="body2">{sticker.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{sticker.category}</TableCell>
                    <TableCell>{sticker.createdDate}</TableCell>
                    <TableCell>{sticker.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <IconButton size="small">
                          <EditIcon sx={{ width: 16, height: 16 }} />
                        </IconButton>
                        <IconButton size="small" onClick={() => handleDelete(sticker.id)}>
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
              "&:hover": { backgroundColor: "#ffe6e6" }
            }}
            onClick={handleAddSticker}
          >
            <AddIcon sx={{ fontSize: "18px" }} />
          </Fab>

          <Box
            sx={{
              height: "52px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "0 5px"
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                borderRadius: "8px",
                padding: "7.5px 16px",
                textTransform: "none",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" }
              }}
            >
              <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
                Save
              </Typography>
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default GiftsPage;
