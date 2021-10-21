import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";

export const Login = () => {
    const history = useHistory();
    const [userId,setUserId]=useState('');
    const onLogin = () => {
        console.log('asdasd')
        axios.post('/auth', {user_id: userId})
        .then(() => {
            localStorage.setItem('user_id', userId);
            history.push('/todo');
        });
    }   
    return (
        <div>
            Please enter contact number to proceed further
            <div> <input type='text' onChange={e=>setUserId(e.target.value)}/></div>
            <button onClick={onLogin}>Proceed to Todo</button>
        </div>
    )
}