import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function ProductCardDetailed({ name, reactions, reportDate }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Box mt={2} spacing={3}>
            <Typography variant="body2" color="text.secondary">
              Reacciones: {reactions}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fecha de reporte: {reportDate}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProductCardDetailed