import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='text-center p-32'>
                <h3>
                    Welcome to the Home Page
                </h3>

                <p>
                    This is the home page of the application.
                </p>

                <Link to="/admin/dashboard/main">
                    <button className='px-7 py-3 bg-[#5D5FEF] text-white rounded-md mt-10'>
                        Go to the Dashboard
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Home;