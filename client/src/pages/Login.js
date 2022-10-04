import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useMutation} from '@apollo/client';
import auth from '../utils/auth';
import {LOGIN} from '../utils/mutations';

function Login(props) {
    const [formState, setFormState] = useState({email:'', password:''});
    const [login,{error}] =useMutation(LOGIN);
    
    
    const handleFormSubmit = async(event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: {email: formState.email, password: formState.password},
            });
            const token = mutationResponse.data.login.token;
            auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };



}