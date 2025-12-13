import Part from "./Part"

export const Content = ({courseParts}) => {
    console.log(courseParts);
    
  return (
    <div>
      {courseParts.map((course)=>{
       console.log(course);
     return  <Part individualPart={course}/>
      })}
    </div>
  )
}
