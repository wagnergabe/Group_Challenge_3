import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useMutation} from '@apollo/client';
import auth from '../utils/auth';
import {ADD_USER} from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({username:'', email:'', password:''});
    const [addUser] =useMutation(ADD_USER);
    
    //submit form
    const handleFormSubmit = async(event) => {
        event.preventDefault();

        const mutationResponse = await addUser({
        variables: {username:formState.username  ,email: formState.email, password: formState.password},
            });
            const token = mutationResponse.data.addUser.token;
            auth.login(token);
      
    };
// update state on form input
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
//borrow from module 22 


