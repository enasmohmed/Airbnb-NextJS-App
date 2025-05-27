import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Searchbar from '@/app/components/header/Searchbar';
import Navbar from '@/app/components/header/Navbar';

function Header({ placeholder } : { placeholder?: string }) {
  return <header className='sticky top-0 z-50 bg-white shadow-md py-5'>
    <div className='container grid grid-cols-3 relative'>
        <Link href='/' className='relative flex items-center h-10 my-auto'>
            <Image src='/airbnb-logo.png'  alt='logo-image' fill
            className='object-contain object-left' />
        </Link>

        <Searchbar placeholder={placeholder} />
        <Navbar />
    </div>
    
  </header>

}

export default Header