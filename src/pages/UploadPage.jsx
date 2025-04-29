import CloudUpload from "@mui/icons-material/CloudUpload";
import Sync from "@mui/icons-material/Sync";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  LinearProgress,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";

const UploadPage = () => {
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [timeRange, setTimeRange] = useState("Monthly");
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const performanceData = {
    totalIssues: 2478,
    issuesSolved: 68,
    issuesUnsolved: 32,
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!["image/png", "image/jpeg", "image/svg+xml"].includes(file.type)) {
      alert("Only PNG, JPEG, SVG allowed.");
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      alert("File must be less than 3MB.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange({ target: { files: [file] } });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleReset = () => {
    setUploadedImage(null);
  };

  return (
    <Stack spacing={2} sx={{ width: 431, height: 663.5, ml: "10px" }}>
      {/* Your Photo Section */}
      <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant="subtitle1" fontWeight="600" mb={1}>
          Your Photo
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 2 }}>
          <Box
            sx={{
              width: 103,
              height: 119,
              bgcolor: "#f54848",
              borderRadius: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {uploadedImage && (
              <img
                src={uploadedImage}
                alt="uploaded"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
            <IconButton
              onClick={handleReset}
              sx={{
                bgcolor: "transparent",
                border: "0.9px solid white",
                position: "absolute",
                bottom: 10,
              }}
            >
              <Sync sx={{ color: "white", fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Upload Box */}
        <Box
          onClick={handleUploadClick}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          sx={{
            border: "1.39px dashed #131313",
            borderRadius: 1.5,
            p: 3,
            mx: 2,
            my: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <CloudUpload sx={{ fontSize: 37, color: "#131313", mb: 1 }} />
          <Typography variant="body2" align="center">
            <Box
              component="span"
              sx={{
                color: "#f54848",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Click to upload
            </Box>
            <Box component="span" sx={{ color: "#3c3d51" }}>
              {" "}
              or drag and drop
            </Box>
          </Typography>
          <Typography variant="caption" sx={{ color: "#7f8a95", mt: 1 }}>
            SVG, PNG, JPEG{" "}
            <Box component="span" sx={{ fontStyle: "italic" }}>
              (not more than 3mb)
            </Box>
          </Typography>
          <input
            ref={fileInputRef}
            type="file"
            hidden
            onChange={handleFileChange}
            accept=".png,.jpeg,.jpg,.svg"
          />
        </Box>
      </Paper>

      {/* Your Performance Status Section */}
      <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="subtitle1" fontWeight="600">
            Your Performance Status
          </Typography>
          <Select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            size="small"
            sx={{
              bgcolor: "#f0f4f9",
              borderRadius: 5,
              height: 28,
              fontSize: 14,
              "& .MuiSelect-select": { py: 0.5, pr: 2 },
            }}
          >
            <MenuItem value="Monthly">Monthly</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Daily">Daily</MenuItem>
          </Select>
        </Box>
        <Typography
          variant="body2"
          sx={{ color: "#3c3d51", fontWeight: 500, fontSize: 11.1, mb: 1 }}
        >
          Total Issues : {performanceData.totalIssues}/month
        </Typography>

        <Box sx={{ position: "relative", my: 2 }}>
          <LinearProgress
            variant="determinate"
            value={performanceData.issuesSolved}
            sx={{
              height: 9,
              bgcolor: "#eceef1",
              borderRadius: 5,
              "& .MuiLinearProgress-bar": {
                bgcolor: "#000000",
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: -8.5,
              left: `${performanceData.issuesSolved - 3}%`,
              width: 26,
              height: 26,
              bgcolor: "white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 6px rgba(205, 55, 114, 0.31)",
            }}
          >
            <Box
              sx={{
                width: 16,
                height: 16,
                bgcolor: "#eceef1",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 6, mb: 3 }}>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight="600"
              sx={{ color: "#3c3d51" }}
            >
              {performanceData.issuesSolved}%
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Box sx={{ width: 29, height: 4, bgcolor: "black" }} />
              <Typography
                variant="caption"
                sx={{ color: "#7f8a95", fontSize: 8.3 }}
              >
                Issue Solved
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight="600"
              sx={{ color: "#3c3d51" }}
            >
              {performanceData.issuesUnsolved}%
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <Box sx={{ width: 29, height: 4, bgcolor: "#f54848" }} />
              <Typography
                variant="caption"
                sx={{ color: "#7f8a95", fontSize: 8.3 }}
              >
                Issue unsolved
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{ color: "#3c3d51", fontWeight: 500, fontSize: 11.1, mb: 1 }}
            >
              Estimated Report Processing
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                />
              }
              label={
                <Typography
                  variant="caption"
                  sx={{ color: "#3c3d51", fontSize: 9.7 }}
                >
                  Send your report in your email ID
                </Typography>
              }
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "99.25px",
              height: "33.88px",
              bgcolor: "#f54848",
              borderRadius: 1,
              textTransform: "none",
              fontSize: "9.72px",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#d43c3c",
              },
            }}
          >
            View Status
          </Button>
        </Box>
      </Paper>
    </Stack>
  );
};

export default UploadPage;
