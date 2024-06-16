import React, { useEffect, useState } from 'react'
import { Grid, Box, CircularProgress } from '@mui/material'
import axios from 'axios'
import {
  NameSearchBox,
  ReactionsSearchBox,
  DrugList,
  Pagination,
} from 'components'

const baseURL = 'https://api.fda.gov/drug/event.json?limit=1000'

function Catalog() {
  const [medications, setMedications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pageSetup, setPageSetup] = useState({
    queryName: '',
    queryReactions: '',
    currentPage: 1,
    pageSize: 12,
  })

  const { currentPage, pageSize, queryName, queryReactions } = pageSetup
  const offset = (currentPage - 1) * pageSize

  useEffect(() => {
    axios
      .get(baseURL)
      .then(({ data }) => {
        console.log(data.results)
        const usMedications = data.results
          .filter(item => item.primarysourcecountry === 'US')
          .map(item => ({
            id: item.safetyreportid,
            name: item.patient.drug[0].medicinalproduct,
            reactions: item.patient.reaction
              .map(r => r.reactionmeddrapt)
              .join(', '),
          }))

        setMedications(usMedications)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data from OpenFDA:', error)
        setLoading(false)
      })
  }, [])

  const filteredMedications = medications.filter(medication => {
    const matchName = medication.name
      .toUpperCase()
      .includes(queryName.toUpperCase())
    const matchReactions = medication.reactions
      .toUpperCase()
      .includes(queryReactions.toUpperCase())
    return matchName && matchReactions
  })

  const handleNameSearchChange = e => {
    setPageSetup({
      ...pageSetup,
      queryName: e.target.value,
      currentPage: 1,
    })
  }

  const handleReactionsSearchChange = e => {
    setPageSetup({
      ...pageSetup,
      queryReactions: e.target.value,
      currentPage: 1,
    })
  }

  const handlePageChange = newPage => {
    setPageSetup({ ...pageSetup, currentPage: newPage })
  }

  const paginatedMedications = filteredMedications.slice(
    offset,
    offset + pageSize
  )

  return (
    <Box mt={7} mx={5}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <NameSearchBox value={queryName} onChange={handleNameSearchChange} />
        <ReactionsSearchBox
          value={queryReactions}
          onChange={handleReactionsSearchChange}
        />
      </Box>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3} sx={{ padding: '20px' }}>
          <Grid item xs={12}>
            <DrugList medications={paginatedMedications} />
          </Grid>
        </Grid>
      )}
      {!loading && (
        <Pagination
          itemCount={filteredMedications.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onChangePage={handlePageChange}
        />
      )}
    </Box>
  )
}

export default Catalog
