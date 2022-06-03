import { MoralisProvider } from 'react-moralis'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://urapndduxokq.usemoralis.com:2053/server"
      appId="yKGjianvteFxAj33SimVv1KpvomYKHXhB8IFfHeM"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
