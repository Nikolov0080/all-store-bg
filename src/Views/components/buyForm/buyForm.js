import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../input/input';
import { Container, Button } from 'react-bootstrap';
import ErrMsg from './errMsg';
import placeOrder from '../../../firebase/models/user/orders/placeOrder/placeOrder';

const BuyForm = ({ hide }) => {

    const { handleSubmit, register, errors } = useForm();

    const completeOrder = (data) => {
        placeOrder(data)    
    }

    return (
        <div>
            <Container className="mt-5 text-center">
                <form onSubmit={handleSubmit(completeOrder)}>

                    <Input
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        reg={register({
                            required: <ErrMsg message="Full Name is required" />
                        })}
                    />

                    {errors.fullName && errors.fullName.type === 'required'
                        && <ErrMsg message="Full Name is required" />}

                    <Input
                        name="phoneNumber"
                        type="number"
                        placeholder="Phone Number"
                        reg={register({
                            required: true,
                            pattern: /0[0-9]{9}$/
                        })}
                    />

                    {errors.phoneNumber && errors.phoneNumber.type === 'required'
                        && <ErrMsg message="Phone Number is required" />}
                    {errors.phoneNumber && errors.phoneNumber.type === 'pattern'
                        && <ErrMsg message="Phone Number must be 10 digits starting with 0" />}

                    <Input
                        name="city"
                        type="text"
                        placeholder="City"
                        reg={register({
                            required: true,
                            minLength: 3
                        })}
                    />

                    {errors.city && errors.city.type === 'required'
                        && <ErrMsg message="City is required" />}
                    {errors.city && errors.city.type === 'minLength'
                        && <ErrMsg message="City must be at least 3 characters" />}

                    <Input
                        name="postOffice"
                        type="number"
                        placeholder="Post Code   (8000,1000 etc..)"
                        reg={register({
                            required: true
                        })}
                    />

                    {errors.postOffice && errors.postOffice.type === 'required'
                        && <ErrMsg message="PostOffice is required" />}

                    <Button className="mr-5" type="submit">Complete</Button>
                    <Button variant="danger" className="ml-5" onClick={() => hide(false)} >Cancel</Button>
                </form>
            </Container>
        </div>
    )
}

export default BuyForm
