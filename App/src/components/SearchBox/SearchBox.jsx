import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBox({ value, onChange, ...rest }) {
  return (
    <TextField
      type="text"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  )
}

export default SearchBox
