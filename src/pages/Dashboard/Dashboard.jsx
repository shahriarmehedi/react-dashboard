import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Shared/Sidebar';

const Dashboard = () => {


    // CHECK IF USER IS LOGGED IN
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/';
    }


    return (
        <div className='flex'>
            {
                token && (
                    <>
                        <Sidebar />
                        <div className='w-full ml-[220px] bg-gray-50 min-h-screen'>
                            <Outlet />
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Dashboard;