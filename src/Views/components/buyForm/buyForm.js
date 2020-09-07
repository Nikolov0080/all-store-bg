import React from 'react'
import { useForm } from 'react-hook-form';
import Input from '../input/input';
import { Container, Button } from 'react-bootstrap';

const BuyForm = () => {

    const { handleSubmit, register } = useForm();

    const completeOrder = (data) => {
        console.log(data)
    }

    return (
        <div>
            <Container className="mt-5 text-center">
                <form onSubmit={handleSubmit(completeOrder)}>


                    <Input
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        reg={register}
                    />


                    <Input
                        name="phoneNumber"
                        type="text"
                        placeholder="Phone Number"
                        reg={register}
                    />

                    <Input
                        name="city"
                        type="text"
                        placeholder="City"
                        reg={register}
                    />

                    <Input
                        name="postOffice"
                        type="text"
                        placeholder="Post Code   (8000,1000 etc..)"
                        reg={register}
                    />
                    <Button type="submit">Complete</Button>
                </form>

            </Container>
        </div>
    )
}

export default BuyForm
