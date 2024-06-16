import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, CardContent, Typography, Box } from '@mui/material' // Importa los componentes de Material-UI necesarios

const baseURL = 'https://api.fda.gov/drug/event.json'

function DrugPageDetails() {
  const { drugId } = useParams()
  const [medicationDetails, setMedicationDetails] = useState(null)

  useEffect(() => {
    axios
      .get(`${baseURL}?search=safetyreportid:${drugId}`)
      .then(response => {
        console.log(response.data.results)
        setMedicationDetails(response.data.results[0])
      })
      .catch(error => {
        console.error('Error al obtener detalles del medicamento:', error)
      })
  }, [drugId])

  if (!medicationDetails) {
    return <div>Cargando detalles del medicamento...</div> // Puedes agregar un spinner o mensaje de carga
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Ajusta la altura de la caja para que ocupe toda la pantalla verticalmente
      }}
    >
      <Card sx={{ maxWidth: 600 }}>
        {' '}
        {/* Define el ancho máximo de la tarjeta */}
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Detalles del Medicamento
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Nombre:</strong>{' '}
            {medicationDetails.patient.drug[0].medicinalproduct}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Reacciones:</strong>{' '}
            {medicationDetails.patient.reaction
              .map(r => r.reactionmeddrapt)
              .join(', ')}
          </Typography>
          <Typography variant="body1">
            <strong>Fecha de reporte:</strong> {medicationDetails.receivedate}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default DrugPageDetails
