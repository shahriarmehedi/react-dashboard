import React from 'react';
import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
const InputInfo = () => {

    const navigate = useNavigate();
    let { id } = useParams();

    // loading state 
    const [loading, setLoading] = React.useState(false);

    const token = localStorage.getItem('token');

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data)

        // send data to server
        fetch(`${process.env.REACT_APP_BASE_URL}/api/customers/${id}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                console.log(data)
                // clear form
                reset();
                navigate(`/thankyou/${id}`)
                // update new data
                // window.location.reload();

            })

        // // clear form
        // reset();
        // navigate('/admin/dashboard/database')
        // // update new data
        // window.location.reload();
    }

    return (
        <div className='bg-gradient-to-r from-[#6456F0] to-[#9715FC] pb-28 pt-5 min-h-screen'>
            <div className='flex justify-end mr-10 mb-10'>
                <NavLink to="/">
                    <button className='bg-white text-[#9715FC] px-7 py-2 rounded-md'>
                        Login
                    </button>
                </NavLink>

            </div>
            <div className='w-5/6 lg:w-1/3  px-10 py-20 mx-auto bg-white rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col mb-5'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="phone">
                            Phone Number <span className='font-thin'>(Australian Format)</span>
                        </label>
                        <input required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" pattern="^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$" placeholder='+61 4 123 456 789' {...register("phone", { required: true })} />
                        {/* Only accept Australian phone number */}
                        {errors.phone && <span className='text-red-500 text-xs italic'>Please enter a valid phone number</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="amound_spend">Amount Spend</label>
                        <input required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" placeholder='$2400' {...register("amount_spend", { required: true })} />
                        {errors.amount_spend && <span className='text-red-500 text-xs italic'>Please enter a valid amount</span>}
                    </div>

                    <div className='flex justify-center'>
                        {
                            loading ? <button className='bg-[#9715FC] text-white px-7 py-2 rounded-md mt-5' type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Submitting...
                            </button> : <button className='bg-[#9715FC] text-white px-7 py-2 rounded-md mt-5' type="submit">
                                Submit
                            </button>
                        }
                    </div>


                </form>
            </div>
        </div>
    );
};

export default InputInfo;