import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card } from 'react-bootstrap';
import Context from '../../../context/context';
import Input from '../../components/input/input';

const Login = () => {

    const { handleSubmit, register } = useForm();
    // const context = useContext(Context);

    const submitForm = (data) => {
        console.log(data)
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