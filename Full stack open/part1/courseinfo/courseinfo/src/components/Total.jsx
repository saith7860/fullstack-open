import React from 'react'

const Total = ({courseParts}) => {
  console.log(courseParts);
  const total=courseParts.reduce((s,p)=>{
    return s+p.exercises
  },0)
  return (
    <p><b>total of {total} exercises</b></p>
  )
}

export default Total;