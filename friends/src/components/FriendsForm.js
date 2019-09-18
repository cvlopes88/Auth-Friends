import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';


const FriendsForm = () => {
let [newFriend, setNewFriend] = useState({name:'', age:'', email:''});

let onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/form')
    .then(
        
           setNewFriend(...newFriend)

        
    )
}

let onChange = i => {
    let {name, value} = i.target
    setNewFriend({
        ...newFriend,
        [name]: value
    })
}

    return (

        <form onSubmit={onSubmit} >
            <input  onChange={onChange} type='text' name='name' placeholder='name here' />
            <input  onChange={onChange} type='number' name='age' placeholder='0' />
            <input  onChange={onChange} type='email' name='email' placeholder='email' />
            <button>Submit!</button>
            

        </form>
    )
}

export default FriendsForm;