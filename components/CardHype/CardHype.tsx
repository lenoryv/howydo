import styles from '@components/CardHype/CardHype.module.css'
import Image from 'next/Image'

type CardProps = {
    img: string
}

function CardHype({ img }: CardProps) {
    return (
        <div className={styles.card}>
            <Image src={img} width={280} height={280} />
            <div className={styles.buttonCard}>
                <span>View</span>
            </div>
        </div>
    )
}
export default CardHype;