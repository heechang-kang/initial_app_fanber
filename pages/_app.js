import { MoralisProvider } from "react-moralis";
import { ChakraProvider } from '@chakra-ui/react'

import "../styles/globals.css";



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MoralisProvider serverUrl="https://urapndduxokq.usemoralis.com:2053/server" appId="yKGjianvteFxAj33SimVv1KpvomYKHXhB8IFfHeM">
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>
  );
}

export default MyApp;
