import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }


    return (
        <div className='w-[220px] bg-white h-screen fixed z-50'>
            <div className='mx-5 mt-4 text-gray-500 flex flex-col'>
                <div className='flex items-center'>
                    <div className='h-10 w-10 rounded-lg bg-[#5D5FEF]'>

                    </div>
                    <h3 className='px-4 text-xl font-bold'>LOGO</h3>
                </div>
                <div className='mt-5'>

                </div>
                <Link to='/admin/dashboard/main'>
                    <div className=' hover:bg-[#5D5FEF] hover:text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'>
                        Dashboard
                    </div>
                </Link>
                <Link to='/admin/dashboard/database'>
                    <div className=' hover:bg-[#5D5FEF] hover:text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'>
                        Database
                    </div>
                </Link>
                <Link to='/admin/dashboard/sales-report'>
                    <div className=' hover:bg-[#5D5FEF] hover:text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'>
                        Sales Report
                    </div>
                </Link>
                <Link to='/admin/dashboard/campaign'>
                    <div className=' hover:bg-[#5D5FEF] hover:text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'>
                        Campaign
                    </div>
                </Link>
                {/* <Link to='/admin/dashboard/messages'>
                    <div className=' hover:bg-[#5D5FEF] hover:text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'>
                        Messages
                    </div>
                </Link> */}
                <Link to='/admin/dashboard/push-notification'>
                    <div className=' hover:bg-[#5D5FEF] hover:text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'>
                        Push Notification
                    </div>
                </Link>

                <div onClick={handleLogout} className=' hover:bg-[#5D5FEF] hover:text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'>
                    Sign Out
                </div>

            </div>

        </div>
    );
};

export default Sidebar;