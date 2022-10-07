import React from 'react';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';

const SignOut = () => {
    return (
        <div>
            <DashboardNavbar />
            <h3 className='p-7  text-xl font-semibold text-gray-700'>
                Sign Out
            </h3>
        </div>
    );
};

export default SignOut;