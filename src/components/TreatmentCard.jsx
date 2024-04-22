import React from 'react'

const TreatmentCard = ({ImageUrl, TreatmentName, TreatmentDescreption}) => {
  return (
    <div className='treatment-card'>
        <img src={ImageUrl} alt="" />
        <h4>{TreatmentName}</h4>
        <p>{TreatmentDescreption}</p>
    </div>
  )
}

export default TreatmentCard