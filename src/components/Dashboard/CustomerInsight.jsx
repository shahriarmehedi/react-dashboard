import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: '',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels: labels,
    datasets: [
        {
            label: 'New Customers',
            data: [
                // between 0-400
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),
                Math.floor(Math.random() * 400),

            ],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.5,
        }
    ],
};

const CustomerInsight = () => {
    return (
        <div>
            <Line options={options} data={data} />
        </div>
    );
};

export default CustomerInsight;