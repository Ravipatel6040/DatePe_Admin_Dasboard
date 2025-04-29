import React from "react";
import RecentActivity from "./RecentActivity";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ✅ Custom Tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "10px 12px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>{label}</p>
        {payload.map((entry, index) => (
          <div
            key={`item-${index}`}
            style={{ display: "flex", alignItems: "center", marginTop: 4 }}
          >
            <span
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: entry.color,
                marginRight: 6,
              }}
            />
            <span style={{ color: "#555", fontSize: "0.9rem" }}>
              {entry.name}: {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const WeeklyActivity = () => {
  const chartData = [
    { day: "Sat", subscribers: 470, events: 240 },
    { day: "Sun", subscribers: 340, events: 120 },
    { day: "Mon", subscribers: 320, events: 260 },
    { day: "Tue", subscribers: 470, events: 370 },
    { day: "Wed", subscribers: 150, events: 240 },
    { day: "Thu", subscribers: 380, events: 240 },
    { day: "Fri", subscribers: 390, events: 330 },
  ];

  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center",
        
      }}
    >
      {/* Chart Section */}
      <div
        style={{
          backgroundColor: "#f9fafb",
          padding: "16px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "650px",
          height: "376px",
          position: "relative",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          flex: "1 1 60%",
        }}
      >
        {/* Legend above title */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "16px",
            paddingRight: "24px",
            paddingTop: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                display: "inline-block",
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: "#333333",
              }}
            ></span>
            <span style={{ fontSize: "0.950rem", color: "#555" }}>
              Subscribers
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                display: "inline-block",
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: "#FF6B6B",
              }}
            ></span>
            <span style={{ fontSize: "0.950rem", color: "#555" }}>Events</span>
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "16px",
            position: "absolute",
            left: "24px",
            top: "16px",
            color: "#333",
          }}
        >
          Weekly User Activity
        </h1>

        <div
          style={{
            height: "100%",
            width: "100%",
            paddingTop: "48px",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: isSmallScreen ? 10 : 30,
                left: 10,
                bottom: 10,
              }}
              barCategoryGap={isSmallScreen ? 30 : 50}
              barGap={isSmallScreen ? 5 : 10}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} />
              <XAxis dataKey="day" stroke="#999" tickMargin={10} />
              <YAxis
                domain={[0, 500]}
                stroke="#999"
                tickMargin={8}
                ticks={[0, 100, 200, 300, 400, 500]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="subscribers"
                fill="#333333"
                radius={[10, 10, 0, 0]}
                barSize={isSmallScreen ? 10 : 15}
                name="Subscribers"
              />
              <Bar
                dataKey="events"
                fill="#FF6B6B"
                radius={[10, 10, 0, 0]}
                barSize={isSmallScreen ? 10 : 15}
                name="Events"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Move Recent Activity to the right */}
      <div
        style={{
          flex: "1 1 35%",
          maxWidth: "350px",
          height: "376px",
        }}
      >
        <RecentActivity />
      </div>
    </div>
  );
};

export default WeeklyActivity;
