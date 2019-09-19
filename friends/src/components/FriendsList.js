import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import FriendsCard from './FriendsCard';


const FriendsList = () => {
const [friends, setFriends] = useState([]);
   

 
useEffect(() => { 
 
   axiosWithAuth()
     .get('/friends')
     .then(res => {
     setFriends( res.data)
     
   })
      
     .catch(err => console.log(err));
 
     
     },[])

 
     
 console.log( friends )

   return (
   
   <div>

     <h1>friends list</h1>
     
     {friends.map(item => (
      <FriendsCard  key={item.id} name={item.name} age={item.age} email={item.email}  />
           
     ))}
     
   </div>
   )
   
}

export default FriendsList;