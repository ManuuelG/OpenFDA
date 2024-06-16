import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar'

function MainLayout() {
  return (
    <Box>
      <Navbar />

      <Box pt={8} sx={{ padding: '20px' }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
