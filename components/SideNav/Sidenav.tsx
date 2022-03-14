import styles from '@components/Sidenav/Sidenav.module.css'
import { useRouter } from 'next/router';

function Sidenav() {
    const { pathname } = useRouter()
    return (
        <div className={styles.sidenav}>
            <a href="/new">New</a>
            <a href="/new">Presentaciones</a>
        </div>
    )
}
export default Sidenav;