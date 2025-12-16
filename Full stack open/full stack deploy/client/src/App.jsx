import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import FilterResult from "./components/FilterResult";
import personService from "./services/personService";
import axios from 'axios'
import PersonInfo from "./components/PersonInfo";
import Notification from "./components/Notification";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [filterResult, setFilterResult] = useState([]);
 const [errorMessage,setErrorMessage]=useState(null)

 
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification errorMessage={errorMessage}/>
       <Filter filterValue={filterValue} setFilterValue={setFilterValue}/>
      <PersonForm setErrorMessage={setErrorMessage} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <PersonInfo setErrorMessage={setErrorMessage} persons={persons} setPersons={setPersons}/>
       <FilterResult  persons={persons} filterValue={filterValue} filterResult={filterResult} setFilterResult={setFilterResult}/>
    </div>
  );
};

export default App;
