import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import navLogo from '../../../assets/Cottage Home.png';
import useAdmin from '../../Hooks/UseAdmin';
import { AuthContext } from '../Context/AuthProvider';
import './Nav.css';


const NavBar = () => {
    // const { pathname } = useLocation();

    const { user, logOut } = useContext(AuthContext)
    // console.log(user)
    const [isAdmin] = useAdmin(user?.email)

    // console.log(isAdmin)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const [navColor, setNavColor] = useState(false)

    // useEffect(() => {

    //     if (pathname === '/contacts') {
    //         setNavColor(true)


    //     }


    //     else {
    //         setNavColor(false)
    //     }



    // }, [pathname])

    // #49465D

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // top-0 z-50
    // #164273

    window.onscroll = function () { myFunction() };

    function myFunction() {
        if (window.scrollY > 5) {
            document.getElementById("navBar").className = "customColor";
        }
        if (window.scrollY < 5) {
            document.getElementById("navBar").className = "";
        }
    }


    return (
        <div className="sticky top-0  roboto  z-50" id='navBar'>
            <div className="px-4 pt-4 pb-6 mx-auto nav-size">
                <div className="relative flex items-center justify-between">
                    <NavLink
                        to='/'
                        aria-label="Cottage Home Care Services"
                        title="Cottage Home Care Services"
                        className="inline-flex items-center"
                    >
                        <div>
                            <div className='flex items-center '>
                                <img src={navLogo} className='nav-img  shadow-2xl p-2 border-2 border-primary rounded-full' alt="" />
                                <h5 className={` ml-4  font-semibold tracking-wide text-[#00A6B2] transition-colors duration-200 nav-font Coco-gothic `}>
                                    Cottage Home Care Services
                                    <hr className='border-[1px] -mt-0.5 border-[#49465D]' />
                                    <p className='font-semibold top-title text-center text-[#49465D]'>

                                        THE RIGHT HOME CARE FOR YOU</p>
                                </h5>

                            </div>




                        </div>

                    </NavLink>

                    <ul id='nav-text' className="flex items-center hidden space-x-5 lg:flex Berlin">
                        <li>
                            <NavLink
                                to='/home'
                                aria-label="Home"
                                title="Home"
                                className={`font-medium    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white   uppercase nav-text hover-underline-animation `}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/services'
                                aria-label="services"
                                title="services"
                                className={`font-medium    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white   uppercase nav-text hover-underline-animation`}
                            >
                                Services
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to='/contacts'
                                aria-label="Contact US"
                                title="Contact US"
                                className={`font-medium    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white   uppercase nav-text hover-underline-animation`}
                            >
                                Contact US
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='/hhaCertification'
                                aria-label="HHA Certification"
                                title="HHA Certification"
                                className={`font-medium    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white   uppercase nav-text hover-underline-animation`}
                            >
                                HHA Certification
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='/covid'
                                aria-label="Covid-19"
                                title="Covid-19"
                                className={`font-medium    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white   uppercase nav-text hover-underline-animation`}
                            >
                                Covid-19
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to='/resources'
                                aria-label="Resources"
                                title="Resources"
                                className={`font-medium    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white   uppercase nav-text hover-underline-animation`}
                            >
                                Resources
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                aria-label="Blog"
                                title="Blog"
                                className={`font-medium    tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white   uppercase nav-text hover-underline-animation`}
                            >
                                Blog
                            </NavLink>
                        </li>
                        {
                            user?.uid && <>
                                {
                                    isAdmin && <>

                                        <li>
                                            <NavLink
                                                to='/dashBoard'
                                                aria-label="Dash Board"
                                                title="Dash Board"
                                                className={`fo font-medium  text-base  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white   uppercase nav-text hover-underline-animation`}
                                            >
                                                Dash Board
                                            </NavLink>
                                        </li>


                                    </>
                                }

                            </>
                        }
                        {
                            user?.uid ? <>

                                <li className='nav-user'>

                                    <img src={user?.photoURL}
                                        title={user?.displayName}
                                        className='rounded-full h-12 w-12 border-primary border-[2px] nav-text' alt="" />
                                </li>

                                <li>

                                    <button
                                        onClick={handleLogOut}
                                        className='bg-primary  lg:px-6 lg:py-3 px-3 py-2 lg:text-base  rounded-full text-white bg-hov2  uppercase nav-text'>
                                        Sign Out
                                    </button>

                                </li>

                            </>



                                :
                                <>
                                    <li>
                                        <NavLink
                                            to='/login'
                                            aria-label="Sign Up"
                                            title="Sign Up"
                                            className={`font-medium  text-lg  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white  nav-text `}
                                        >
                                            <button className='bg-primary  lg:px-6 lg:py-3 px-3 py-2 lg:text-base  rounded-full text-white bg-hov2 uppercase nav-text '>
                                                Sign In
                                            </button>
                                        </NavLink>
                                    </li>

                                </>
                        }


                    </ul>

                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline z-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-50">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink
                                                to='/'
                                                aria-label="Learn With Programming"
                                                title="Learn With Programming"
                                                className="inline-flex items-center"
                                            >
                                                <img src={navLogo} className='w-16 h-16 rounded-full border-2 border-primary p-1' alt="" />
                                                <span className="ml-2 text-2xl text-primary font-medium  tracking-wide hover:text-blue-900">
                                                    Cottage Home <br /> Care Services
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>





                                        {/* <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to='/home'
                                                    aria-label="Home"
                                                    title="Home"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/services'
                                                    aria-label="services"
                                                    title="services"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Services
                                                </NavLink>
                                            </li>


                                            <li>
                                                <NavLink
                                                    to='/contacts'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Contact US
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to='/covid'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Covid-19
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to='/hhaCertification'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    HHA Certification
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/resources'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Resources
                                                </NavLink>
                                            </li>



                                            {
                                                isAdmin && <>

                                                    <li>
                                                        <NavLink
                                                            to='/dashBoard'
                                                            aria-label="Dash Board"
                                                            title="DashBoard"
                                                            className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                        >
                                                            Dash Board
                                                        </NavLink>
                                                    </li>

                                                </>
                                            }

                                            <li>
                                                <NavLink
                                                    to='/blog'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/blog'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-[#49465D] transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>





                                        </ul> */}

                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to='/home'
                                                    aria-label="Home"
                                                    title="Home"
                                                    className={`font-medium  text-base  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white  uppercase`}
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/services'
                                                    aria-label="services"
                                                    title="services"
                                                    className={`font-medium  text-base  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white  uppercase`}
                                                >
                                                    Services
                                                </NavLink>
                                            </li>


                                            <li>
                                                <NavLink
                                                    to='/contacts'
                                                    aria-label="Contact US"
                                                    title="Contact US"
                                                    className={`font-medium  text-base  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white  uppercase`}
                                                >
                                                    Contact US
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/hhaCertification'
                                                    aria-label="HHA Certification"
                                                    title="HHA Certification"
                                                    className={`font-medium  text-base  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white  uppercase`}
                                                >
                                                    HHA Certification
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to='/covid'
                                                    aria-label="Covid-19"
                                                    title="Covid-19"
                                                    className={`font-medium  text-base  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white  uppercase`}
                                                >
                                                    Covid-19
                                                </NavLink>
                                            </li>


                                            <li>
                                                <NavLink
                                                    to='/resources'
                                                    aria-label="Resources"
                                                    title="Resources"
                                                    className={`font-medium  text-base  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white  uppercase`}
                                                >
                                                    Resources
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/blog'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className={`font-medium  text-base  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white  uppercase`}
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            {
                                                user?.uid && <>
                                                    {
                                                        isAdmin && <>

                                                            <li>
                                                                <NavLink
                                                                    to='/dashBoard'
                                                                    aria-label="Dash Board"
                                                                    title="Dash Board"
                                                                    className={`font-medium  text-base  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white  uppercase`}
                                                                >
                                                                    Dash Board
                                                                </NavLink>
                                                            </li>


                                                        </>
                                                    }

                                                </>
                                            }
                                            {
                                                user?.uid ? <>

                                                    <li>

                                                        <img src={user?.photoURL}
                                                            title={user?.displayName}
                                                            className='rounded-full h-12 w-12 border-primary border-[2px]' alt="" />
                                                    </li>

                                                    <li>

                                                        <button
                                                            onClick={handleLogOut}
                                                            className='bg-primary  lg:px-6 lg:py-3 px-3 py-2 lg:text-base text-base rounded-full text-white bg-hov2 uppercase'>
                                                            Sign Out
                                                        </button>

                                                    </li>

                                                </>



                                                    :
                                                    <>
                                                        <li>
                                                            <NavLink
                                                                to='/login'
                                                                aria-label="Sign Up"
                                                                title="Sign Up"
                                                                className={`font-medium  text-lg  tracking-wide text-[#49465D] transition-colors duration-200  
                                ${navColor && 'customWhite'} white  uppercase`}
                                                            >
                                                                <button className='bg-primary  lg:px-6 lg:py-3 px-3 py-2 lg:text-base text-base rounded-full text-white bg-hov2 uppercase'>
                                                                    Sign In
                                                                </button>
                                                            </NavLink>
                                                        </li>

                                                    </>
                                            }


                                        </ul>


                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavBar;