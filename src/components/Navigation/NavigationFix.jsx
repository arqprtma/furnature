import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function NavigationFix() {
    const [navbar, setNavbar] = useState(false);
  return (
    <>
        <nav className='w-full bg-white border-b-2 mx-auto'>
            <div className="container justify-between space-y-2 px-5 drop-shadow-xl flex mx-auto">
                <div className='flex'>
                <img className='h-14 rounded rounded-lg mt-2 mb-2' src="/src/assets/meubel.png" alt="meubel" />
                <h1 className='pt-7 ps-6'>FURNATURE</h1>
                </div>
                <div className='ms-15 hidden lg:block'>
                    <ul className='flex'>
                        <li className='p-5'><a href="">Home</a></li>
                        <li className='p-5'><a href="">Shop</a></li>
                        <li className='p-5'><a href="">About</a></li>
                        <li className='p-5'><a href="">Contact</a></li>
                    </ul>   
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex'>
                        <li className='mt-1 btn btn-primary me-4'><a href="">Sing In</a></li>
                        <li className='mt-1 btn btn-secondary'><a href="">Sing Up</a></li>
                    </ul>   
                </div>
                <div 
                    className="lg:hidden"
                >
                    {/* membuat border terlebih dahulu untuk mentrigger onclick kemudian menampilkan burgermenu / evenodd menu */}
                    <button 
                        className="p-2 mt-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={()=> setNavbar(!navbar)}
                        >
                            {navbar ? (
                                 <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="w-6 h-6"
                                 viewBox="0 0 20 20"
                                 fill="currentColor"
                               >
                                 <path
                                   fillRule="evenodd"
                                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                   clipRule="evenodd"
                                 />
                               </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            )}
                    </button>
                </div>
                 
            </div>
            <div className={`flex-1 justify-self-center  ${navbar ? "block" : "hidden"}`} >
                
                        <ul className='text-center'>
                            <li className='m-5 cursor-pointer'>
                                <Link>Home</Link>
                            </li>
                            <li className='m-5 cursor-pointer'>
                                <Link>Shop</Link>
                            </li>
                            <li className='m-5 cursor-pointer'>
                                <Link>About</Link>
                            </li>
                            <li className='m-5 cursor-pointer'>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </div>
        </nav>
       
    
    </>
  )

  
}


export default NavigationFix