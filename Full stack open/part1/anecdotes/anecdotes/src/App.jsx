import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // console.log(randomAnecdoteIndex);
  
   function nextAnecdote() {
      const randomAnecdoteIndex=Math.floor(Math.random()*anecdotes.length);
      console.log(randomAnecdoteIndex);
      
      setSelected(randomAnecdoteIndex);
    
   }

   function giveVote() {
    console.log(selected);
    const copy=[...vote];
    console.log(copy[selected]);
    copy[selected]+=1;
    console.log(copy);
    setVote(copy)
   }
  
   
  const [selected, setSelected] = useState(0)
  const [vote,setVote]=useState([1,2,3,4,5,6,7,8]);
    const maxVoteAnecdote=Math.max(...vote);
   function anedcodeWithMostVote(){
   console.log(maxVoteAnecdote);
   for(let i=0;i<vote.length;i++){
    if (vote[i]==maxVoteAnecdote) {
      return anecdotes[i];
      
    }
   }
   }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {vote[selected]} votes
      <br />

      <button onClick={()=>giveVote()}>vote</button>
      <button onClick={()=>nextAnecdote()}>next anecdote</button>
      <br />
      <h1>Anecdote with most vote</h1>
     {anedcodeWithMostVote()}
     has {maxVoteAnecdote} votes
    </div>
  )
}

export default App;