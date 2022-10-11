import React from 'react';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';

const Messages = () => {
    return (
        <div>
            <DashboardNavbar />
            <h3 className='p-7  text-xl font-semibold text-gray-700'>
                Message
            </h3>


            <div className='lg:px-7 w-5/6 lg:w-full  mb-7'>
                <div className='bg-white rounded-xl p-5 w-5/6 lg:w-full  mx-auto'>
                    <div className='flex mt-5'>
                        <div className='flex items-center'>
                            <input type="radio" name="radio-6" className="mx-5 radio checked:bg-[#5D5FEF]" defaultChecked />
                            <h2 className="label-text pr-7">Everyone</h2>
                        </div>
                        <div className='flex items-center'>
                            <input type="radio" name="radio-6" className="mx-5 radio checked:bg-[#5D5FEF]" />
                            <h2 className="label-text pr-7">Specific location</h2>
                        </div>
                    </div>
                    <div>
                        <select className="select select-primary w-[95%] mx-5 mt-7">
                            <option value="" >Location</option>
                            <option value="" >Washington D.C. - Store</option>
                            <option value="" >New York - Store</option>
                            <option value="" >California - Store</option>
                            <option value="" >Los Angeles  - Store</option>
                            <option value="" >Islip - Store</option>

                        </select>
                    </div>
                    <div>
                        <textarea className="textarea textarea-primary  w-[95%] mx-5 mt-7" placeholder="Type your message here...."></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;