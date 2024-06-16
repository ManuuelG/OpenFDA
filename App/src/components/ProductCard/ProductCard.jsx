import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function ProductCard({ id, name, reactions }) {
  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345, height: '100%' }}>
        <CardContent>
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Box mt={2} spacing={3}>
              <Typography variant="body2" color="text.secondary">
                Reactions: {reactions}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProductCard
