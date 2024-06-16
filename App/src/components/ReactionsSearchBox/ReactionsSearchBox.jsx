import React from 'react'
import Box from '@mui/material/Box'
import SearchBox from 'components/SearchBox'

const ReactionsSearchBox = ({ value, onChange }) => (
  <Box flex={1} pr={2}>
    <SearchBox
      fullWidth
      variant="outlined"
      value={value}
      onChange={onChange}
      placeholder="Buscar por Reacciones"
    />
  </Box>
)

export default ReactionsSearchBox
