import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card } from 'react-bootstrap';
import Input from '../../components/input/input';
import firebaseLogin from '../../../firebase/models/user/login/login';
import ErrMsg from './errMsg';

const Login = () => {

    const { handleSubmit, register } = useForm();
    const [err, setErr] = useState(false);
    const submitForm = ({ email, password }) => {

        firebaseLogin(email, password).then((resp) =>{
            if(resp === false){
                setErr('Nu suck user, or wrong Email or Password')
            }
        })

    }

    return (
        <div className="text-center">
            <Card >
                <Card.Header>Sign in </Card.Header>
                {err !== false ? <ErrMsg message={err}/>: ''}
                
                <form onSubmit={handleSubmit(submitForm)}>

                    <Input
                        name="email"
                        reg={register}
                        placeholder="Email"
                        type="email"
                    />

                    <Input
                        name="password"
                        reg={register}
                        placeholder="Password"
                        type="password"
                    />

                    <Button type="submit" variant="success">Submit</Button>
                </form>
            </Card>
        </div>
    )
}

export default Login;