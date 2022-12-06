import React from 'react';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';
import { NavLink } from 'react-router-dom';
const Database = () => {

    // CHECK IF USER IS LOGGED IN
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/';
    }

    const [allCustomers, setAllCustomers] = React.useState([]);

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/customers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    setAllCustomers(data.data.data)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    console.log(allCustomers);




    return (
        <div>
            <DashboardNavbar />
            <div className='flex justify-between items-center w-5/6 lg:w-full lg:px-7 mx-auto mb-3 mt-5 px-7 py-4'>
                <h3 className='text-xl font-semibold text-gray-700'>
                    All Customers List
                </h3>
                <NavLink to='/store/1/input' className=''>
                    <button className='px-10 py-2 bg-[#9715FC] hover:bg-[#6456F0] transition duration-200 text-white rounded-md'>
                        Add New
                    </button>
                </NavLink>
            </div>

            <div className='w-5/6 lg:w-full lg:px-7 mx-auto mb-20'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className='text-center'>Phone number</th>
                                <th className='text-center'>Amount spend</th>
                                {/* <th className='text-center'>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allCustomers.map((item, index) => (
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
                                                ${item.amount_spend}
                                            </span>
                                        </td>
                                        {/* <td className='text-center'>
                                            <NavLink to={`/admin/dashboard/usermessage/${item.phone}`}>
                                                <button className="px-5 py-1 bg-[#5D5FEF] text-white rounded-md text-sm">Message</button>
                                            </NavLink>


                                        </td> */}
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