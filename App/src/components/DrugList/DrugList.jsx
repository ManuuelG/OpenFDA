import React from 'react'
import Grid from '@mui/material/Grid'
import { ProductCard } from './ProductCard'

const DrugList = ({ medications }) => (
  <Grid container spacing={2}>
    {medications.map(medication => (
      <Grid item xs={12} key={medication.id} sx={{ mt: 2 }}>
        <ProductCard id={medication.id} name={medication.name} />
      </Grid>
    ))}
  </Grid>
)

export default DrugList
