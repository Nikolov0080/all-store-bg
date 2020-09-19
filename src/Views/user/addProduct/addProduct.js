import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import Input from '../../components/input/input';
import TextArea from '../../components/textArea/textArea';
import Dropdown from '../../components/dropdownSelect/dropdownSelect';
import firebaseCreateProduct from '../../../firebase/models/products/createProduct/createProduct';
import Context from '../../../context/context';
import ErrMsg from './errMsg';
import { useHistory } from 'react-router-dom';

const AddProduct = () => {

    const [btnStyle, setBtnStyle] = useState({ variant: "success", text: "Add", disabled: false })
    const context = useContext(Context);
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory()

    const submitted = () => {

        setBtnStyle({ variant: "disabled", text: "loading...", disabled: true })

    }

    const addProduct = (data) => {
        submitted()
        firebaseCreateProduct({
            ...data,
            userId: context.user.uid,
            username: context.user.displayName
        }).then((resp) => {
            if (resp) {
                history.push({
                    pathname:"/profile",
                    state:{
                        type:"success",
                        message:"PRODUCT CREATED !",
                        show:true
                    }
                })
            }
        })
    }

    return (
        <div className="text-center">
            <h3>Add your product</h3>
            <form onSubmit={handleSubmit(addProduct)}>

                <Input
                    type="text"
                    name="title"
                    placeholder="Product title"
                    reg={register({
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                    })}
                />

                {errors.title && errors.title.type === "required" && <ErrMsg message="Product title is required" />}
                {errors.title && errors.title.type === "minLength" && <ErrMsg message="Title must be 6 characters long" />}
                {errors.title && errors.title.type === "maxLength" && <ErrMsg message="Title must be less than 20" />}

                <Input
                    type="number"
                    name="price"
                    placeholder="Price (only numbers)"
                    reg={register({
                        required: true,
                        maxLength: 5
                    })}
                />

                {errors.price && errors.price.type === "required" && <ErrMsg message="Price is required" />}
                {errors.price && errors.price.type === "maxLength" && <ErrMsg message="Price can't be over 1 000 000" />}

                <TextArea
                    type="text"
                    name="description"
                    placeholder="Type your product description min 20 characters"
                    reg={register({
                        required: true,
                        minLength: 10,
                        maxLength: 550
                    })}
                />

                {errors.description && errors.description.type === "required" && <ErrMsg message="Description is required" />}
                {errors.description && errors.description.type === "minLength" && <ErrMsg message="Description must be at least 10 characters long" />}
                {errors.description && errors.description.type === "maxLength" && <ErrMsg message="Description can't be over 550 symbols" />}

                <Dropdown
                    name="condition"
                    reg={register}
                />


                <Input
                    type="file"
                    name="image"
                    reg={register({
                        required: true,
                        validate: (value) => {
                            return value[0].size <= 5000000
                        }
                    })}
                />

                {errors.image && errors.image.type === "validate" && <ErrMsg message="Image must be under 5MB" />}
                {errors.image && errors.image.type === "required" && <ErrMsg message="Image is required" />}

                <Button disabled={btnStyle.disabled} type="submit" variant={btnStyle.variant}>{btnStyle.text}</Button>
            </form>
            add product
        </div>
    )
}

export default AddProduct;