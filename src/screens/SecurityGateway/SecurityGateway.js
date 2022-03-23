import React from 'react'
import SecurityWrapper from '../../components/SecurityWrapper'
import { Grid } from '@mui/material'
import MainCardWrapper from './MainCardWrapper'

export const SecurityGateway = (props) => {
  return (
    <>
      <SecurityWrapper>
        <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
              <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                <MainCardWrapper></MainCardWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SecurityWrapper>
    </>
  )
} 