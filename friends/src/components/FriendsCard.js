import React from 'react';


const FriendsCard = props => {
 
   
  
    return (
        

        

      
        <div className='friendCard'>
       
            <h1>{props.name}</h1> 
            <h4>{props.age}</h4>
            <h4>{props.email}</h4>
            </div>
       
    )
}
export default FriendsCard;