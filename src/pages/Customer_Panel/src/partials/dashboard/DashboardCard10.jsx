import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image044 from '../../images/Line3.jpg';


function DashboardCard10() {

  const customers = [
    {
      id: '0',
      image: Image01,
      name: 'Ali Ranjbran',
      email: 'Ali@gmail.com',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200" style={{backgroundColor:"#1E293B",border:"none"}}>
      <header className="px-5 py-4 ">
        <h2 className="font-semibold text-slate-800" style={{color:"gray"}}>اطلاعات مشتری</h2>
      </header>
      <div className="p-3">
        <img src={Image044} />
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr style={{backgroundColor:"#1E293B"}}>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left"></div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">نام</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">ایمیل</div>
                </th>
                {/* <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Country</div>
                </th> */}
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.name}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{customer.email}</div>
                      </td>
                      {/* <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.location}</div>
                      </td> */}
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
