import React from 'react';
import QrReader from 'react-qr-scanner'
import { useNavigate } from 'react-router-dom';

const Scan = () => {

    const navigate = useNavigate();

    const [scanner, setScanner] = React.useState(false)
    const scannerActive = () => {
        setScanner(true)
    }

    const previewStyle = {
        height: 240,
        width: 320,
    }

    const handleScan = data => {
        if (data) {
            console.log(data.text)
            // go to the url
            setScanner(false)
            window.location.href = data.text
        }
    }
    const handleError = err => {
        console.error(err)
        setScanner(false)
    }

    return (
        <div className='bg-gradient-to-r from-[#6456F0] to-[#9715FC] py-28 min-h-screen'>
            <div className='w-5/6 lg:w-1/3  px-10 py-20 mx-auto bg-white rounded-lg  text-center'>
                {
                    !scanner && (
                        <div>
                            <img className='w-[200px] mx-auto ' src="https://www.nicepng.com/png/detail/216-2167957_icon-welcome-icon.png" alt="" />
                            <h4 className='text-2xl font-bold py-5'>
                                Welcome to the shop
                            </h4>
                        </div>
                    )
                }
                {
                    !scanner && <button onClick={scannerActive} className='bg-[#6456F0] text-white px-7 py-2 rounded-md'>
                        Scan QR code
                    </button>
                }

                {
                    scanner && <QrReader
                        delay={300}
                        style={previewStyle}
                        onError={handleError}
                        onScan={handleScan}
                    />
                }
            </div>
        </div>
    );
};

export default Scan;