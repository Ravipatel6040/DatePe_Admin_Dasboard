import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatCards from "./components/Card";
import WeeklyUserActivity from "./components/WeeklyUserActivity";
import ActiveUsers from "./components/ActiveUsers";
// import AbuseReportsChart from "./components/AbuseReportsChart"; // Removed
import UsersPage from "./pages/UsersPage";
import AbuseReportsPage from "./pages/AbuseReportsPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import ManagementPage from "./pages/ManagementPage";
import GiftsPage from "./pages/GiftsPage";
import SettingsPage from "./pages/SettingsPage";

function Dashboard() {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, md: 3 },
      }}
    >
      <StatCards />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr" }, // Full width
          gap: 3,
        }}
      >
        <WeeklyUserActivity />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr" }, // Adjusted to 1 column
          gap: 3,
        }}
      >
        <ActiveUsers />
        {/* <AbuseReportsChart /> removed */}
      </Box>
    </Box>
  );
}

function App() {
  const location = useLocation();

  const noBgPages = [
    "/users",
    "/subscriptions",
    "/settings",
    "/management",
    "/abuse-reports",
    "/gifts",
  ];
  const isNoBgPage = noBgPages.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          ...(isNoBgPage ? {} : { bgcolor: "#DFEAF2" }),
        }}
      >
        <Sidebar />
        <Box
          sx={{
            marginLeft: { xs: 0, md: "220px" },
            flexGrow: 1,
            p: { xs: 2, md: 3 },
            width: "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/abuse-reports" element={<AbuseReportsPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/gifts" element={<GiftsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
