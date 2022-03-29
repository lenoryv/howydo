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
    <div className="h-auto md:w-64 mt-0 md:ml-0 md:m-6 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 m-6 bg-sky-50 rounded-md p-4 flex flex-col justify-between">
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