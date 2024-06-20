import React from 'react'
import { useParams, Link } from 'react-router-dom'

import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  CircularProgress,
} from '@mui/material'
import { useMedicationDetails } from 'CustomHooks'

function DrugPageDetails() {
  const { drugId } = useParams()
  const { medicationDetails, loading } = useMedicationDetails(drugId)

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minheight: '100vh',
        overflowY: 'auto',
        padding: '16px',
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: '100%',
          mb: 2,
          mt: 5,
          padding: '16px',
          borderRadius: '12px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
          border: '1px solid #ddd',
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ textAlign: 'center', textDecoration: 'underline' }}
          >
            Detalles del Medicamento
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Nombre Genérico:</strong>{' '}
            {medicationDetails.openfda.generic_name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Nombre Comercial:</strong>{' '}
            {medicationDetails.openfda.brand_name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Nombre del Fabricante:</strong>{' '}
            {medicationDetails.openfda.manufacturer_name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Tipo de producto:</strong>{' '}
            {medicationDetails.openfda.product_type}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Número de identificación:</strong>{' '}
            {medicationDetails.openfda.product_ndc}
          </Typography>
          {medicationDetails.active_ingredient && (
            <Typography variant="body1" gutterBottom>
              <strong>Ingrediente Activo:</strong>{' '}
              {medicationDetails.active_ingredient}
            </Typography>
          )}
          {medicationDetails.inactive_ingredient && (
            <Typography variant="body1" gutterBottom>
              <strong>Ingredientes Inactivos:</strong>{' '}
              {medicationDetails.inactive_ingredient.join(', ')}
            </Typography>
          )}
          {medicationDetails.indications_and_usage && (
            <Typography variant="body1" gutterBottom>
              <strong>Indicaciones de Uso:</strong>{' '}
              {medicationDetails.indications_and_usage.join(', ')}
            </Typography>
          )}
          {medicationDetails.purpose && (
            <Typography variant="body1" gutterBottom>
              <strong>Propósito o Usos:</strong>{' '}
              {medicationDetails.purpose.join(', ')}
            </Typography>
          )}
          {medicationDetails.dosage_and_administration && (
            <Typography variant="body1" gutterBottom>
              <strong>Dosificación y Administración:</strong>{' '}
              {medicationDetails.dosage_and_administration.join(', ')}
            </Typography>
          )}
          {medicationDetails.warnings && (
            <Typography variant="body1" gutterBottom>
              <strong>Advertencias:</strong>{' '}
              {medicationDetails.warnings.join(', ')}
            </Typography>
          )}
          {medicationDetails.do_not_use && (
            <Typography variant="body1" gutterBottom>
              <strong>No Usar en Caso de:</strong>{' '}
              {medicationDetails.do_not_use.join(', ')}
            </Typography>
          )}
          {medicationDetails.stop_use && (
            <Typography variant="body1" gutterBottom>
              <strong>Detener el Uso en Caso de:</strong>{' '}
              {medicationDetails.stop_use.join(', ')}
            </Typography>
          )}
          {medicationDetails.pregnancy_or_breast_feeding && (
            <Typography variant="body1" gutterBottom>
              <strong>Embarazo o Lactancia:</strong>{' '}
              {medicationDetails.pregnancy_or_breast_feeding.join(', ')}
            </Typography>
          )}
          {medicationDetails.effective_time && (
            <Typography variant="body1" gutterBottom>
              <strong>Fecha de Efectividad:</strong>{' '}
              {medicationDetails.effective_time}
            </Typography>
          )}
        </CardContent>
      </Card>
      <Button component={Link} to="/" variant="contained" color="primary">
        Volver a la lista de medicamentos
      </Button>
    </Box>
  )
}

export default DrugPageDetails
