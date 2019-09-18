import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import FriendsCard from './FriendsCard';


const FriendsList = () => {
const [friends, setFriends] = useState({});
   

 
useEffect(() => { 
 
   axiosWithAuth()
     .get('/friends')
     .then(res => {
     setFriends( res.data)
     
   })
      
     .catch(err => console.log(err));
 
     
     },[])

 
     
 console.log(friends)

   return (
   
   <div>
      <FriendsCard   friend={friends}  />
           
        
     
   </div>
   )
   
}

export default FriendsList;