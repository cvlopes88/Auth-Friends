import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';


const FriendsForm = (props) => {
let [newFriend, setNewFriend] = useState({});

let onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/friends', newFriend)
    .then(res => {
        
          console.log('success')
        
    })
    .catch(err => console.log(err))
}

let onChange = i => {
   

    setNewFriend( {
        ...newFriend, [i.target.name]: i.target.value
    })
}

    return (

        <form onSubmit={onSubmit} >
            <input value={newFriend.name}  onChange={onChange} type='text' name='name' placeholder='name here' />
            <input   value={newFriend.age} onChange={onChange} type='number' name='age' placeholder='0' />
            <input   value={newFriend.email} onChange={onChange} type='email' name='email' placeholder='email' />
            <button type='submit' >Submit!</button>
            

        </form>
    )
}

export default FriendsForm;