import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'jesus_sarmi1994@hotmail.com'
    });

    const { username, email } = formState;

    useEffect(() => {
        //console.log('useEffect called')
    }, []);

    useEffect(() => {
        //console.log('formState changed')
    }, [formState]);

    useEffect(() => {
        //console.log('email changed')
    }, [email]);
    

    const onInputChange = (event) => {
        const { value, name } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr/>

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="jesus_sarmi1994@hotmail.com"
                name="email"
                value={email}
                onChange={onInputChange} />
            {
                username === 'strider2' &&
                <Message />
            }
        </>
    );
}
