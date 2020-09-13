import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '../../components/input/input';
import firebaseRegister from '../../../firebase/models/user/register/register';
import ErrMsg from './errMsg';
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const { handleSubmit, register, watch, errors } = useForm();
    const [err, setErr] = useState(false);
    const history = useHistory();

    const submitForm = ({ username, email, password }) => {

        try {
            firebaseRegister(email, password, username).then((response) => {
                console.log(response)
                history.push({
                    pathname: '/',
                });
                window.location.reload(false);
            })
        } catch (error) {
            setErr(error);
        }
    }


    return (
        <div className="text-center">
            <ErrorBoundary message="Some input wrong , try again...">
                <Card >
                    <Card.Header>Sign Up </Card.Header>
                    <form onSubmit={handleSubmit(submitForm)}>
                        {err !== false ? new Error(err) : ''}
                        <Input
                            name="username"
                            reg={register({
                                required: true,
                                minLength: 6,
                                pattern: /^(?:[A-Za-z\d_-])+$/
                            })}
                            placeholder="Username"
                            type="text"
                        />
                        {errors.username && errors.username.type === "pattern" && <ErrMsg msg="Username can contain only letters and digits" />}
                        {errors.username && errors.username.type === "required" && <ErrMsg msg="Username is required" />}
                        {errors.username && errors.username.type === "minLength" && <ErrMsg msg="Username must be at least 6 characters long" />}

                        <Input
                            name="email"
                            reg={register({
                                required: true
                            })}
                            placeholder="Email"
                            type="email"
                        />
                        {errors.email && errors.email.type === "required" && <ErrMsg msg="Email is required" />}

                        <Input
                            name="password"
                            reg={register({
                                required: true,
                                minLength: 6
                            })}
                            placeholder="Password"
                            type="password"
                        />

                        {errors.password && errors.password.type === "minLength" && <ErrMsg msg="Password must be 6 characters long" />}
                        {errors.password && errors.password.type === "required" && <ErrMsg msg="Password is required" />}
                        {errors.rePassword && errors.rePassword.type === "validate" && <ErrMsg msg="Passwords must match" />}

                        <Input
                            name="rePassword"
                            reg={register({
                                required: true,
                                validate: (value) => {
                                    return value === watch("password");
                                }
                            })}
                            placeholder="Repeat password"
                            type="password"
                        />
                        {errors.rePassword && errors.rePassword.type === "required" && <ErrMsg msg="rePasswords is required" />}

                        <Button type="submit" variant="success">Submit</Button>
                    </form>
                </Card>
            </ErrorBoundary>

        </div>
    )
}

export default Register;