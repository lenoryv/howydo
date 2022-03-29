import NavItem from '@components/NavItem/NavItem';
import { useState } from 'react';
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav className="sticky top-0 h-14 bg-l-black z-20 px-6 sm:px-6 py-2.5 md:col-span-3">
            <div className="container flex flex-wrap justify-between items-center">
                <a 
                className="flex items-center">
                    {/* <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                    <span className="self-center text-sm font-light text-white">HOWYDO</span>
                </a>

                {showNav ? (
                    <HiOutlineMenuAlt3
                        onClick={() => setShowNav(!showNav)}
                        className="md:hidden block w-10 h-10 p-2 cursor-pointer bg-gray-500 opacity-90 stroke-black rounded-md"
                    />
                ) : (
                    <HiOutlineMenuAlt2
                        onClick={() => setShowNav(!showNav)}
                        className="md:hidden block w-10 h-10 p-2 cursor-pointer stroke-white"
                    />
                )}
                <ul className={
                    (showNav ? "left-0" : "-left-full") +
                    " bottom-0 md:static fixed top-14 md:flex md:space-x-2 items-center bg-l-black md:w-auto w-screen md:text-gray-500 text-white md:space-y-0 space-y-5 transition-left"
                }>
                    <NavItem content="Home" href="/" />
                    <NavItem content="Contact" href="/contact" />
                    <NavItem content="About" href="/about" />
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;