import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';


const FriendsForm = (props) => {
let [newFriend, setNewFriend] = useState({name:'', age:'', email:''});

let onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/friends', newFriend)
    .then(res => {
        
           setNewFriend(...newFriend)
           props.history.push('/form')
        
    })
    .catch(err => console.log(err))
}

let onChange = i => {
    // let {name, value} = i.target.value
    // setNewFriend({
    //     ...newFriend,
    //     [name]: value
    // })

    setNewFriend( {
        ...newFriend, [i.target.name]: i.target.value
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