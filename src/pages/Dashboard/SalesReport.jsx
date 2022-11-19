import React from 'react';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';

const SalesReport = () => {


    // CHECK IF USER IS LOGGED IN
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/';
    }

    return (
        <div>
            <DashboardNavbar />
            <h3 className='p-7  text-xl font-semibold text-gray-700'>
                Sales Report
            </h3>
        </div>
    );
};

export default SalesReport;