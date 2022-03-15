import styles from '@components/CardHype/CardHype.module.css'

type CardProps = {
    img: string
}

function CardHype({ img }: CardProps) {
    return (
        <div className={styles.card}>
            <img src={img} width={280} height={280} />
            <div className={styles.buttonCard}>
                <span>View</span>
            </div>
        </div>
    )
}
export default CardHype;