import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

const schema = {

}

export const ConfirmBirthday = (props) => {
  const [value, setValue] = useState(null)
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label={props.title || 'Pick a date'}
          value={value}
          minDate={new Date('1950-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} fullWidth />}
          sx={{

          }}
        />
      </LocalizationProvider>
    </>
  )
}