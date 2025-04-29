import React, { useState } from "react";
import MoreVert from "@mui/icons-material/MoreVert";
import ShareOutlined from "@mui/icons-material/ShareOutlined";
import AbuseReportsChart from "../pages/AbuseReportsChart";
import Widget from "../pages/Widget";

import {
  Autocomplete,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Table as MUITable,
  Paper,
  Stack,
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

import avatar0 from "../assets/Images/avatar0.png";
import avatar1 from "../assets/Images/avatar1.png";
import avatar2 from "../assets/Images/avatar2.png";
import avatar3 from "../assets/Images/avatar3.png";
import avatar4 from "../assets/Images/avatar4.png";
import frame1 from "../assets/Images/frame-1.png";
import frame2 from "../assets/Images/frame-2.png";
import frame3 from "../assets/Images/frame-3.png";

const userData = [
  {
    id: 1,
    name: "Danya Garcia",
    email: "Daniarose@gmail.com",
    country: "United States",
    loginTimes: ["15 Jun - 15 Sep", "03 May - 20 Oct"],
    status: [
      { value: 20, color: "#f54848" },
      { value: 75, color: "#00d92f" },
    ],
    avatar: avatar0,
  },
  {
    id: 2,
    name: "Ravi Patel",
    email: "ravi@example.com",
    country: "United States",
    loginTimes: ["10 Jan - 15 Mar", "22 Apr - 01 May"],
    status: [
      { value: 50, color: "#f54848" },
      { value: 90, color: "#00d92f" },
    ],
    avatar: avatar1,
  },
  {
    id: 3,
    name: "Maria Lopez",
    email: "maria.lopez@gmail.com",
    country: "Brazil",
    loginTimes: ["10 Jul - 15 Sep", "03 Oct - 20 Nov"],
    status: [
      { value: 30, color: "#f54848" },
      { value: 60, color: "#00d92f" },
    ],
    avatar: avatar2,
  },
  {
    id: 4,
    name: "Liam Smith",
    email: "liam.smith@yahoo.com",
    country: "Canada",
    loginTimes: ["05 Feb - 15 Apr", "10 May - 25 Jun"],
    status: [
      { value: 70, color: "#00d92f" },
      { value: 85, color: "#f54848" },
    ],
    avatar: avatar3,
  },
  {
    id: 5,
    name: "Anjali Mehta",
    email: "anjali.mehta@india.com",
    country: "India",
    loginTimes: ["01 Mar - 10 Apr", "15 May - 20 Jun"],
    status: [
      { value: 25, color: "#f54848" },
      { value: 95, color: "#00d92f" },
    ],
    avatar: avatar4,
  },
];

const AbuseReportsPage = () => {
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filteredUsers = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Country", "Login Times"];
    const rows = filteredUsers.map((user) => [
      user.name,
      user.email,
      user.country,
      user.loginTimes.join(" | "),
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "abuse_report_users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ mt: { xs: 2, sm: 3 }, px: { xs: 1, sm: 2, md: 3 } }}>
      <Paper
        sx={{
          borderRadius: "8px",
          overflow: "hidden",
          width: "100%",
          maxWidth: "1050px",
          mx: "auto",
          mb: 4,
        }}
      >
        <Box
          sx={{
            p: { xs: 1.5, sm: 2 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<ShareOutlined />}
            onClick={exportToCSV}
            sx={{
              textTransform: "uppercase",
              color: "#8a8d93",
              borderColor: "#8a8d9380",
              fontSize: "12px",
              fontWeight: 500,
              px: 2,
              py: 0.7,
            }}
          >
            Export
          </Button>

          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            justifyContent="flex-end"
            sx={{ width: "100%", maxWidth: { sm: "auto" } }}
          >
            <Autocomplete
              freeSolo
              inputValue={search}
              onInputChange={(e, newInputValue) => setSearch(newInputValue)}
              options={[]}
              sx={{ width: { xs: "100%", sm: 250 } }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search Invoice"
                  variant="outlined"
                  size="small"
                  sx={{ "& .MuiOutlinedInput-root": { fontSize: "13px" } }}
                />
              )}
            />

            <AvatarGroup
              max={3}
              sx={{
                display: { xs: "none", sm: "flex" }, // Hide on mobile
                "& .MuiAvatar-root": {
                  width: 26,
                  height: 26,
                  border: "1.3px solid white",
                },
              }}
            >
              <Avatar src={frame1} />
              <Avatar src={frame2} />
              <Avatar src={frame3} />
            </AvatarGroup>

            <MoreVert sx={{ color: "#3a3541de", cursor: "pointer" }} />
          </Stack>
        </Box>

        <TableContainer>
          <MUITable size="small">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f9fafc" }}>
                <TableCell sx={{ fontWeight: 600, fontSize: "11px" }}>
                  USER
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: "11px",
                    textAlign: isMobile ? "left" : "center", // Adjust for mobile
                  }}
                >
                  EMAIL
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: "11px",
                    textAlign: isMobile ? "left" : "center", // Adjust for mobile
                  }}
                >
                  COUNTRY
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: "11px",
                    textAlign: isMobile ? "left" : "center", // Adjust for mobile
                  }}
                >
                  LOGIN TIME
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "11px" }}>
                  STATUS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow
                  key={user.id}
                  hover
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                      cursor: "pointer",
                    },
                  }}
                >
                  <TableCell
                    sx={{ display: "flex", alignItems: "center", gap: 1.3 }}
                  >
                    <Avatar src={user.avatar} sx={{ width: 28, height: 28 }} />
                    <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                      {user.name}
                    </Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      fontSize: "11px",
                      color: "#3a3541ad",
                      textAlign: isMobile ? "left" : "center", // Adjust for mobile
                    }}
                  >
                    {user.email}
                  </TableCell>

                  <TableCell
                    sx={{
                      fontSize: "13px",
                      color: "#3a3541de",
                      textAlign: isMobile ? "left" : "center", // Adjust for mobile
                    }}
                  >
                    {user.country}
                  </TableCell>

                  <TableCell
                    sx={{ py: 1, textAlign: isMobile ? "left" : "center" }}
                  >
                    <Stack spacing={0.5}>
                      {user.loginTimes.map((time, index) => (
                        <Typography key={index} sx={{ fontSize: "13px" }}>
                          {time}
                        </Typography>
                      ))}
                    </Stack>
                  </TableCell>

                  <TableCell sx={{ py: 1 }}>
                    <Stack spacing={0.5}>
                      {user.status.map((status, index) => (
                        <Stack
                          key={index}
                          direction="row"
                          spacing={2}
                          alignItems="center"
                          sx={{ py: 0.5 }}
                        >
                          <Box
                            sx={{ position: "relative", width: 85, height: 5 }}
                          >
                            <Box
                              sx={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#dfdfe7",
                                border: "1px solid #f5f6fa",
                                borderRadius: "1px",
                              }}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: `${status.value}%`,
                                height: "100%",
                                backgroundColor: status.color,
                                borderRadius: "1px",
                              }}
                            />
                          </Box>
                          <Typography
                            sx={{ fontSize: "12px", color: "#3a3541ad" }}
                          >
                            {status.value}%
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </MUITable>
        </TableContainer>
      </Paper>

      {/* Charts and Widget Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mb: 4,
        }}
      >
        <Box sx={{ flex: 2 }}>
          <AbuseReportsChart />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Widget />
        </Box>
      </Box>
    </Box>
  );
};

export default AbuseReportsPage;
