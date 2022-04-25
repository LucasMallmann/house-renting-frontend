import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '@/config'
import { Header } from '@/components/Header'

import 'react-multi-carousel/lib/styles.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import Footer from '@/components/Footer'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
