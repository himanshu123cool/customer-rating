import { useState } from "react";
import { FaStar } from "react-icons/fa";

function App({noOfStars=6}) {

  const [rating, setRating]= useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (getCurrentValue)=>{
    setRating(getCurrentValue);
  }

  const handleMouseEnter = (getCurrentValue)=>{
    setHover(getCurrentValue);
  }

  const handleMouseLeave = ()=>{
    setHover(rating);
  }

  return (   
    <div className="h-screen mx-auto flex items-center justify-center">
      <div className="column border-2 py-8 px-8 rounded-md">
          <h1 className="text-2xl mb-3 font-medium text-white">Star Rating</h1>
          <p className="mb-3 text-xl text-white">A simple ReactJS rating component</p>
          <div className="star-rating flex">
          {
           [...Array(noOfStars)].map((_,index)=>{
            index += 1;
            return (
                <FaStar 
                className={`${index<=(hover || rating) ? 'active' : 'inactive'} cursor-pointer mx-1`}
                key={index} 
                size={36} 
                onClick={()=>{handleOnClick(index)}} 
                onMouseEnter={()=>{handleMouseEnter(index)}} 
                onMouseLeave={()=>{handleMouseLeave(index)}}/>
            )
           })
          }
          </div>
      </div>
    </div>
  );
}

export default App;
