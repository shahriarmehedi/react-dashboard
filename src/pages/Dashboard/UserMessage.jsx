import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DashboardNavbar from '../../components/Shared/DashboardNavbar';

const UserMessage = () => {

    // CHECK IF USER IS LOGGED IN
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/';
    }

    let { id } = useParams();

    // message state 
    const [message, setMessage] = React.useState('')

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    // send message
    const sendMessage = () => {
        alert(`Message sent to ${id}`)

        // clear the input field
        setMessage('')
        Navigate('/admin/dashboard/database')

    }


    return (
        <div>
            <DashboardNavbar />
            <h3 className='p-7  text-xl font-semibold text-gray-700'>
                Message
            </h3>


            <div className='lg:px-7 w-5/6 lg:w-full  mb-7'>
                <div className='bg-white rounded-xl p-5 w-5/6 lg:w-full  mx-auto'>


                    <div className='mx-5'>
                        <h3>
                            Sending message to <span>
                                <span className='text-[#5D5FEF] font-bold'>
                                    {id}
                                </span>
                            </span>
                        </h3>
                    </div>
                    <div>
                        <textarea onChange={(e) => handleMessage(e)} rows="7" cols="7" className="textarea textarea-primary  w-[95%] mx-5 mt-7" placeholder="Type your message here...."></textarea>
                    </div>

                    <div className='flex justify-end mx-7 mt-2'>
                        <button onClick={sendMessage} className='bg-primary px-14 py-3 text-white rounded '>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserMessage;