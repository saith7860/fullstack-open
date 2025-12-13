import { Fragment,useEffect } from "react";
import personService from "../services/personService";
const PersonInfo = ({persons,setPersons,setErrorMessage}) => {
    useEffect(() => {
      try {
         personService.getAll().then(initialPerson=>{
          console.log('get all persons',initialPerson);
           
          setPersons(initialPerson);
         })
      } catch (error) {
       setErrorMessage('Error occuring during fetching info',error);
       setTimeout(() => {
        setErrorMessage(null)
       }, 5000);
       console.log(error);
       
      }
    }, []) 
    const deletePerson=(id)=>{
        console.log('id of person deleting',id);
        
        try {
       const confirmation=window.confirm(`Do you want to delete person having id ${id}`);
       if (confirmation) {
         const deleteOrNot=personService.deletePer(id);
         if (deleteOrNot) {
            alert(`person having ${id} is deleted`);
            setPersons(persons.filter((per)=>per.id!=id));
               setErrorMessage(`person deleted having id ${id}`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
         }

       }
        } catch (error) {
       setErrorMessage('Error occuring during deleting info',error);
       setTimeout(() => {
        setErrorMessage(null)
       }, 5000);
            
        }
    }
  return (
    
     <ul>
        {persons.map((person)=>{
         console.log(person);
         
         return (
            <Fragment key={person.id}>
            <li>
              {person.name} {person.number}
            </li>
            <button onClick={()=>{deletePerson(person.id)}}  style={{backgroundColor:"lightblue"}}>Delete</button>
            </Fragment>
          );
    })}
    </ul>
    
  )
}

export default PersonInfo