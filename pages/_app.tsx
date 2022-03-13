import { AppProps } from 'next/app'
import '../global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
