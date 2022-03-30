import Carousel from '@components/Carousel/Carousel';
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
    <div className="h-fit p-6 md:p-6 md:sticky md:top-20 md:h-fit md:w-80 mt-0 md:ml-0 md:m-6 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 m-6 bg-gray-50 rounded-md span-4 flex flex-col justify-between">
      <Carousel />
      <Divider />
      <div className="flex flex-col items-center justify-center">
        <Image className="rounded-full" src={img} width={72} height={72} alt={'hype'} />
        <span className="mt-4 text-md">Luis Enrique Ortiz Rivera</span>
        <span className="font-semibold text-sm">Developer and Creator</span>
        <div className="flex my-4 items-center align-center">
          {nets.map((net) => {
            return (
              <button key={net.name} type="button" className="mr-2 md:mr-0 last:mr-0 hover:bg-sky-100 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                <img className="w-5 h-5" src={net.icon}/>
              </button>
            )
          })}
        </div>
      </div>
      <div className="w-full md:my-0 flex rounded p-2 font-normal text-gray-400 align-center text-sm h-16 md:w-full items-center bg-white">
       <span>+ Add Colaborator or Auspiciants</span>
      </div>
    </div>
  )
}
export default Banner;