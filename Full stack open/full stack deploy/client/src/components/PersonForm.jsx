import axios from "axios";
import personService from "../services/personService";
const PersonForm = ({newNumber,newName,setNewName,setNewNumber,persons,setPersons,setErrorMessage}) => {
     const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newObject = {
        name: newName,
        number: Number(newNumber),
      };
      console.log(newObject);
      if (newObject.name.trim().toLowerCase() === "Arto Hellas".toLowerCase()) {
        return alert(`${newObject.name} is already added to phonebook`);
      } else {
        personService.create(newObject).then(res=>{
          console.log('new object createion res',res);
          
          setPersons((prevNames) => [...prevNames, res]);
          setErrorMessage(`New Person added named ${res.name}`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setNewName("")
          setNewNumber("")
        })
      }

     
    } catch (error) {
      console.log(error);
    }

    console.log(persons);
  };
  return (
    <>
         <form onSubmit={handleSubmit}>
        <div>
          <h2>add a new</h2>
          name:{" "}
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />{" "}
          <br />
          number:{" "}
          <input
            type="number"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    
    </>
  )
}

export default PersonForm;