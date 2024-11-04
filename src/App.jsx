import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { AppBar } from './components/AppBar'
import { SideBar } from './components/SideBar'
import { SearchBar } from './components/SearchBar'
import { RefundsDashboard } from './components/RefundsDashboard'

function App() {
  const [hamStatus, setHamStatus] = useState(true)

  return (
    <div className='flex'>
      <SideBar hamStatus={hamStatus} setHamStatus={setHamStatus}/>
      <div className={`duration-300 ease-in-out top-0 right-0 ${
          hamStatus ? 'w-[100vw]' : 'w-[70vw] md:w-[85vw]'
        }`}>
        <AppBar hamStatus={hamStatus} setHamStatus={setHamStatus}/>
        <div className='px-6'>
          <div className='font-semibold text-lg pt-5'>Overview</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 pt-5'>
            <RevenueCard title="Next Payout" amount="2,312.23" orderCount={13} active={true}/>
            <RevenueCard title="Amount Pending" amount="92,312.20" orderCount={13}/>
            <RevenueCard title="Amount Processed" amount="23,92,312.19"/>
          </div>
          <div className='font-semibold text-lg mt-5'>
            Transactions | This month
          </div>
          <div className='flex mt-5'>
            <div className='bg-gray-200 rounded-full py-1 px-4 text-gray-600'>Payouts (22)</div>
            <div className='bg-dukaan-active-blue rounded-full py-1 px-4 text-white ml-2'>Refunds (6)</div>
          </div>
          <div className='flex px-8 mt-8 justify-between'>
            <div className='w-[330px]'>
              < SearchBar placeholder={"Order ID or Transaction ID"}/>
            </div>
            <div className='flex text-gray-700'>
              <div className='flex px-2 border mr-2 rounded-sm'>
                <div className='pt-1'>Sort</div>
                <div className='flex flex-col justify-center pl-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                </div>
              </div>
              <div className='flex flex-col justify-center px-2 border rounded-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg> 
              </div>
            </div>
          </div>
          <div className='px-8 mt-3'>
            < RefundsDashboard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
