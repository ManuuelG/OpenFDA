import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const ProductCard = ({ id, name }) => (
  <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
    <Card
      sx={{
        mb: 2,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        },
      }}
    >
      <CardContent>
        <Typography variant="body1" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  </Link>
)

export default ProductCard
