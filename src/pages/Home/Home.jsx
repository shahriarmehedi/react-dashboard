import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../login/Login';

const Home = () => {
    const navigate = useNavigate();
    // check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
        navigate('/admin/dashboard/main');
    }


    return (
        <div>
            <Login />
        </div>
    );
};

export default Home;