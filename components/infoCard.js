import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext'

export const InfoCard = () => {
    const context = useContext(AppContext)
    const data = context.nameContext;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
 { data.map( ({bankName, url, description} , index) => ( 
    <div key={index} className='text-blue-600'>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
         <a href={url}>
             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{bankName}</h5>
         </a>
         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24 min-h-full">{description}</p>
         <a  href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Más info
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
             </svg>
         </a>
     </div>
    </div>
    ))}
    </div>    
  )
}