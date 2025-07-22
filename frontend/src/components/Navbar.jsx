/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseCircleSharp } from "react-icons/io5";
import csaLogo from '../assets/CSA-logo.png';
import { routes } from "../helpers/routes";

const Navbar = ({ theme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <section className="flex justify-between items-center shadow-lg fixed top-0 left-0 w-full h-24 z-50 bg-gray-400/50 px-1 lg:px-16 backdrop-blur-md">

            <a href={routes[0].path}>
                <div className="overflow-hidden h-full lg:h-16 w-auto text-black flex justify-center items-center pl-4">
                    <img src={csaLogo} alt="nav-logo" className="h-[4.5rem] md:h-[4.5rem] 2xl:h-[5rem]" />
                </div>
            </a>
            <div className="flex gap-5 items-center">
                <nav className="hidden lg:block">
                    <ul style={theme === 'light' ? { color: 'black' } : { color: 'white' }} className="flex items-center gap-7 relative">
                        <li>
                            <a href={routes[0].path} className="hover:!text-gray-600 !text-white font-thin transition-all duration-500 text-base/tight">HOME</a>
                        </li>
                        <li>
                            <a href={routes[1].path} className="hover:!text-gray-600 !text-white font-thin transition-all duration-500">ABOUT US</a>
                        </li>
                        <li
                            className="relative group"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <a href={routes[2].path} className="hover:!text-gray-600 !text-white font-thin transition-all duration-500">
                                SERVICES
                            </a>
                        </li>
                        <li>
                            <a href={routes[3].path} className="hover:!text-gray-600 !text-white font-thin transition-all duration-500">BOARD</a>
                        </li>
                        <li>
                            <a href={routes[4].path} className="hover:!text-gray-600 !text-white font-thin transition-all duration-500">NEWS</a>
                        </li>
                        <li>
                            <a href={routes[11].path} className="hover:!text-gray-600 !text-white font-thin transition-all duration-500">CONTACT US</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="block lg:hidden p-3">
                <FcMenu
                    className="text-3xl cursor-pointer !text-white"
                    onClick={handleMobileMenuToggle}
                    size={30}
                />
            </div>

            <div className="hidden lg:block">
                {/* <Link
                    to={'#'}
                    className="!text-white bg-red-600 p-2 px-4 rounded-lg hover:bg-white hover:!text-black transition-all duration-500"
                >
                    DONATE
                </Link> */}
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                        className="fixed top-0 right-0 w-full bg-[#dddddd] bg-opacity-50 z-40 flex justify-end"
                        onClick={handleMobileMenuToggle}
                    >
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 40 }}
                            className="w-full bg-gray-900/60  shadow-lg p-6 flex items-center justify-between"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ul className="flex flex-col items-start gap-3 text-black">
                                <li>
                                    <Link to={routes[0].path} className="text-xs md:text-lg !text-gray-200  hover:text-gray-500 transition-all duration-500" onClick={handleMobileMenuToggle}>Home</Link>
                                </li>
                                <li>
                                    <a href={routes[1].path} className="text-xs md:text-lg !text-gray-200  hover:text-gray-500 transition-all duration-500" onClick={handleMobileMenuToggle}>About Us</a>
                                </li>
                                <li className="relative group" >
                                    <a href={routes[2].path} className="text-xs md:text-lg !text-gray-200  hover:text-gray-500 transition-all duration-500" onClick={() => { isDropdownOpen ? setIsDropdownOpen(false) : setIsDropdownOpen(true) }}>
                                       Services 
                                    </a>
                                </li>
                                <li>
                                    <a href={routes[3].path} className="text-xs md:text-lg !text-gray-200  hover:text-gray-500 transition-all duration-500" onClick={handleMobileMenuToggle}>Board</a>
                                </li>
                                <li>
                                    <a href={routes[4].path} className="text-xs md:text-lg !text-gray-200  hover:text-gray-500 transition-all duration-500" onClick={handleMobileMenuToggle}>News</a>
                                </li>
                                <li>
                                    <a href={routes[11].path} className="text-xs md:text-lg !text-gray-200  hover:text-gray-500 transition-all duration-500" onClick={handleMobileMenuToggle}>Contact</a>
                                </li>
                                <div className="w-full h-[1px] bg-gray-400 my-3"></div>
                                {/* <li>
                                    <Link to={'#'} className="!text-white bg-red-600 p-2 px-4 rounded-lg  transition-all duration-500" onClick={handleMobileMenuToggle}>Donate</Link>
                                </li> */}
                            </ul>
                            <div className="text-3xl cursor-pointer hover:scale-110 transition-all duration-300 text-white" onClick={() => { handleMobileMenuToggle(); setIsDropdownOpen(false); }}>
                                <IoCloseCircleSharp />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
};

export default Navbar;