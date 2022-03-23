import styles from '@components/Banner/Banner.module.css'
import CardHype from '@components/CardHype/CardHype';
import Divider from '@components/Divider/Divider';
import Image from 'next/image'

const hype = '/images/CamisetaIND.jpg'
const img = '/images/Dog.jpg';
const nets = [
  {
    name: 'linkedin',
    icon: '/icons/linkedin48.png',
  },
  {
    name: 'instagram',
    icon: '/icons/instagram48.png',
  },
  {
    name: 'github',
    icon: '/icons/github64.png',
  }
]

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.hype}>
        <CardHype img={hype} />
      </div>
      <Divider />
      <div className={styles.profile}>
        <div className={styles.dot}>
          <Image src={img} width={72} height={72} alt={'hype'} />
        </div>
        <div className={styles.boxText}>
          <p>Luis Enrique Ortiz Rivera</p>
          <p>Developer and Creator</p>
        </div>
        <div className={styles.buttonGroup}>
          {nets.map((net) => {
            return (
              <div className={styles.iconButton} key={net.name}>
                <img src={net.icon} width={24} height={24} />
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.sponsors}>
        + Add Colaborator or Auspiciants
      </div>
    </div>
  )
}
export default Banner;