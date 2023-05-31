import React from 'react';

const DeviceTable = () => {
  const devices = [
    { name: 'Device 1', status: 'Active', lastSeen: new Date('2023-05-30T10:30:00') },
    { name: 'Device 2', status: 'Inactive', lastSeen: new Date('2023-05-29T14:45:00') },
    { name: 'Device 3', status: 'Active', lastSeen: new Date('2023-05-31T09:15:00') },
    { name: 'Device 3', status: 'Active', lastSeen: new Date('2023-05-31T09:15:00') },
    { name: 'Device 3', status: 'Active', lastSeen: new Date('2023-05-31T09:15:00') },
    { name: 'Device 3', status: 'Active', lastSeen: new Date('2023-05-31T09:15:00') },
    { name: 'Device 3', status: 'Active', lastSeen: new Date('2023-05-31T09:15:00') },
  ];

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md w-full mt-3 h-1/2">
      <h2 className="text-lg font-bold mb-4">Device Information</h2>

      <div className="overflow-x-auto">
      <div className='max-h-40 overflow-y-scroll'>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-sm">Device Name</th>
              <th className="text-sm">Status</th>
              <th className="text-sm">Last Seen</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="px-4 py-2 text-sm">{device.name}</td>
                <td className="px-4 py-2 text-sm">
                  {device.status === 'Active' ? (
                    <div className="bg-green-500 text-white rounded text-[12px] flex justify-center">
                      Online
                    </div>
                  ) : (
                    <div className="bg-red-500 text-white rounded text-[12px] flex justify-center">
                        Offline
                    </div>
                  )}
                </td>
                <td className="px-4 py-2 text-sm">
                  {device.lastSeen.toLocaleString('en-US', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default DeviceTable;
