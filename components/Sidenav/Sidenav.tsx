import styles from '@components/Sidenav/Sidenav.module.css'
import { useRouter } from 'next/router';

function Sidenav() {
    const { pathname } = useRouter();
    return (
        <div className={styles.sidenav}>
            <a className={pathname === "/new" ? styles.active : ''} href="/new">
                Nuevos
            </a>
            <a className={pathname === "/tips" ? styles.active : ''} href="/tips">
                Tips
            </a>
            <a href="/new">Plantillas</a>
        </div>
    );
}
export default Sidenav;