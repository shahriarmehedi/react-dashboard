import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const ThankYouPage = () => {

    let { id } = useParams();


    return (
        <div className='bg-gradient-to-r from-[#6456F0] to-[#9715FC] py-28 min-h-screen' >
            <div div className='w-5/6 lg:w-1/3  px-10 py-20 mx-auto bg-white rounded-lg text-2xl font-bold text-center' >
                <div className='flex justify-center pb-5'>
                    <img className='w-20 h-20' src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-19.png" alt="" />
                </div>
                Thank you for submitting your request.
                <div>
                    <NavLink to={`/store/${id}/input`}>
                        <button className='bg-[#9715FC] hover:bg-[#6456F0] transition duration-150 px-5 py-3 text-sm text-white font-normal rounded-md mt-7'>
                            Back to another entry
                        </button>
                    </NavLink>
                </div>
            </div >
        </div >
    );
};

export default ThankYouPage;