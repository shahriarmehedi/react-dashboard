import React from 'react';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';

const Messages = () => {

    // CHECK IF USER IS LOGGED IN
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/';
    }


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
            <h3 className='p-7  text-xl font-semibold text-gray-700'>
                Message
            </h3>


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
                                    <option value="" >Washington D.C. - Store</option>
                                    <option value="" >New York - Store</option>
                                    <option value="" >California - Store</option>
                                    <option value="" >Los Angeles  - Store</option>
                                    <option value="" >Islip - Store</option>

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
        </div>
    );
};

export default Messages;