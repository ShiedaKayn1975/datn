import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { DatePicker, InputValue } from './SecuritySteps'

const SecureRenderer = (props) => {
  const { step, currentStep, onSetData } = props

  return (
    <>
      {
        ['birthday'].includes(step.code) && 
        <DatePicker
          code={step.code}
          title={step.title}
          onSetData={onSetData}
        />
      }
    </>
  )
}

export default SecureRenderer