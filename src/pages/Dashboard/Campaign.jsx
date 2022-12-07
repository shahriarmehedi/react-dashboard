import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Campaign = () => {

    // CHECK IF USER IS LOGGED IN
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/';
    }


    // MESSAGE TABS
    const [isEveryoneClicked, setIsEveryoneClicked] = React.useState(true);
    const [isSpecificClicked, setIsSpecificClicked] = React.useState(false);

    const handleEveryoneClick = () => {
        setIsEveryoneClicked(true);
        setIsSpecificClicked(false);
    }

    const handleSpecificClick = () => {
        setIsEveryoneClicked(false);
        setIsSpecificClicked(true);
    }


    return (
        <div>
            <DashboardNavbar />
            <div className='flex justify-between items-center w-5/6 lg:w-full lg:px-7 mx-auto mb-3 mt-5 px-7 py-4'>
                <h3 className='text-xl font-semibold text-gray-700'>
                    Campaign
                </h3>
                <button className='px-7 py-2 bg-[#5D5FEF] transition duration-200 text-white rounded-md'>
                    New campaign
                </button>
            </div>

            <div>
                <Tabs>
                    <TabList className="flex justify-center cursor-pointer rounded-md">
                        <Tab className=" text-gray-700 bg-gray-100 border-none outline-none px-10 rounded-md py-3">Running</Tab>
                        <Tab className=" text-gray-700 bg-gray-100 border-none outline-none px-10 rounded-md py-3">Stopped</Tab>
                        <Tab className=" text-gray-700 bg-gray-100 border-none outline-none px-10 rounded-md py-3">Completed</Tab>
                        <Tab className=" text-gray-700 bg-gray-100 border-none outline-none px-10 rounded-md py-3">Message</Tab>

                    </TabList>

                    <TabPanel className="m-7">
                        <div className='flex justify-end mb-2'>
                            <div>
                                <h3>
                                    Sort by: <span className='px-1 cursor-pointer text-blue-500'>Title</span> | <span className='px-1 cursor-pointer text-blue-500'>Date</span>
                                </h3>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">

                                <thead>
                                    <tr>
                                        <th>Start</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">11 months ago</p>
                                                    <p className="text-xs py-2 text-gray-600 dark:text-gray-400">
                                                        12/23/21 10:00 am
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <div>
                                                        <button className='border-[1px] px-2 rounded border-gray-500'>TEXT</button>
                                                        <span className=' inline-block px-3'>
                                                            <p className="font-semibold">Opt-in Campaign</p>
                                                        </span>
                                                    </div>
                                                    <div className='py-1'>
                                                        <p>
                                                            <span className='px-2 cursor-pointer text-blue-500'>view</span> | <span className='px-2 cursor-pointer text-blue-500'>stop</span> | <span className='px-2 cursor-pointer text-blue-500'>results</span> | <span className='px-2 cursor-pointer text-blue-500'>customer responses</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=''>
                                            <p className=' '>
                                                We would like to incentivize  customers <br /> to associate
                                                their email so  we can <br />utilize the email campaign
                                                feature! $5 off
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">12 months ago</p>
                                                    <p className="text-xs py-2 text-gray-600 dark:text-gray-400">
                                                        12/23/21 10:00 am
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <div>
                                                        <button className='border-[1px] px-2 rounded border-gray-500'>TEXT</button>
                                                        <span className=' inline-block px-3'>
                                                            <p className="font-semibold">Opt-in Campaign</p>
                                                        </span>
                                                    </div>
                                                    <div className='py-1'>
                                                        <p>
                                                            <span className='px-2 cursor-pointer text-blue-500'>view</span> | <span className='px-2 cursor-pointer text-blue-500'>stop</span> | <span className='px-2 cursor-pointer text-blue-500'>results</span> | <span className='px-2 cursor-pointer text-blue-500'>customer responses</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=''>
                                            <p className=' '>
                                                We would like to incentivize  customers <br /> to associate
                                                their email so  we can <br />utilize the email campaign
                                                feature! $5 off
                                            </p>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </TabPanel>




                    <TabPanel className="m-7">
                        <div className='flex justify-end mb-2'>
                            <div>
                                <h3>
                                    Sort by: <span className='px-1 cursor-pointer text-blue-500'>Title</span> | <span className='px-1 cursor-pointer text-blue-500'>Date</span>
                                </h3>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">

                                <thead>
                                    <tr>
                                        <th>Start</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">06 months ago</p>
                                                    <p className="text-xs py-2 text-gray-600 dark:text-gray-400">
                                                        12/23/21 10:00 am
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <div>
                                                        <button className='border-[1px] px-2 rounded border-gray-500'>TEXT</button>
                                                        <span className=' inline-block px-3'>
                                                            <p className="font-semibold">Opt-in Campaign</p>
                                                        </span>
                                                    </div>
                                                    <div className='py-1'>
                                                        <p>
                                                            <span className='px-2 cursor-pointer text-blue-500'>view</span> | <span className='px-2 cursor-pointer text-blue-500'>stop</span> | <span className='px-2 cursor-pointer text-blue-500'>results</span> | <span className='px-2 cursor-pointer text-blue-500'>customer responses</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=''>
                                            <p className=' '>
                                                We would like to incentivize  customers <br /> to associate
                                                their email so  we can <br />utilize the email campaign
                                                feature! $5 off
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">07 months ago</p>
                                                    <p className="text-xs py-2 text-gray-600 dark:text-gray-400">
                                                        12/23/21 10:00 am
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <div>
                                                        <button className='border-[1px] px-2 rounded border-gray-500'>TEXT</button>
                                                        <span className=' inline-block px-3'>
                                                            <p className="font-semibold">Opt-in Campaign</p>
                                                        </span>
                                                    </div>
                                                    <div className='py-1'>
                                                        <p>
                                                            <span className='px-2 cursor-pointer text-blue-500'>view</span> | <span className='px-2 cursor-pointer text-blue-500'>stop</span> | <span className='px-2 cursor-pointer text-blue-500'>results</span> | <span className='px-2 cursor-pointer text-blue-500'>customer responses</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=''>
                                            <p className=' '>
                                                We would like to incentivize  customers <br /> to associate
                                                their email so  we can <br />utilize the email campaign
                                                feature! $5 off
                                            </p>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </TabPanel>



                    <TabPanel className="m-7">
                        <div className='flex justify-end mb-2'>
                            <div>
                                <h3>
                                    Sort by: <span className='px-1 cursor-pointer text-blue-500'>Title</span> | <span className='px-1 cursor-pointer text-blue-500'>Date</span>
                                </h3>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">

                                <thead>
                                    <tr>
                                        <th>Start</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">11 months ago</p>
                                                    <p className="text-xs py-2 text-gray-600 dark:text-gray-400">
                                                        12/23/21 10:00 am
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <div>
                                                        <button className='border-[1px] px-2 rounded border-gray-500'>TEXT</button>
                                                        <span className=' inline-block px-3'>
                                                            <p className="font-semibold">Opt-in Campaign</p>
                                                        </span>
                                                    </div>
                                                    <div className='py-1'>
                                                        <p>
                                                            <span className='px-2 cursor-pointer text-blue-500'>view</span> | <span className='px-2 cursor-pointer text-blue-500'>stop</span> | <span className='px-2 cursor-pointer text-blue-500'>results</span> | <span className='px-2 cursor-pointer text-blue-500'>customer responses</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=''>
                                            <p className=' '>
                                                We would like to incentivize  customers <br /> to associate
                                                their email so  we can <br />utilize the email campaign
                                                feature! $5 off
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold">11 months ago</p>
                                                    <p className="text-xs py-2 text-gray-600 dark:text-gray-400">
                                                        12/23/21 10:00 am
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <div>
                                                        <button className='border-[1px] px-2 rounded border-gray-500'>TEXT</button>
                                                        <span className=' inline-block px-3'>
                                                            <p className="font-semibold">Opt-in Campaign</p>
                                                        </span>
                                                    </div>
                                                    <div className='py-1'>
                                                        <p>
                                                            <span className='px-2 cursor-pointer text-blue-500'>view</span> | <span className='px-2 cursor-pointer text-blue-500'>stop</span> | <span className='px-2 cursor-pointer text-blue-500'>results</span> | <span className='px-2 cursor-pointer text-blue-500'>customer responses</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=''>
                                            <p className=' '>
                                                We would like to incentivize  customers <br /> to associate
                                                their email so  we can <br />utilize the email campaign
                                                feature! $5 off
                                            </p>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </TabPanel>


                    <TabPanel className="m-7">
                        <div className='flex justify-end mb-2'>
                            <div>
                                <h3>
                                    Sort by: <span className='px-1 cursor-pointer text-blue-500'>Title</span> | <span className='px-1 cursor-pointer text-blue-500'>Date</span>
                                </h3>
                            </div>
                        </div>
                        <div className='lg:px-7 w-5/6 lg:w-full  mb-7'>
                            <div className='bg-white rounded-xl p-5 w-5/6 lg:w-full  mx-auto'>
                                <div className='flex mt-5'>
                                    <div className='flex items-center'>
                                        <input type="radio" name="radio-6" className="mx-5 radio checked:bg-[#5D5FEF]" defaultChecked onChange={handleEveryoneClick} />
                                        <h2 className="label-text pr-7">Everyone</h2>
                                    </div>
                                    <div className='flex items-center'>
                                        <input type="radio" name="radio-6" className="mx-5 radio checked:bg-[#5D5FEF]" onChange={handleSpecificClick} />
                                        <h2 className="label-text pr-7">Specific location</h2>
                                    </div>
                                </div>

                                <div>
                                    {
                                        isEveryoneClicked && (null) || isSpecificClicked && (
                                            <select className="select select-primary w-[95%] mx-5 mt-7">
                                                <option value="" >Location</option>
                                                <option value="" >Balboa - Store</option>
                                                <option value="" >San Marcos - Store</option>
                                                <option value="" >Hillcrest - Store</option>
                                                <option value="" >Pacific Beach - Store</option>
                                                <option value="" >Mira Mesa - Store</option>
                                                <option value="" >Mission Valley - Store</option>
                                            </select>
                                        )
                                    }
                                </div>
                                <div>
                                    <textarea rows="7" cols="7" className="textarea textarea-primary  w-[95%] mx-5 mt-7" placeholder="Type your message here...."></textarea>
                                </div>

                                <div className='flex justify-end mx-7 mt-2'>
                                    <button className='bg-primary px-14 py-3 text-white rounded '>
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                </Tabs>
            </div>


        </div>
    );
};

export default Campaign;