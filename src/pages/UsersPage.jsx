import {
  Autocomplete,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Checkbox,
  IconButton,
  LinearProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

import UserChart from "./UserChart";
import frame1 from "../assets/Images/frame-1.png";
import frame2 from "../assets/Images/frame-2.png";
import frame3 from "../assets/Images/frame-3.png";
import avatar0 from "../assets/Images/avatar0.png";
import avatar1 from "../assets/Images/avatar1.png";
import avatar2 from "../assets/Images/avatar2.png";
import avatar3 from "../assets/Images/avatar3.png";
import avatar4 from "../assets/Images/avatar4.png";

const userData = [
  {
    id: 1,
    name: "Jennifer Summers",
    email: "Daniarose@gmail.com",
    country: "United States",
    avatar: avatar0,
    loginTime: ["15 Jun - 15 Sep", "03 May - 20 Oct"],
    status: [
      { value: 20, color: "#f54848" },
      { value: 75, color: "#00d92f" },
    ],
  },
  {
    id: 2,
    name: "Danya Garcia",
    email: "Daniarose2@gmail.com",
    country: "United States",
    avatar: avatar1,
    loginTime: ["15 Jun - 15 Sep", "03 May - 20 Oct"],
    status: [
      { value: 20, color: "#f54848" },
      { value: 75, color: "#00d92f" },
    ],
  },
  {
    id: 3,
    name: "Jordan Stevenson",
    email: "Daniarose3@gmail.com",
    country: "Brazil",
    avatar: avatar2,
    loginTime: ["15 Jun - 15 Sep", "03 May - 20 Oct"],
    status: [
      { value: 20, color: "#f54848" },
      { value: 75, color: "#00d92f" },
    ],
  },
  {
    id: 4,
    name: "Danya Garcia",
    email: "Daniarose4@gmail.com",
    country: "United States",
    avatar: avatar3,
    loginTime: ["15 Jun - 15 Sep", "03 May - 20 Oct"],
    status: [
      { value: 20, color: "#f54848" },
      { value: 75, color: "#00d92f" },
    ],
  },
  {
    id: 5,
    name: "Danya Garcia",
    email: "Daniarose5@gmail.com",
    country: "India",
    avatar: avatar4,
    loginTime: ["15 Jun - 15 Sep", "03 May - 20 Oct"],
    status: [
      { value: 20, color: "#f54848" },
      { value: 75, color: "#00d92f" },
    ],
  },
];

const UsersPage = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery("(max-width:1123px)");
  const isSmall = useMediaQuery("(max-width:548px)");
  const [selected, setSelected] = useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(userData.map((u) => u.id));
    } else {
      setSelected([]);
    }
  };

  const handleClick = (event, id) => {
    event.stopPropagation();
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isSelected = (id) => selected.includes(id);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1123px",
          minHeight: "548px",
          mx: "auto",
          p: { xs: 1.5, md: 2 },
          overflow: "auto",
        }}
      >
        <Paper sx={{ borderRadius: 2, height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isSmall ? "column" : "row",
              alignItems: isSmall ? "flex-start" : "center",
              justifyContent: "space-between",
              gap: 2,
              p: 2,
            }}
          >
            <Button
              variant="outlined"
              size="small"
              startIcon={<IosShareIcon />}
              sx={{
                borderColor: "rgba(138, 141, 147, 0.5)",
                color: "#8a8d93",
                textTransform: "uppercase",
                fontWeight: 500,
                fontSize: "11.9px",
              }}
            >
              Export
            </Button>

            <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", width: isSmall ? "100%" : "auto" }}>
              <Autocomplete
                freeSolo
                options={[]} // Add search suggestions if needed
                sx={{ width: isSmall ? "100%" : 250 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search Invoice"
                    size="small"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <SearchIcon fontSize="small" sx={{ mr: 1, color: "rgba(58, 53, 65, 0.38)" }} />
                      ),
                    }}
                  />
                )}
              />
              {!isSmall && (
                <AvatarGroup max={3} sx={{ "& .MuiAvatar-root": { width: 26, height: 26, border: "1.3px solid white" } }}>
                  <Avatar src={frame1} />
                  <Avatar src={frame2} />
                  <Avatar src={frame3} />
                </AvatarGroup>
              )}
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Table */}
          <TableContainer sx={{ flexGrow: 1 }}>
            <Table size={isSmall ? "small" : "medium"}>
              <TableHead sx={{ backgroundColor: "#f9fafc" }}>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      indeterminate={selected.length > 0 && selected.length < userData.length}
                      checked={selected.length === userData.length}
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                  {["USER", "EMAIL", "COUNTRY", "LOGIN TIME", "STATUS"].map((col) => (
                    <TableCell key={col}>
                      <Typography variant="subtitle2" fontWeight={600} fontSize="10.2px">
                        {col}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      <Typography variant="body2" color="text.secondary">
                        No users found.
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  userData.map((user) => {
                    const isItemSelected = isSelected(user.id);
                    return (
                      <TableRow
                        hover
                        key={user.id}
                        onClick={(event) => handleClick(event, user.id)}
                        selected={isItemSelected}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} />
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" spacing={1.5} alignItems="center">
                            <Avatar src={user.avatar} sx={{ width: 28, height: 28 }} />
                            <Typography fontSize="11.9px" fontWeight={500}>
                              {user.name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography variant="caption" color="text.secondary" fontSize="10.2px">
                            {user.email}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography fontSize="13.6px">{user.country}</Typography>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={0.5}>
                            {user.loginTime.map((time, index) => (
                              <Typography key={index} fontSize="13.6px">
                                {time}
                              </Typography>
                            ))}
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={1}>
                            {user.status.map((status, index) => (
                              <Stack key={index} direction="row" spacing={2} alignItems="center">
                                <Box sx={{ width: 85, position: "relative" }}>
                                  <LinearProgress
                                    variant="determinate"
                                    value={status.value}
                                    sx={{
                                      height: 5,
                                      backgroundColor: "#dfdfe7",
                                      border: "0.85px solid #f5f6fa",
                                      "& .MuiLinearProgress-bar": {
                                        backgroundColor: status.color,
                                      },
                                    }}
                                  />
                                </Box>
                                <Typography variant="caption" fontSize="11.9px" color="text.secondary">
                                  {status.value}%
                                </Typography>
                              </Stack>
                            ))}
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* Chart Component */}
      <UserChart />
    </>
  );
};

export default UsersPage;
