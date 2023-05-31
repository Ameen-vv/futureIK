import React from 'react';
import Chart from 'react-apexcharts';

const DomainQuota = () => {
  const options = {
    plotOptions: {
      radialBar: {
        hollow: {
          size: '50%',
        },
        dataLabels: {
          showOn: 'always',
          name: {
            show: false,
          },
          value: {
            fontSize: '16px',
            color: '#000',
            offsetY: 8,
            formatter: function (val) {
              return `${val}%`;
            },
          },
        },
        stroke: {
          width: 10,
        },
      },
    },
    colors: ['#0B3366'],
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
            height: 'auto',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const series = [70];
  const dataUsageToday = "66.0";
  const dataUsageThisMonth = "45.0";
  const dataUsageThisWeek = '30.0';

  return (
    <div className="max-w-lg mx-auto p-1 bg-white rounded-lg shadow-md w-full ">
      <h2 className="text-lg font-bold mb-4">Domain Quota</h2>

      <div className="flex gap-4 flex">
        <div className="w-1/3 my-auto">
          <Chart options={options} series={series} type="radialBar" width="100%" height="150" />
        </div>
        <div className="w-1/3 my-auto">
          <h2 className='text-sm text-textLight'>Data Usage</h2>
          <p className='text-lg'>66GB/100GB</p>
        </div>
        <div className="w-1/3">
          <div className="flex flex-col">
            <div className="flex items-center flex-col">
              <p className="text-[12px] font-semibold text-textLight">Today: </p>
              <p className='text-sm'>{dataUsageToday}%</p>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-[12px] font-semibold text-textLight">
                This Month: 
              </p>
              <p className='text-sm'>
              {dataUsageThisMonth}%
              </p>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-[12px] font-semibold text-textLight">
                This Week: 
              </p>
              <p className='text-sm'>
              {dataUsageThisWeek}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainQuota;
