import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import Input from '../../components/input/input';
import TextArea from '../../components/textArea/textArea';
import Dropdown from '../../components/dropdownSelect/dropdownSelect';

const AddProduct = () => {

    const { handleSubmit, register } = useForm();

    const addProduct = (data) => {

        console.log(data);
    }

    return (
        <div className="text-center">
            <h3>Add your product</h3>
            <form onSubmit={handleSubmit(addProduct)}>
                <Input
                    type="text"
                    name="title"
                    placeholder="Product title"
                    reg={register}
                />
                <Input
                    type="number"
                    name="price"
                    placeholder="Price (only numbers)"
                    reg={register}
                />
                <TextArea
                    type="text"
                    name="description"
                    placeholder="Type your product description min 20 characters"
                    reg={register}
                />

                <Dropdown
                    name="condition"
                    reg={register}
                />

                <Input
                type="file"
                name="image"
                reg={register}
                />


                <Button type="submit" variant="success">Add</Button>
            </form>
            add product
        </div>
    )
}

export default AddProduct
