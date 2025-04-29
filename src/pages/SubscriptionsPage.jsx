import BoltIcon from "@mui/icons-material/Bolt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const paymentMethods = [
  {
    id: "visa",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
  },
  {
    id: "mastercard",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    id: "paypal",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },
];

const membershipOptions = [
  {
    id: "monthly",
    title: "Pay Monthly",
    price: "$20 / Month Per Member",
    selected: false,
  },
  {
    id: "annually",
    title: "Pay Annually",
    price: "$18 / Month Per Member",
    discount: "Save 20%",
    selected: true,
  },
];

const addOns = [
  {
    id: "ai-accelerator",
    title: "AI Particle Accelerator",
    price: "$20,000,000 / Month Per Member",
    description: "Unlimited use of AI of Q&A, Autofill, writer, and more",
    selected: false,
  },
];

const countries = [
  {
    code: "US",
    name: "United States",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    code: "UK",
    name: "United Kingdom",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    code: "IN",
    name: "India",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    code: "JP",
    name: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
  },
];

const SubscriptionPage = () => {
  const [name, setName] = useState("Jhon Smith");
  const [selectedCountry, setSelectedCountry] = useState("US");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper
      elevation={0}
      sx={{
        width: isSmallScreen ? "100%" : isMediumScreen ? "95%" : 900,
        p: isSmallScreen ? 2 : 3,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" color="text.secondary" fontWeight={600}>
          Subscriptions
        </Typography>
        <CloseIcon color="action" />
      </Box>

      {/* Upgrade info */}
      <Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="#b1b1b1"
          gutterBottom
        >
          Upgrade to a Pro Membership
        </Typography>
        <Typography variant="body2" color="#84949d">
          Get all access and an extra 20% off when you subscribe annually
        </Typography>
      </Box>

      {/* Two Column Layout */}
      <Stack
        direction={isMediumScreen ? "column" : "row"}
        spacing={2.5}
      >
        {/* LEFT COLUMN */}
        <Stack spacing={3} width="100%">
          <Box>
            <Typography
              variant="body2"
              color="#606060"
              fontWeight={500}
              gutterBottom
            >
              Billed to
            </Typography>
            <Stack spacing={1}>
              <TextField
                fullWidth
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                InputProps={{
                  sx: {
                    bgcolor: "#fcfcfc",
                    border: "1px solid #efefef",
                  },
                }}
              />
              <TextField
                fullWidth
                size="small"
                placeholder="Card Number"
                variant="outlined"
                InputProps={{
                  sx: {
                    bgcolor: "#fcfcfc",
                    border: "1px solid #efefef",
                  },
                  endAdornment: (
                    <Stack direction="row" spacing={0.5}>
                      {paymentMethods.map((method) => (
                        <Box
                          key={method.id}
                          sx={{
                            width: 24,
                            height: 16,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "0.7px solid #c5cdcf",
                            borderRadius: "2px",
                            bgcolor: "white",
                          }}
                        >
                          <Box
                            component="img"
                            src={method.image}
                            alt={method.id}
                            sx={{ height: 12 }}
                          />
                        </Box>
                      ))}
                    </Stack>
                  ),
                }}
              />
              <Stack direction="row" spacing={1.5}>
                <TextField
                  size="small"
                  placeholder="MM / YY"
                  variant="outlined"
                  sx={{ width: "50%" }}
                  InputProps={{
                    sx: {
                      bgcolor: "#fcfcfc",
                      border: "1px solid #efefef",
                    },
                  }}
                />
                <TextField
                  size="small"
                  placeholder="CVV"
                  variant="outlined"
                  sx={{ width: "50%" }}
                  InputProps={{
                    sx: {
                      bgcolor: "#fcfcfc",
                      border: "1px solid #efefef",
                    },
                  }}
                />
              </Stack>
            </Stack>
          </Box>

          {/* Country Selector */}
          <Box>
            <Typography
              variant="body2"
              color="#606060"
              fontWeight={500}
              gutterBottom
              
            >
              Country
            </Typography>
            <Stack spacing={1}>
              <Select
                fullWidth
                size="small"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                IconComponent={KeyboardArrowDownIcon}
                displayEmpty
                sx={{
                  bgcolor: "#fcfcfc",
                  border: "1px solid #efefef",
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  },
                }}
              >
                {countries.map((country) => (
                  <MenuItem key={country.code} value={country.code}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <img
                        src={country.flag}
                        alt={country.name}
                        style={{ width: 20, height: 14 }}
                      />
                      {country.name}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
              <TextField
                fullWidth
                size="small"
                placeholder="Zip Code"
                variant="outlined"
                InputProps={{
                  sx: {
                    bgcolor: "#fcfcfc",
                    border: "1px solid #efefef",
                  },
                }}
              />
            </Stack>
          </Box>

          <Typography variant="body2" color="#5e6b73">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>

          <Typography
            variant="h6"
            fontWeight="bold"
            color="rgba(0, 0, 0, 0.7)"
            sx={{ mt: 4 }}
          >
            $20.00 / Month / User
          </Typography>
        </Stack>

        {/* RIGHT COLUMN */}
        <Stack spacing={3} width="100%">
          {/* Membership Type */}
          <Box>
            <Typography
              variant="body2"
              color="#606060"
              fontWeight={500}
              gutterBottom
            >
              Membership Type
            </Typography>
            <RadioGroup defaultValue="annually">
              {membershipOptions.map((option) => (
                <FormControlLabel
                  key={option.id}
                  value={option.id}
                  control={
                    <Radio
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      sx={{ color: "#b1b1b180" }}
                    />
                  }
                  label={
                    <Paper
                      elevation={0}
                      sx={{
                        width: "100%",
                        p: 1.5,
                        bgcolor: "#fcfcfc",
                        border: "1px solid",
                        borderColor: option.selected
                          ? "#b1b1b180"
                          : "#efefef",
                        borderRadius: 1,
                        display: "flex",
                        flexDirection: "column",
                        mb: 1,
                      }}
                    >
                      <Box display="flex" justifyContent="space-between">
                        <Box>
                          <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            color="rgba(26, 37, 43, 0.7)"
                          >
                            {option.title}
                          </Typography>
                          <Typography variant="body2" color="#8a9398">
                            {option.price}
                          </Typography>
                        </Box>
                        {option.discount && (
                          <Typography
                            variant="caption"
                            fontWeight={600}
                            color="#181819"
                          >
                            {option.discount}
                          </Typography>
                        )}
                      </Box>
                    </Paper>
                  }
                  sx={{ alignItems: "flex-start", m: 0 }}
                />
              ))}
            </RadioGroup>
          </Box>

          {/* Add-ons */}
          <Box>
            <Typography
              variant="body2"
              color="#606060"
              fontWeight={500}
              gutterBottom
            >
              Add ons
            </Typography>
            <Stack spacing={1.5}>
              {addOns.map((addon) => (
                <FormControlLabel
                  key={addon.id}
                  control={
                    <Radio
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleOutlineIcon />}
                    />
                  }
                  label={
                    <Paper
                      elevation={0}
                      sx={{
                        p: 1.5,
                        bgcolor: "#fcfcfc",
                        border: "1px solid #efefef",
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        color="rgba(26, 37, 43, 0.7)"
                        gutterBottom
                      >
                        {addon.title}
                      </Typography>
                      <Typography variant="body2" color="#8a9398" gutterBottom>
                        {addon.price}
                      </Typography>
                      <Typography variant="body2" color="#1b252b">
                        {addon.description}
                      </Typography>
                    </Paper>
                  }
                  sx={{ alignItems: "flex-start", m: 0 }}
                />
              ))}
              <Typography variant="body2" sx={{ mt: 1 }}>
                <Box component="span" color="#84949e">
                  By Continuing{" "}
                </Box>
                <Box component="span" color="#f54848">
                  you agree to our terms and conditions.
                </Box>
              </Typography>
            </Stack>
          </Box>

          <Button
            variant="contained"
            startIcon={<BoltIcon />}
            sx={{
              bgcolor: "#f54848",
              "&:hover": {
                bgcolor: "#d43d3d",
              },
              borderRadius: 1,
              py: 1,
            }}
          >
            Upgrade to Plus
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default SubscriptionPage;
