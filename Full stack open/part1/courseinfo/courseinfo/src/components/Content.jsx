import Part from "./Part"

export const Content = ({courseParts}) => {
    console.log(courseParts);
    
  return (
    <div>
    <Part individualPart={courseParts[0]}/>
    <Part individualPart={courseParts[1]}/>
    <Part individualPart={courseParts[2]}/>
    </div>
  )
}
