import React, { useContext } from 'react';
import { useForm, } from 'react-hook-form';
import './Apply.css'

const Apply = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        console.log(data)

    }

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div>
            <div classsName="col-md-6">

                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

                    <input name="name"  {...register('name', { required: true })} placeholder=' Name' />
                    {/* {errors.name && <span className="error">This field is required</span>} */}

                    <input name="email"  {...register('email', { required: true })} placeholder='Email' />
                    {/* {errors.email && <span className="error">This field is required</span>} */}

                    <input name="PortfolioLink" {...register('Portfolio', { required: true })} placeholder='PortfolioLink' />
                    {/* {errors.Adress && <span className="error">This field is required</span>} */}
                    <h5 className="mt-2">CV</h5>
                    <input name="" type="file"{...register('body', { required: true })} placeholder='CV' />
                    {/* {errors.Adress && <span className="error">This field is required</span>} */}

                    <input name="Phone" {...register('Phone', { required: true })} placeholder='Your Phone' />
                    {/* {errors.Phone && <span className="error">This field is required</span>} */}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Apply;