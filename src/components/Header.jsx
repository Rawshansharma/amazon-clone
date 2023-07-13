import React from 'react'
import { MagnifyingGlassIcon,
         ShoppingCartIcon,
         Bars3Icon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header>
        {/* top nav */}
        <div className=' flex items-center bg-gray-800 p-2 flex-grow py-2'>
            <div className='mt-2 mr-4 flex items-center flex-grow sm:flex-grow-0'>
                <img
                src='https://links.papareact.com/f90'
                width={150}
                height={40}
                 className='cursor-pointer'
                alt='lodo-img'
                />
            </div>
            {/* search */}
            <div className=' hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-600 '>
                <input type="text" className='p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4' />
                 <MagnifyingGlassIcon className='h-12 p-4' />
             </div>
             {/* right */}
             <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
             <div className='link'>
               <p>Hello Raushan</p>
               <p className='font-extrabold md:text-sm' >Account & Lists</p>
             </div>
             <div className='link'>
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>orders</p>
             </div>
             <div className='flex relative items-center cursor-pointer hover:underline' >
                <span className='absolute top-0 right-0 md:right-6 text-center h-4 w-4 bg-yellow-400 rounded-full font-bold  '>
                  0
                </span>
               <ShoppingCartIcon className='h-10 '/>
               <p className='hidden md:inline mt-2 font-extrabold md:text-sm'>Cart</p>
             </div>
             </div>      
        </div>
        {/* bottom nav */}
        <div className=' space-x-3 p-2 pl-6 flex items-center bg-gray-700 text-white '>
            <p className='link'>
                <Bars3Icon className='h-6 mr-1'/>
                All
            </p>
            <p className='link'>Prime Videos</p>
            <p className='link'>Amazon Business</p> 
            <p className='link'>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>

            
        </div>
    </header>
  )
}

export default Header