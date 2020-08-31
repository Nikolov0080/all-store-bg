import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import Context from '../../../context/context';

const Login = () => {

    const { handleSubmit, register } = useForm();
    const context = useContext(Context);
    console.log(context);

    const login = () => {
        context.signIn()
    }

    const logout = () => {
        context.signOut()
    }
    return (
        <div>
            <Button onClick={login}>login</Button>
            <Button onClick={logout}>logOut</Button>

        </div>
    )
}

export default Login
