import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { ConfirmBirthday } from './SecuritySteps'

const SecureRenderer = (props) => {
  const security = useSelector(state => state.securityGateway)
  const currentStep = security.currentStep
  const steps = security.steps

  useEffect(() => {
    toast.success("Hello")
  }, [])

  return (
    <>
      <ConfirmBirthday/>
    </>
  )
}

export default SecureRenderer