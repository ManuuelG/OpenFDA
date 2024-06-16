import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'background', color: 'text', zIndex: 999 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div">
          OpenFDA
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
