import React from 'react'

const Part = ({individualPart}) => {
  console.log(individualPart);
  
    
  return (
<>
<p>
    {individualPart.name} {individualPart.exercises}
</p>

</>
  )
}

export default Part