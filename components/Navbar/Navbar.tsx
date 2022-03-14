import styles from '@components/Navbar/Navbar.module.css'
import { useRouter } from 'next/router';

function Navbar() {
    const { pathname } = useRouter()
    return (
        <ul className={styles.navbar} id="myNavbar">
            <div>
                Howydo
            </div>
            <li>
                <a className={pathname === "/" ? styles.active : ""} href="/">
                    Home
                </a>
            </li>
            <li>
                <a className={pathname === "/about" ? styles.active : ""} href="/about">
                    About
                </a>
            </li>
            <li>
                <a href="/contact">
                    Contact
                </a>
            </li>
        </ul>
    )
}
export default Navbar;