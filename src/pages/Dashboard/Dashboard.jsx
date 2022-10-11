import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Shared/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full ml-[220px] bg-gray-50 min-h-screen'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;