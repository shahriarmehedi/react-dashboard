import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from 'react-router-dom';
const InputInfo = () => {

    const navigate = useNavigate();
    let { id } = useParams();

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)

        // send data to server
        // fetch(`${process.env.REACT_APP_BASE_URL}/api/customers/${id}/create`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         // clear form
        //         reset();
        //         navigate('/admin/dashboard/database')
        //         // update new data
        //         window.location.reload();

        //     })

        // clear form
        reset();
        navigate('/admin/dashboard/database')
        // update new data
        window.location.reload();
    }

    return (
        <div className='bg-gradient-to-r from-[#6456F0] to-[#9715FC] py-28 min-h-screen'>
            <div className='w-5/6 lg:w-1/3  px-10 py-20 mx-auto bg-white rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col mb-5'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="name">Phone Number</label>
                        <input required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='+896-1245-8536' {...register("phone", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="name">Amount Spend</label>
                        <input required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" placeholder='$2400' {...register("amount_spend", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div className='flex justify-center'>
                        <button type='submit' className='px-10 py-2 bg-[#9715FC] hover:bg-[#6456F0] transition duration-200 text-white rounded-md mt-10'>
                            Submit
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default InputInfo;