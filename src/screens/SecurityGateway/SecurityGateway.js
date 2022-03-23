import React from 'react'
import SecurityWrapper from '../../components/SecurityWrapper'
import MainCardWrapper from './MainCardWrapper'
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SecurityGateway = (props) => {
  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const secu = useSelector(state => state.securityGateway)
  console.log(secu)
  return (
    <>
      <SecurityWrapper>
        <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
              <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                <MainCardWrapper>
                  <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction={matchDownSM ? 'column-reverse' : 'row'}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item>
                          <Stack alignItems="center" justifyContent="center" spacing={1}>
                            <Typography
                              color={theme.palette.secondary.main}
                              gutterBottom
                              variant={matchDownSM ? 'h3' : 'h2'}
                            >
                              Enter your birthday
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item container direction="column" alignItems="center" xs={12}>
                        <Typography
                          component={Link}
                          to="/pages/register/register3"
                          variant="subtitle1"
                          sx={{ textDecoration: 'none' }}
                        >
                          Don&apos;t have an account?
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </MainCardWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SecurityWrapper>
    </>
  )
} 