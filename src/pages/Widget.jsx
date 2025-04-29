import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

const Widget = () => {
  const stateData = [
    { code: "US", value: "120K", width: "100%" },
    { code: "BZ", value: "80K", width: "75%" },
    { code: "IN", value: "70K", width: "65%" },
    { code: "OTHERS", value: "50K", width: "45%" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" }, // Right side on desktop
        width: "100%",
        mt: { xs: 3, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "320px" },
          p: { xs: 2, sm: 3 },
          borderRadius: 4,
        }}
      >
        <Box sx={{ pb: 1 }}>
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={{ xs: "1rem", sm: "1.25rem" }}
          >
            Top states
          </Typography>
        </Box>

        <Stack spacing={1.2} width="100%">
          {stateData.map((state, index) => (
            <Box
              key={index}
              sx={{
                width: state.width,
                background:
                  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(245,72,72,1) 100%)",
                borderRadius: 1,
                position: "relative",
                py: 1,
                px: 2,
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={600}
                color="white"
                fontSize={{ xs: "0.75rem", sm: "0.875rem" }}
              >
                {state.code}
              </Typography>
              <Typography
                variant="caption"
                fontWeight={500}
                sx={{
                  position: "absolute",
                  top: "6px",
                  right: "8px",
                  fontSize: { xs: "0.625rem", sm: "0.75rem" },
                  color: "#fff",
                }}
              >
                {state.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Card>
    </Box>
  );
};

export default Widget;
