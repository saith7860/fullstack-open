import React from 'react'

const Total = ({courseParts}) => {
  console.log(courseParts);
  
  let total=0;
  for (let i = 0; i < courseParts.length; i++) {
    console.log(courseParts[i].exercises);
    
    total+=courseParts[i].exercises;
    
  }
  return (
    <p>Number of Exercises {total} </p>
  )
}

export default Total