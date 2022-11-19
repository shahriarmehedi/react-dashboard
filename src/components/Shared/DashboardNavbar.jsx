import React from 'react';

const DashboardNavbar = () => {

    return (
        <div className='w-full h-[60px] bg-white'>

            <div className='flex items-center pt-1 justify-between px-7'>
                <div>
                    <h3 className='text-xl font-bold text-gray-700'>Dashboard</h3>
                </div>
                <div className=''>
                    {/* create a searchbox */}
                    <div className='w-[300px] h-[40px] bg-[#F2F2F2] rounded-md flex items-center'>
                        <div className='w-[40px] h-[40px] bg-gray-50 rounded-md flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input type='text' placeholder='Search here..' className='w-full bg-gray-50 h-full px-4 rounded-r-md focus:outline-none' />

                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <img src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis=" alt="" className='w-[40px] h-[40px] object-cover rounded-full ml-4' />
                    </div>
                    <div className='px-3'>
                        <h3 className=' font-bold text-gray-700'>LOREM IPSUM</h3>
                        <p>
                            <span className='text-gray-500'>Admin</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardNavbar;