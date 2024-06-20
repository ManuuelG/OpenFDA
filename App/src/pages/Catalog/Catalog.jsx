import React, { useEffect, useState } from 'react'
import { Grid, Box, CircularProgress, Typography, Button } from '@mui/material'
import axios from 'axios'
import { NameSearchBox, Pagination, ProductCard } from 'components'

const baseURL = 'https://api.fda.gov/drug/label.json?'

function Catalog() {
  const [medications, setMedications] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [totalCount, setTotalCount] = useState(0)
  const [pageSetup, setPageSetup] = useState({
    queryName: '',
    currentPage: 1,
    pageSize: 10,
  })

  const { currentPage, pageSize, queryName } = pageSetup

  useEffect(() => {
    const fetchMedications = async () => {
      setLoading(true)
      try {
        const offset = (currentPage - 1) * pageSize
        const response = await axios.get(
          `${baseURL}search=openfda:*&limit=${pageSize}&skip=${offset}`
        )
        const usMedications = response.data.results
          .filter(item => item.openfda && item.openfda.generic_name)
          .map(item => ({
            id: item.id,
            name: item.openfda.generic_name.join(', '),
          }))

        setMedications(usMedications)
        setTotalCount(response.data.meta.results.total)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data from OpenFDA:', error)
        setError(error)
        setLoading(false)
      }
    }

    if (!queryName) {
      fetchMedications()
    }
  }, [currentPage, pageSize, queryName])

  const fetchMedicationsByName = async name => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${baseURL}search=openfda.generic_name:(${name}*)&limit=${pageSize}&skip=${
          (currentPage - 1) * pageSize
        }`
      )
      const usMedications = response.data.results
        .filter(item => item.openfda && item.openfda.generic_name)
        .map(item => ({
          id: item.id,
          name: item.openfda.generic_name.join(', '),
        }))

      setMedications(usMedications)
      setTotalCount(response.data.meta.results.total)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data from OpenFDA:', error)
      setError(error)
      setMedications([]) // Reset medications to an empty array on error
      setLoading(false)
    }
  }

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
    fetchMedicationsByName(queryName)
  }

  const handlePageChange = newPage => {
    setPageSetup({ ...pageSetup, currentPage: newPage })
  }

  useEffect(() => {
    if (queryName.trim() === '') {
      const fetchMedications = async () => {
        setLoading(true)
        try {
          const offset = (currentPage - 1) * pageSize
          const response = await axios.get(
            `${baseURL}search=openfda:*&limit=${pageSize}&skip=${offset}`
          )
          const usMedications = response.data.results
            .filter(item => item.openfda && item.openfda.generic_name)
            .map(item => ({
              id: item.id,
              name: item.openfda.generic_name.join(', '),
            }))

          setMedications(usMedications)
          setTotalCount(response.data.meta.results.total)
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data from OpenFDA:', error)
          setError(error)
          setLoading(false)
        }
      }
      fetchMedications()
    }
  }, [currentPage, pageSize, queryName])

  return (
    <Box mx={5}>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', mb: 5, mt: 10 }}
      >
        <NameSearchBox value={queryName} onChange={handleNameSearchChange} />
        <Button variant="contained" color="primary" onClick={handleSearch}>
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
