import React from 'react'
import Sidebar from '../sidebar/sidebar'
import './dashboard.css'
import { FcInspection } from "react-icons/fc";
import { FcRatings } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcPackage } from "react-icons/fc";

const Dashboard = () => {
  return (
    <>
    {/* <Sidebar/> */}
    <div className='containers'>
       
            <div className='cards'><FcInspection/> 0 <br/><span>Today's Invoices</span></div>
            <div className='cards'><FcRatings/>132<br/><span>Today's sales</span></div>
            <div className='cards'><FcReadingEbook/>200$<br/><span>Today's revenue</span></div>
            <div className='cards'><FcPackage/>20<br/><span>Total products</span></div>
        
    </div>

    </>
  )
}

export default Dashboard