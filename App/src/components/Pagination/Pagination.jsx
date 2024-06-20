import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Pagination = ({ itemCount, pageSize, currentPage, onChangePage }) => {
  const totalPages = Math.ceil(itemCount / pageSize)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const getPageNumbers = () => {
    const pages = []

    let startPage = Math.max(1, currentPage - 1)
    let endPage = Math.min(totalPages, currentPage + 1)

    if (startPage > 1) {
      pages.push(1)
      if (startPage > 2) {
        pages.push('...')
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('...')
      }
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      mt={3}
      spacing={isMobile ? 1 : 2}
    >
      <ButtonGroup sx={{ gap: 1 }}>
        <Button
          size={isMobile ? 'small' : 'medium'}
          variant="contained"
          onClick={() => onChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </Button>
        {getPageNumbers().map((page, index) => (
          <Button
            key={index}
            size={isMobile ? 'small' : 'medium'}
            variant="contained"
            onClick={() => typeof page === 'number' && onChangePage(page)}
            disabled={currentPage === page || typeof page !== 'number'}
          >
            {page}
          </Button>
        ))}
        <Button
          size={isMobile ? 'small' : 'medium'}
          variant="contained"
          onClick={() => onChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </Button>
      </ButtonGroup>
    </Grid>
  )
}

export default Pagination
