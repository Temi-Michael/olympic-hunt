import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => (
    <AppBar position="static" color="primary" style={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
            <Typography variant="body1" style={{ margin: 'auto' }}>
                &copy; 2024 Explorer Dashboard
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Footer;