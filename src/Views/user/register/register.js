import React, { useContext } from 'react'
import Context from '../../../context/context';
import { Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '../../components/input/input';
import firebaseRegister from '../../../firebase/models/user/register/register';

const Register = () => {

    const { handleSubmit, register } = useForm();

    // const context = useContext(Context);

    const submitForm = ({username,email,password,rePassword}) => {
        
        firebaseRegister(email, password).then(console.log)
        
    }
    return (
        <div className="text-center">
            <Card >
                <Card.Header>Sign Up </Card.Header>
                <form onSubmit={handleSubmit(submitForm)}>

                    <Input
                        name="username"
                        reg={register}
                        placeholder="Username"
                        type="text"
                    />

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

                    <Input
                        name="rePassword"
                        reg={register}
                        placeholder="Repeat password"
                        type="password"
                    />

                    <Button type="submit" variant="success">Submit</Button>
                </form>
            </Card>
        </div>
    )
}

export default Register
