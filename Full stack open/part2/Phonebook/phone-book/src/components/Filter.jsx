const Filter = ({filterValue,setFilterValue}) => {
  
  return (
    <>
      filter shown with{" "}
      <input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
    
    
    </>
  )
}

export default Filter;