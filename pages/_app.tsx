import type { AppProps } from 'next/app'
import '../styles/App.scss'
import 'normalize.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
