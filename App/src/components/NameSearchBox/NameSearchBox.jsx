import React from 'react'
import Box from '@mui/material/Box'
import SearchBox from '../SearchBox'

const NameSearchBox = ({ value, onChange }) => (
  <Box flex={1} pr={2}>
    <SearchBox
      fullWidth
      variant="outlined"
      value={value}
      onChange={onChange}
      placeholder="Buscar por nombre genérico de medicamento"
    />
  </Box>
)

export default NameSearchBox
