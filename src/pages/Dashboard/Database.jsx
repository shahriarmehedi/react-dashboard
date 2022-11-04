import React from 'react';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';
import { NavLink } from 'react-router-dom';
const Database = () => {


    const data = [
        {
            id: 1,
            phone: '01700000000',
            AmountSpend: 1000,
        },
        {
            id: 2,
            phone: '01543434343',
            AmountSpend: 170,
        },
        {
            id: 3,
            phone: '01712345678',
            AmountSpend: 350,
        },
        {
            id: 4,
            phone: '01700000000',
            AmountSpend: 1000,
        },
        {
            id: 5,
            phone: '01543434343',
            AmountSpend: 170,
        },
        {
            id: 6,
            phone: '01712345678',
            AmountSpend: 350,
        },
        {
            id: 7,
            phone: '01700000000',
            AmountSpend: 1000,
        },
        {
            id: 8,
            phone: '01543434343',
            AmountSpend: 170,
        },
        {
            id: 9,
            phone: '01712345678',
            AmountSpend: 350,
        },
        {
            id: 10,
            phone: '01700000000',
            AmountSpend: 1000,
        },

    ]

    const [customerData, setCustomerData] = React.useState(data);





    return (
        <div>
            <DashboardNavbar />
            <h3 className='p-7  text-xl font-semibold text-gray-700'>
                All Customers List
            </h3>

            <div className='w-5/6 lg:w-full lg:px-7 mx-auto mb-20'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className='text-center'>Phone number</th>
                                <th className='text-center'>Amount spend</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customerData.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <span className="text-gray-500">
                                                {item.id}
                                            </span>
                                        </td>
                                        <td className='text-center'>
                                            <span className="text-gray-500">
                                                {item.phone}
                                            </span>
                                        </td>
                                        <td className='text-center'>
                                            <span className="text-gray-500">
                                                ${item.AmountSpend}
                                            </span>
                                        </td>
                                        <td className='text-center'>
                                            <NavLink to={`/admin/dashboard/usermessage/${item.phone}`}>
                                                <button className="px-5 py-1 bg-[#5D5FEF] text-white rounded-md text-sm">Message</button>
                                            </NavLink>


                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Database;