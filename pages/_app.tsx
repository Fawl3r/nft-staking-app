import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "binance";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} clientId="39020559f22ebc5fa1c550b700ccc3bc"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
