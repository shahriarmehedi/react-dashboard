import React from 'react';
import CustomerInsight from '../../components/Dashboard/CustomerInsight';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';

const DashboardHome = () => {
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
                                1153
                            </h2>
                            <p className='text-[#5D5FEF] text-xs'>Overall</p>
                        </div>
                        <div className='bg-[#F2F2F2] rounded-xl p-5 shadow-md'>
                            <img className='mx-auto h-7 w-7' src="/img/Icon (1).png" alt="" />
                            <h3 className='text-[#5D5FEF] py-2 font-semibold text-sm'>
                                New Customer
                            </h3>
                            <h2 className='text-2xl pb-1 font-bold'>
                                178
                            </h2>
                            <p className='text-[#5D5FEF] text-xs'>Today</p>
                        </div>
                        <div className='bg-[#F2F2F2] rounded-xl p-5 shadow-md'>
                            <img className='mx-auto h-7 w-7' src="/img/Icon (3).png" alt="" />
                            <h3 className='text-[#5D5FEF] py-2 font-semibold text-sm'>
                                Reward Issued
                            </h3>
                            <h2 className='text-2xl pb-1 font-bold'>
                                673
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
                            <tbody>
                                <tr>
                                    <td className='py-3 text-sm'>01</td>
                                    <td className='py-3 text-sm'>01700000000</td>
                                    <td className='py-3 text-sm'>
                                        <progress className="progress progress-error w-20" value="50" max="100"></progress>
                                    </td>
                                    <td className='py-3 text-sm'>
                                        <span className="badge badge-accent badge-outline">50%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='py-3 text-sm'>02</td>
                                    <td className='py-3 text-sm'>01700000001</td>
                                    <td className='py-3 text-sm'>
                                        <progress className="progress progress-error w-20" value="40" max="100"></progress>
                                    </td>
                                    <td className='py-3 text-sm'>
                                        <span className="badge badge-accent badge-outline">40%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='py-3 text-sm'>03</td>
                                    <td className='py-3 text-sm'>01700000002</td>
                                    <td className='py-3 text-sm'>
                                        <progress className="progress progress-error w-20" value="20" max="100"></progress>
                                    </td>
                                    <td className='py-3 text-sm'>
                                        <span className="badge badge-accent badge-outline">20%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='py-3 text-sm'>04</td>
                                    <td className='py-3 text-sm'>01700000003</td>
                                    <td className='py-3 text-sm'>
                                        <progress className="progress progress-error w-20" value="70" max="100"></progress>
                                    </td>
                                    <td className='py-3 text-sm'>
                                        <span className="badge badge-accent badge-outline">70%</span>
                                    </td>
                                </tr>
                            </tbody>
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