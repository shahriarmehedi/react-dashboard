import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';

const Campaign = () => {

    // CHECK IF USER IS LOGGED IN
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/';
    }



    return (
        <div>
            <DashboardNavbar />
            <div className='flex justify-between items-center w-5/6 lg:w-full lg:px-7 mx-auto mb-3 mt-5 px-7 py-4'>
                <h3 className='text-xl font-semibold text-gray-700'>
                    Campaign
                </h3>

                <button className='px-5 py-2 bg-[#9715FC] hover:bg-[#6456F0] transition duration-200 text-white rounded-md'>
                    Create new campaign
                </button>

            </div>

            <div className='flex items-center w-5/6 lg:w-full lg:px-7 mx-auto mb-3 px-7 py-4'>
                <button className='mr-5 px-5 py-2 bg-[#9715FC] hover:bg-[#6456F0] transition duration-200 text-white rounded-md'>
                    Running Campaigns
                </button>
                <button className='px-5 py-2 bg-[#9715FC] hover:bg-[#6456F0] transition duration-200 text-white rounded-md'>
                    Stopped Campaigns
                </button>
            </div>
        </div>
    );
};

export default Campaign;