import React, { useState } from 'react'
import { Grid, Box, CircularProgress, Typography, Button } from '@mui/material'
import { useMedications } from 'CustomHooks'
import { NameSearchBox, Pagination, ProductCard } from 'components'

function Catalog() {
  const [pageSetup, setPageSetup] = useState({
    queryName: '',
    currentPage: 1,
    pageSize: 10,
  })

  const { queryName, currentPage, pageSize } = pageSetup

  const { medications, loading, totalCount } = useMedications(
    queryName,
    currentPage,
    pageSize
  )

  const handleNameSearchChange = e => {
    setPageSetup({
      ...pageSetup,
      queryName: e.target.value,
    })
  }

  const handleSearch = () => {
    setPageSetup({
      ...pageSetup,
      currentPage: 1,
    })
  }

  const handlePageChange = newPage => {
    setPageSetup({ ...pageSetup, currentPage: newPage })
  }

  return (
    <Box mx={5}>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', mb: 5, mt: 10 }}
      >
        <NameSearchBox value={queryName} onChange={handleNameSearchChange} />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ padding: '6px 16px' }}
        >
          Buscar
        </Button>
      </Box>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            mt: 2,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {medications.length > 0 ? (
            medications.map(medication => (
              <Grid item xs={12} key={medication.id} sx={{ mt: 2 }}>
                <ProductCard id={medication.id} name={medication.name} />
              </Grid>
            ))
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '50vh',
              }}
            >
              <Typography variant="h6" color="textSecondary">
                No se ha encontrado el medicamento
              </Typography>
            </Box>
          )}
        </Grid>
      )}
      {!loading && totalCount > 0 && medications.length > 0 && (
        <Pagination
          itemCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onChangePage={handlePageChange}
        />
      )}
    </Box>
  )
}

export default Catalog
