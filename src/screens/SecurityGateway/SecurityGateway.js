import React, { useEffect, useState } from 'react'
import SecurityWrapper from '../../components/SecurityWrapper'
import MainCardWrapper from './MainCardWrapper'
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SecureRenderer from './SecureRenderer'
import { useSelector } from 'react-redux';

export const SecurityGateway = (props) => {
  const theme = useTheme()
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const securitySteps = useSelector(state => state.securityGateway)
  let [currentStep, setCurrentStep] = useState(null)
  let [step, setStep] = useState(null)

  useEffect(() => {
    if (securitySteps.hasOwnProperty('currentStep')) {
      setCurrentStep(securitySteps.currentStep)
      setStep(securitySteps.steps[securitySteps.currentStep])
    }
  }, [securitySteps])

  const onIgnoreStep = () => {

  }

  const onSubmitStep = () => {

  }

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
                        <Grid item sx={{ mb: 3 }}>
                          <Typography
                            color={theme.palette.success.dark}
                            gutterBottom
                            variant={matchDownSM ? 'h4' : 'h3'}
                          >
                            {step?.title}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                          <Stack alignItems="center" justifyContent="center" spacing={1}>
                            {/* <Typography
                              color={theme.palette.secondary.main}
                              gutterBottom
                              variant={matchDownSM ? 'h3' : 'h2'}   
                            >
                              Enter your birthday
                            </Typography> */}
                            <SecureRenderer
                              onIgnoreStep={onIgnoreStep}
                              onSubmitStep={onSubmitStep}
                              currentStep={currentStep}
                              step={step}
                            />
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item container direction="column" alignItems="start" xs={6}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              float: 'right',
                              color: theme.palette.secondary.main,
                              '&:hover': {
                                color: theme.palette.secondary.dark
                              }
                            }}
                          >
                            Ignore
                          </Typography>
                        </Grid>
                        <Grid item container direction="column" alignItems="end" xs={6}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              float: 'right',
                              color: theme.palette.success.main,
                              '&:hover': {
                                color: theme.palette.success.dark
                              }
                            }}
                          >
                            Next step
                          </Typography>
                        </Grid>
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