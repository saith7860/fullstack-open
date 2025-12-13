import React from 'react'
import Header from "./Header"
import { Content } from "./Content"
import Total from "./Total"
const Course = ({course}) => {
  console.log(course);
  
  return (
  <div>
   {course.map((course)=>{
    console.log(course);
    
   return(
  <>
 <Header  course={course.name}/>
 <Content courseParts={course.parts}/>
 <Total  courseParts={course.parts}/>
 </> 
   )
  
   })} 
 </div>


  )}
    export default Course;