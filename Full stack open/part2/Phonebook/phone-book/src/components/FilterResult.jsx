import { useEffect } from "react";
const FilterResult = ({filterResult,setFilterResult,filterValue,persons}) => {
    useEffect(() => {
    if (filterValue != "") {
      const res = persons.filter((person) =>
        person.name.toLowerCase().startsWith(filterValue.toLocaleLowerCase())
      );
      setFilterResult(res);
    } else {
      setFilterResult([]);
    }
  }, [filterValue]);
  console.log(filterResult);
  return (
    <ul>
   {filterResult.length>0&&filterResult.map((person) => {
          return (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          );
        })}



    </ul>
  )
}

export default FilterResult