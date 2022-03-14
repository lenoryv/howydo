import styles from '@components/Sidenav/Sidenav.module.css'
import { useRouter } from 'next/router';

function Sidenav() {
    const { pathname } = useRouter()
    return (
        <div className={styles.sidenav}>
            <a href="/new">Nuevos</a>
            <a href="/new">Presentaciones</a>
            <a href="/new">Tips</a>
            <a href="/new">Plantillas</a>
        </div>
    )
}
export default Sidenav;