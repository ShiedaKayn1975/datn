import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import moment from 'moment'
import validate from 'validate.js';

const schema = {

}

export const DatePicker = (props) => {
  const [value, setValue] = useState(new Date('2000-01-01'))

  useEffect(() => {
    console.log(value)
    console.log(moment(value).format("lll"))
  }, [value])

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