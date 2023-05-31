import React from 'react'
import DetailBar from '../components/DetailBar/DetailBar'
import GeneralInformation from '../components/GeneralInfo/GeneralInfo'
import DeviceTable from '../components/DeviceStatus/DeviceStatus'
import LiveStatistic from '../components/LiveStatistic/LiveStatistic'
import ActivityLog from '../components/ActivityLog/ActivityLog'
import DeviceLocation from '../components/Location/DeviceLocation'
import DomainQuota from '../components/DataUsage/DataUsage'

const Dashboard = () => {
    return (
      <div className="ms-6 w-full h-full">
        <h2 className="text-[24px]">Project</h2>
        <DetailBar />
        <div className="flex flex-wrap mt-3 w-full">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 h-5/6">
            <GeneralInformation />
            <DeviceTable />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 ms-3 h-5/6 ">
            <LiveStatistic />
            <ActivityLog/>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 ms-3 h-5/6">
            <DeviceLocation/>
            <DomainQuota/>
          </div>
        </div>
      </div>
    );
  };
  
  
export default Dashboard
