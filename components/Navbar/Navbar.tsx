import styles from '@components/Navbar/Navbar.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';

function Navbar() {
    const { pathname } = useRouter()
    return (
        <div className={styles.navbar} id="myNavbar">
            <a className={pathname === "/" ? styles.active : ""} href="/">
                Home
            </a>
            <a className={pathname === "/about" ? styles.active : ""} href="/about">
                About
            </a>
            <a href="/contact">Contact</a>

            <a href="/howydo" className="icon"></a>
        </div>
    )
}
export default Navbar;