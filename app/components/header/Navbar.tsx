import { GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid';


function Navbar() {
    return <>
        <div className='flex space-x-4 items-center justify-end text-gray-500'>
            <p className='hidden md:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='h-6 cursor-pointer' />
            <div className='flex space-x-2 border-2 border-gray-300 p-2 rounded-full'>
                <MenuIcon className='h-6' />
                <UserCircleIcon className='h-6' />
            </div>
        </div>
    </>
}

export default Navbar