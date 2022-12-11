import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Sidebar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Swal confirmation
        Swal.fire({
            title: 'Are you sure?',
            text: "You can login again anytime!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Logout
                localStorage.clear();
                window.location.href = '/';
            }
        })
    }


    return (
        <div className='w-[250px] bg-white h-screen fixed z-50'>
            <div className='mx-5 mt-4 text-gray-500 flex flex-col'>
                <div className='flex items-center'>
                    <div className='h-10 w-10 rounded-lg bg-[#5D5FEF]'>

                    </div>
                    <h3 className='px-4 text-xl font-bold'>LOGO</h3>
                </div>
                <div className='mt-5'>

                </div>
                <Link to='/admin/dashboard/main'>
                    <div className={
                        window.location.pathname === '/admin/dashboard/main' ?
                            'bg-[#5D5FEF] text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'
                            :
                            'hover:bg-gray-200 cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'
                    }>
                        <i className="bi bi-speedometer2 pr-2"></i> Dashboard
                    </div>
                </Link>
                <Link to='/admin/dashboard/database'>
                    <div className={
                        window.location.pathname === '/admin/dashboard/database' ?
                            'bg-[#5D5FEF] text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'
                            :
                            'hover:bg-gray-200 cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'
                    }>
                        <i className="bi bi-bar-chart pr-2"></i> Database
                    </div>
                </Link>
                <Link to='/admin/dashboard/sales-report'>
                    <div className={
                        window.location.pathname === '/admin/dashboard/sales-report' ?
                            'bg-[#5D5FEF] text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'
                            :
                            'hover:bg-gray-200 cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'
                    }>
                        <i className="bi bi-flag pr-2"></i> Sales Report
                    </div>
                </Link>
                <Link to='/admin/dashboard/campaign'>
                    <div className={
                        window.location.pathname === '/admin/dashboard/campaign' ?
                            'bg-[#5D5FEF] text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'
                            :
                            'hover:bg-gray-200 cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'
                    }>
                        <i className="bi bi-megaphone pr-2"></i> Campaign
                    </div>
                </Link>
                {/* <Link to='/admin/dashboard/messages'>
                    <div className=' hover:bg-[#5D5FEF] hover:text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'>
                        Messages
                    </div>
                </Link> */}
                <Link to='/admin/dashboard/push-notification'>
                    <div className={
                        window.location.pathname === '/admin/dashboard/push-notification' ?
                            'bg-[#5D5FEF] text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'
                            :
                            'hover:bg-gray-200 cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'
                    }>
                        <i className="bi bi-bell pr-2"></i> Push Notification
                    </div>
                </Link>

                <div onClick={handleLogout} className=' hover:bg-red-500 hover:text-white cursor-pointer transition duration-200 px-7 py-3 mb-1 rounded-md'>
                    <i className="bi bi-box-arrow-right pr-2"></i> Sign Out
                </div>

            </div>

        </div>
    );
};

export default Sidebar;