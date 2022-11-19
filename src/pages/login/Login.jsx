import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';

const Login = () => {
    const navigate = useNavigate();

    // check if user is logged in
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            navigate('/admin/dashboard/main');
        }
    }, [])


    // loading state
    const [loading, setLoading] = React.useState(false);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        setLoading(true);
        console.log(data)

        // send data to server
        fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                console.log(data)
                // clear form
                reset();

                if (data.status) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful',
                        text: 'You are being redirected to your dashboard',
                        timer: 2000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    })
                    // save token in local storage
                    localStorage.setItem('token', data.data.access_token)


                    // redirect to home page
                    navigate('/admin/dashboard/main')
                    window.location.reload();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Credentials!',
                    })
                }

            })





    };






    return (
        <div className='mt-[60px] min-h-[50vh]'>
            <div className='w-5/6 mx-auto my-28'>
                <div className='w-full lg:w-2/5 mx-auto bg-gray-100 rounded-lg'>
                    <h1 className='text-2xl font-bold pt-7 text-center p-10'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-5 w-5/6 mx-auto'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                Email
                            </label>
                            <input
                                {...register("email", { required: true })}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='email'
                                type='email'
                                placeholder='Email'
                            />
                            {errors.email && <span className='text-red-500 text-sm italic'>This field is required</span>}

                            <label className=' mt-3 block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                Password
                            </label>
                            <input
                                {...register("password", { required: true })}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='password'
                                type='password'
                                placeholder='Password'
                            />
                            {errors.password && <span className='text-red-500 text-sm italic'>This field is required</span>}



                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex items-center'>
                                    <input
                                        id='remember_me' type='checkbox' className='h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded' />
                                    <label htmlFor='remember_me' className='ml-2 block text-sm text-gray-900'>
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className='flex justify-center mt-5 pb-10'>
                                <button
                                    type='submit'
                                    value='Sign In'
                                    className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline cursor-pointer transition duration-200'
                                >
                                    {loading ? 'Loading...' : 'Login'}
                                </button>

                            </div>






                        </div>
                    </form>
                </div>
            </div>

            <div className='slider-container'></div>
        </div>
    );
};

export default Login;