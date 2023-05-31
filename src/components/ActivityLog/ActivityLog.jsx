import React from 'react';

const ActivityLog = () => {

    const data = [
        {
            name: "Device",
            desc: 'DeviceFutureIK-device 1 report generated successfully',
            date: '16 Mar 2023,06:30:25 PM'
        },
        {
            name: "Device",
            desc: 'DeviceFutureIK-device 1 report generated successfully',
            date: '16 Mar 2023,06:30:25 PM'
        },
        {
            name: "Device",
            desc: 'DeviceFutureIK-device 1 report generated successfully',
            date: '16 Mar 2023,06:30:25 PM'
        }
    ]
    return (
        <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md w-full mt-2 h-1/2">
            <h1 className="text-lg font-bold mb-2">Activity Log</h1>
            {
                data.map((item) => (
                    <>
                        <div className="flex items-center space-x-4 mt-2">
                        <div className="flex-shrink-0">
                            <img src="/icons/Monitor.png" alt="Monitor Icon" width={20} height={20} />
                        </div>
                        <div className="flex-grow">
                            <h1 className="text-md font-semibold">{item.name}</h1>
                            <p className="text-xs text-gray-500 w-64">{item.desc}</p>
                        </div>
                        <div className="w-32">
                            <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                    </div>
                        <hr className='mt-1'/>
                    </>
                ))
            }

        </div>
    );
};

export default ActivityLog;
