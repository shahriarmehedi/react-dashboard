import React from 'react';
import CustomerInsight from '../../components/Dashboard/CustomerInsight';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';

const DashboardHome = () => {

    // CHECK IF USER IS LOGGED IN
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/';
    }

    const [storeData, setStoreData] = React.useState({});

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/stores`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    setStoreData(data.data)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    // ALL CUSTOMERS
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

    return (
        <div>
            <DashboardNavbar />
            <h3 className='p-7  text-xl font-semibold text-gray-700'>
                Welcome to the Dashboard
            </h3>


            <div className='flex flex-col lg:flex-row lg:px-7 w-full'>
                <div className='bg-white rounded-xl p-5 w-5/6 lg:w-[55%] mx-auto mb-7 lg:mb-0'>

                    <h3 className='py-3 text-xl font-semibold'>Customer Status</h3>

                    <div className='grid grid-cols-3 gap-5 text-center mt-5'>
                        <div className='bg-[#F2F2F2] rounded-xl p-5 shadow-md'>
                            <img className='mx-auto h-7 w-7' src="/img/icon.png" alt="" />
                            <h3 className='text-[#5D5FEF] py-2 font-semibold text-sm'>
                                All Customers
                            </h3>
                            <h2 className='text-2xl pb-1 font-bold'>
                                {allCustomers.length}
                            </h2>
                            <p className='text-[#5D5FEF] text-xs'>Overall</p>
                        </div>
                        <div className='bg-[#F2F2F2] rounded-xl p-5 shadow-md'>
                            <img className='mx-auto h-7 w-7' src="/img/Icon (1).png" alt="" />
                            <h3 className='text-[#5D5FEF] py-2 font-semibold text-sm'>
                                New Customer
                            </h3>
                            <h2 className='text-2xl pb-1 font-bold'>
                                {allCustomers.filter(customer => customer.status === 'new').length}
                            </h2>
                            <p className='text-[#5D5FEF] text-xs'>Today</p>
                        </div>
                        <div className='bg-[#F2F2F2] rounded-xl p-5 shadow-md'>
                            <img className='mx-auto h-7 w-7' src="/img/Icon (3).png" alt="" />
                            <h3 className='text-[#5D5FEF] py-2 font-semibold text-sm'>
                                Reward Issued
                            </h3>
                            <h2 className='text-2xl pb-1 font-bold'>
                                {allCustomers.filter(customer => customer.status === 'reward').length}
                            </h2>
                            <p className='text-[#5D5FEF] text-xs'>Today</p>
                        </div>
                    </div>

                </div>
                <div className='bg-white rounded-xl p-5 lg:ml-5 w-5/6 lg:w-[45%] mx-auto'>
                    <h3 className='py-3 text-xl font-semibold'>Top Customer</h3>

                    <div>
                        {/* create a 4 column table */}
                        <table className='w-full text-center'>
                            <thead>
                                <tr>
                                    <th className='py-3 text-xs font-thin text-gray-500'>#</th>
                                    <th className='py-3 text-xs font-thin text-gray-500'>Number</th>
                                    <th className='py-3 text-xs font-thin text-gray-500'> </th>
                                    <th className='py-3 text-xs font-thin text-gray-500'>Sales</th>
                                </tr>
                            </thead>
                            {
                                allCustomers.length > 0 ?
                                    <tbody>
                                        {
                                            allCustomers.slice(0, 4).map((customer, index) => (
                                                <tr key={index}>
                                                    <td className='py-3 text-sm'>{index + 1}</td>
                                                    <td className='py-3 text-sm'>{customer.phone}</td>
                                                    <td className='py-3 text-sm'>
                                                        <progress className="progress progress-error w-20" value={customer.amount_spend / 100} max="100"></progress>
                                                    </td>
                                                    <td className='py-3 '>
                                                        {/* percentage */}
                                                        <span className='text-sm text-gray-500'>
                                                            {customer.amount_spend / 100}%
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                    :
                                    <tbody>
                                        <tr>
                                            <td className='py-3 text-xs font-thin text-gray-500'>No Data</td>
                                        </tr>
                                    </tbody>

                            }
                        </table>

                    </div>
                </div>
            </div>

            <div className='lg:px-7 w-full  mb-7 mt-7'>
                <div className='bg-white rounded-xl p-5 w-5/6 lg:w-full  mx-auto'>
                    <h3 className='py-3 text-xl font-semibold'>Customer Insight</h3>
                    <CustomerInsight />
                </div>
            </div>


        </div>
    );
};

export default DashboardHome;