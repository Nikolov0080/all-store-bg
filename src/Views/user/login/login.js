import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card } from 'react-bootstrap';
import Input from '../../components/input/input';
import firebaseLogin from '../../../firebase/models/user/login/login';

const Login = () => {

    const { handleSubmit, register } = useForm();

    const submitForm = ({ email, password }) => {

        firebaseLogin(email, password).then(resp => console.log(resp))

    }

    return (
        <div className="text-center">
            <Card >
                <Card.Header>Sign in </Card.Header>
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