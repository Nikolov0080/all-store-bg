import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card } from 'react-bootstrap';
import Input from '../../components/input/input';
import firebaseLogin from '../../../firebase/models/user/login/login';
import ErrMsg from './errMsg';
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';

const Login = () => {
    const { handleSubmit, register, errors } = useForm();
    const [err, setErr] = useState(false);
    const [dbErr, setDbErr] = useState(false);

    const submitForm = ({ email, password }) => {

        try {
            firebaseLogin(email, password).then((resp) => {

                if (resp === false) {
                    setErr('Nu such user, or wrong Email or Password')
                }
            })
        } catch (error) {
            setDbErr(error)
        }
    }
    
    return (
        <div className="text-center">
            <ErrorBoundary message={'Wrong input , try again'}>
                <Card >
                    <Card.Header>Sign in</Card.Header>

                    {err !== false ? <ErrMsg message={err} /> : ''}
                    {dbErr !== false ? new Error(dbErr) : ''}

                    {errors.email && errors.email.type === 'required' && <ErrMsg message="Email is required" />}

                    <form onSubmit={handleSubmit(submitForm)}>

                        <Input
                            name="email"
                            reg={register({
                                required: true
                            })}
                            placeholder="Email"
                            type="email"
                        />
                        {errors.password && errors.password.type === 'required' && <ErrMsg message="Password is required" />}
                        {errors.password && errors.password.type === 'minLength' && <ErrMsg message="Password must be 6 characters" />}

                        <Input
                            name="password"
                            reg={register({
                                required: true,
                                minLength: 6
                            })}
                            placeholder="Password"
                            type="password"
                        />

                        <Button type="submit" variant="success">Submit</Button>
                    </form>
                </Card>
            </ErrorBoundary>
        </div>
    )
}

export default Login;