import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { DatePicker, InputValue } from './SecuritySteps'

const SecureRenderer = (props) => {
  const security = useSelector(state => state.securityGateway)
  const currentStep = security.currentStep
  const steps = security.steps
  console.log("steps", steps)

  // useEffect(() => {
  //   toast.success("Hello")
  // }, [])

  return (
    <>
      <InputValue
        label={steps?.[currentStep]?.title}
      />
    </>
  )
}

export default SecureRenderer