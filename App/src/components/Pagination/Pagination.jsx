import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const Pagination = ({ itemCount, pageSize, currentPage, onChangePage }) => {
  const totalPages = Math.ceil(itemCount / pageSize)

  return (
    <ButtonGroup
      sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 2 }}
    >
      <Button
        variant="contained"
        onClick={() => onChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <Button
        variant="contained"
        onClick={() => onChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </Button>
    </ButtonGroup>
  )
}

export default Pagination
