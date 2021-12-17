import React, { useState } from 'react';
import { AcademicCapIcon, BeakerIcon, CameraIcon, ChevronDoubleDownIcon, ChevronDownIcon, ColorSwatchIcon, DesktopComputerIcon, DeviceMobileIcon, GiftIcon, HashtagIcon, IdentificationIcon, MailIcon, MenuIcon, PhoneIcon, PhoneIncomingIcon, ViewListIcon, XIcon } from '@heroicons/react/outline'


import Image from 'next/image';
import Link from 'next/link';



function Header({title}) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div>
            <header className='shadow-md p-2 fixed top-0 w-full z-10 bg-white'>
                <div className="grid grid-cols-3 py-2 items-center border-b-2 border-gray-200 lg:px-96">
                    {/* logo */}
                        <div className="relative h-12 w-24">
                            <Image className='' src="/page-logo.png" alt="blossoms childcare" layout='fill' objectFit='cover'/>
                        </div>
                    {/* Page Title */}
                    <div className='flex text-center justify-center lg:hidden'>
                        <h1 className='text-2xl text-gray-500'>{title.toUpperCase()}</h1>
                    </div>
                    {/* Navigation desktop */}
                    
                    <div className='hidden lg:flex flex-row items-center justify-center'>
                        <Link href="#"><button className="cursor-pointer font-bold hover:bg-pink-200 text-lg text-gray-500 p-2 px-4 rounded-full">Homepage</button></Link>
                        <div className="relative group hidden lg:inline-flex text-lg text-gray-500">
                            <div className="cursor-pointer text-center w-32 font-bold hover:bg-pink-200 p-2 px-4 rounded-full">Our Nursery</div>
                            <div className="absolute z-50 hidden group-hover:flex flex-col h-56 w-72 bg-gray-100 p-2 rounded-2xl shadow-md items-left justify-left top-10">
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 1</p>
                                </Link>
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 2</p>
                                </Link>
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 3</p>
                                 </Link>
                                <Link href="/app">
                                  <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 4</p>
                                </Link>
                            </div>
                        </div>
                        <div className="relative group hidden lg:inline-flex text-lg text-gray-500">
                            <div className="cursor-pointer font-bold hover:bg-pink-200 p-2 px-4 text-center w-32 rounded-full">Our Team</div>
                            <div className="absolute z-50 hidden group-hover:flex flex-col h-56 w-72 bg-gray-100 p-2 rounded-2xl shadow-md items-left justify-left top-10">
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 1</p>
                                </Link>
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 2</p>
                                </Link>
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 3</p>
                                 </Link>
                                <Link href="/app">
                                  <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 4</p>
                                </Link>
                            </div>
                        </div>
                        <div className="relative group hidden lg:inline-flex text-lg text-gray-500">
                            <div className="cursor-pointer font-bold hover:bg-pink-200 p-2 px-4 rounded-full w-32 text-center">For Parents</div>
                            <div className="absolute z-50 hidden group-hover:flex flex-col h-56 w-72 bg-gray-100 p-2 rounded-2xl shadow-md items-left justify-left top-10">
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 1</p>
                                </Link>
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 2</p>
                                </Link>
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 3</p>
                                 </Link>
                                <Link href="/app">
                                  <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 4</p>
                                </Link>
                            </div>
                        </div>
                        <div className="relative group hidden lg:flex text text-lg text-gray-500">
                            <div className="cursor-pointer font-bold hover:bg-pink-200 p-2  rounded-full w-32 text-center">Our Fees</div>
                            <div className="absolute z-50 hidden group-hover:flex flex-col h-56 w-72 bg-gray-100 p-2 rounded-2xl shadow-md items-left justify-left top-10">
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 1</p>
                                </Link>
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 2</p>
                                </Link>
                                <Link href="/app">
                                    <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 3</p>
                                 </Link>
                                <Link href="/app">
                                  <p className="text-center text-gray-500 cursor-pointer rounded-full font-bold hover:bg-pink-200 p-2">Subnav Nav Link 4</p>
                                </Link>
                            </div>
                        </div>
                        <div className="relative group hidden lg:flex text-lg text-gray-500">
                            <div className="cursor-pointer font-bold hover:bg-pink-200 p-2  rounded-full w-32 text-center">Get in touch</div>
                        </div>
                    </div>

                    
                    {/* humberger menu */}
                        <div className="flex justify-end ">
                            <MenuIcon  onClick={toggle}  className='h-12 lg:hidden w-12 p-2 rounded-xl bg-gray-200  text-gray-600'/>
                            <MailIcon className='h-10 w-10 mr-3 text-gray-500 hidden lg:flex border-2 rounded-full p-1 border-pink-200'/>
                            <PhoneIcon className='h-10 w-10 mr-3 text-gray-500 hidden lg:flex border-2 rounded-full p-1 border-pink-200'/>
                            <HashtagIcon className='h-10 w-10 mr-3 text-gray-500 hidden lg:flex border-2 rounded-full p-1 border-pink-200'/>
                        </div>
                </div>
                
                <div className='flex justify-end justify-items-end text-gray-500 lg:px-96'>
                    <ul className='p-2 grid grid-cols-1 lg:grid-cols-5 gap-2'>
                        <li className='text-right flex items-center space-x-1 justify-end'><CameraIcon className='h-7 w-7 hidden lg:inline-grid bg-pink-300 text-white p-1 rounded-full'/><span>3D Virtual Tour</span> <CameraIcon className='h-7 w-7 bg-pink-300  lg:hidden text-white p-1 rounded-full'/></li>
                        <li className='text-right flex items-center space-x-1 justify-end'><IdentificationIcon className='h-7 w-7 hidden lg:inline-grid bg-yellow-300 text-white p-1 rounded-full'/><span>What Makes Us Different</span> <IdentificationIcon className='h-7 lg:hidden w-7 bg-yellow-300 text-white p-1 rounded-full'/></li>
                        <li className='text-right flex items-center space-x-1 justify-end'><ColorSwatchIcon className='h-7 w-7 hidden lg:inline-grid bg-blue-300 text-white p-1 rounded-full'/><span>Indoor & Outdoor Areas</span> <ColorSwatchIcon className='h-7 w-7 lg:hidden bg-blue-300 text-white p-1 rounded-full'/></li>
                        <li className='text-right flex items-center space-x-1 justify-end'><AcademicCapIcon className='h-7 w-7 hidden lg:inline-grid bg-purple-300 text-white p-1 rounded-full'/><span>Learning Through Play</span> <AcademicCapIcon className='h-7 w-7 lg:hidden bg-purple-300 text-white p-1 rounded-full'/></li> 
                        <li className='text-right flex items-center space-x-1 justify-end'><BeakerIcon className='h-7 w-7 hidden lg:inline-grid bg-green-300 text-white p-1 rounded-full'/><span>Typical Routines</span> <BeakerIcon className='h-7 w-7 bg-green-300 lg:hidden text-white p-1 rounded-full'/></li>
                    </ul>
                </div>
            </header>
            <Menu open={open}>
                <button
                aria-label="Close"
                className="absolute bg-gray-200 p-2 rounded-xl top-4 right-2 text-5xl text-white cursor-pointer"
                onClick={toggle}
                >
                    <XIcon className='h-8 w-8 text-gray-600'/>
                </button>
                <MenuContainer>
                <MenuItem href="#">Home</MenuItem>
                <MenuItem href="#">
                    <span>Our Nursery</span>
                    <ChevronDownIcon className='h-6 w-6 text'/>
                </MenuItem>
                <MenuItem href="#">
                    <span>Our Team</span>
                    <ChevronDownIcon className='h-6 w-6 text'/>
                </MenuItem>
                <MenuItem href="#">
                    <span>For Parents</span>
                    <ChevronDownIcon className='h-6 w-6 text'/>
                </MenuItem>
                <MenuItem href="#">
                    <span>Our Fees</span>
                    <ChevronDownIcon className='h-6 w-6 text'/> 
                </MenuItem>
                <MenuItem href="#">Get In Touch</MenuItem>
                </MenuContainer>
            </Menu>
        </div>
    )
}

export default Header

const style = {
    container: `relative top-20 w-full text-center`,
    item: `text-3xl text-gray-400 cursor-pointer hover:text-purple-400`,
    menu: {
      open: `h-full w-full`,
      close: `w-0 h-full`,
      default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-white`,
    },
  };
  
  function Menu({ children, open }) {
    return (
      <div
        className={`${style.menu.default} 
         ${open ? style.menu.open : style.menu.close} z-50`}
      >
        {children}
      </div>
    );
  }
  
  function MenuContainer({ children }) {
    return <div className={style.container}>{children}</div>;
  }
  
  function MenuItem({ children, href }) {
    return (
      <div className="p-2">
        <a href={href} className={`${style.item} flex items-center space-x-2 justify-center`}>
          {children}
        </a>
      </div>
    );
  }

// Dropdown

/* Logic*/

