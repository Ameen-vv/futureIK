import React from 'react';

const DetailBar = () => {

  //can be passed as props  
  const campaigns = 12;
  const channels = 9;
  const lastEditedBy = 'varun';
  const lastEdited = 5;

  return (
    <div className="bg-white flex flex-wrap w-11/12 md:w-3/4 lg:w-2/3 xl:w-11/12 h-auto justify-around p-4">
      <div className="w-full md:w-auto mt-3">
        <h2 className='text-[15px] font-bold'>Adidas Mobile</h2>
      </div>
      <div className="flex flex-col mt-3 w-full md:w-auto text-sm ">
        <h2 className='text-textLight'>Campaigns</h2>
        <span>{campaigns}</span>
      </div>
      <div className="flex flex-col mt-3 w-full md:w-auto text-sm">
        <h2 className='text-textLight'>Channels</h2>
        <span>{channels}/10</span>
      </div>
      <div className="flex flex-col mt-3 w-full md:w-auto text-sm">
        <h2 className='text-textLight'>Last Edited By</h2>
        <span>{lastEditedBy}</span>
      </div>
      <div className="flex flex-col mt-3 w-full md:w-auto text-sm">
        <h2 className='text-textLight'>Last Edited</h2>
        <span>{lastEdited} hours ago</span>
      </div>
    </div>
  );
};

export default DetailBar;
