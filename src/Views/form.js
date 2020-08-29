import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {

    const { handleSubmit, register } = useForm();

    const test = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(test)}>
                <label id='2'>Input something lol</label>
                <input id='2' ref={register} name="userInput" />
                <button type="submit">   submit</button>
            </form>
        </div>
    )
}

export default Form;