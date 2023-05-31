import React from 'react';

const DeviceLocation = () => {
  return (
    <div className="max-w-lg mx-auto p-1 bg-white rounded-lg shadow-md w-full h-1/2 mb-2">
      <h2 className="text-lg font-bold mb-4">Location</h2>

      <div className="relative overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2581219318393!2d-122.41941508501949!3d37.774929579758664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807f41da8b9f%3A0x4a501367f076adff!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1624644201335!5m2!1sen!2sus"
          title="Location"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DeviceLocation;
