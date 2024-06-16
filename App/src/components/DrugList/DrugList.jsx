import React from 'react'
import Grid from '@mui/material/Grid'
import { ProductCard } from 'components'

const DrugList = ({ medications }) => (
  <Grid container spacing={2} sx={{ pt: '90px', pb: '10px', px: '10px' }}>
    {medications.map(medication => (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={medication.id}>
        <ProductCard {...medication} />
      </Grid>
    ))}
  </Grid>
)

export default DrugList
