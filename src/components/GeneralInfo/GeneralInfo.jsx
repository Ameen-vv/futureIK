import React from 'react';

const GeneralInformation = () => {
  const convertToPercentage = (value) => {
    return (value / 10) * 100;
  };

  //pass as props
  const projectProgress = 3;
  const userProgress = 2;
  const graphProgress = 5;

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md w-full h-1/2">
      <h2 className="text-lg font-bold mb-4">General Information</h2>

      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <h3 className="text-sm font-semibold mr-4 text-textLight w-1/4">Projects</h3>
          <div className="bg-gray-300 h-4 rounded-lg flex-grow">
            <div
              className="bg-darkBlue h-full rounded-lg"
              style={{ width: `${convertToPercentage(projectProgress)}%` }}
            ></div>
          </div>
            <h3 className="text-sm font-semibold  text-textLight ms-2">{projectProgress}/10</h3>
        </div>

        <div className="flex items-center">
          <h3 className="text-sm font-semibold mr-4 text-textLight w-1/4">Users</h3>
          <div className="bg-gray-300 h-4 rounded-lg flex-grow">
            <div
              className="bg-darkBlue h-full rounded-lg"
              style={{ width: `${convertToPercentage(userProgress)}%` }}
            ></div>
          </div>
          <h3 className="text-sm font-semibold  text-textLight ms-2">{userProgress}/10</h3>
        </div>

        <div className="flex items-center">
          <h3 className="text-sm font-semibold mr-4 text-textLight w-1/4">Graph</h3>
          <div className="bg-gray-300 h-4 rounded-lg flex-grow">
            <div
              className="bg-darkBlue h-full rounded-lg"
              style={{ width: `${convertToPercentage(graphProgress)}%` }}
            ></div>
          </div>
          <h3 className="text-sm font-semibold  text-textLight ms-2">{graphProgress}/10</h3>
        </div>
        <div className="flex items-center">
          <h3 className="text-sm font-semibold mr-4 text-textLight w-1/4">Devices</h3>
          <div className="bg-gray-300 h-4 rounded-lg flex-grow">
            <div
              className="bg-darkBlue h-full rounded-lg"
              style={{ width: `${convertToPercentage(graphProgress)}%` }}
            ></div>
          </div>
          <h3 className="text-sm font-semibold  text-textLight ms-2">{graphProgress}/10</h3>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
