import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Chat from "../pages/Chat";
import Matches  from '../pages/Matches';
import Event from "../pages/Event";


const ManagementPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
   
    <Box
      sx={{
        width: '100%',
        maxWidth: '1190px',
        height: { xs: 'auto', sm: '130px' },
        bgcolor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',

        justifyContent: 'space-between',
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 0 },
        borderRadius: 2,
        boxSizing: 'border-box',
        mx: 'auto',
        ml: { xs: 0, sm: '12px' },
        flexDirection: { xs: 'column', sm: 'row' },
        textAlign: { xs: 'center', sm: 'left' },
        gap: { xs: 2, sm: 0 },
        position: 'relative',
        bottom: '24px',
      }}
    >
      <Box>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
        >
          Manage User
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' } }}
        >
          Administer and oversee user accounts and privileges within the platform.
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: '141px',
          height: '48px',
          bgcolor: '#F54848',
          borderRadius:"10px",
          '&:hover': { bgcolor: '#d63c3c' },
          textTransform: 'none',
          px: 3,
          mt: { xs: 2, sm: 0 },
        }}
      >
        Add User
      </Button>
    </Box>
    <Chat/>
    <Matches/>
    <Event/>
    </>
  );
};

export default ManagementPage;