import React from 'react'
import StatisticLine from './StatisticLine.jsx';
const Statistics = ({good,neutral,bad,setBad,setGood,setNeutral}) => {
   const total=()=>{
    return good+bad+neutral;
  }
  const average=()=>{
    return (good+bad+neutral)/3;
  }
  const percentageOfPositive=()=>{
    if (good==0) {
      return 'Nothing'
    }
    return (good/total())*100;
  } 
    const handleGoodClick=()=>{
    setGood((prev)=>prev+1);
  }
   const handleNeutralClick=()=>{
    setNeutral((prev)=>prev+1);
  }
   const handleBadClick=()=>{
    setBad((prev)=>prev+1);
  }
  return (
<>
   
    <h1>Statistics</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
    {total()>0? <>
    <StatisticLine text="good" value={good}/>
    <StatisticLine text="bad"  value={bad}/>
    <StatisticLine text="neutral" value={neutral}/>
    <StatisticLine text="all" value={total()}/>
    <StatisticLine text="average" value={average()}/>
    <StatisticLine text="percentage" value={percentageOfPositive()}/>
    </>:<h2>No feedback given</h2>}
   
</>
  )
}

export default Statistics;