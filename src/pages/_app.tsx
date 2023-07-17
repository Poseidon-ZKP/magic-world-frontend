import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import WalletProvider from "../providers/WalletProvider";
import { ZKShuffleProvider } from "../contexts/ZKShuffle";

import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <ZKShuffleProvider>
          <Component {...pageProps} />
        </ZKShuffleProvider>
      </WalletProvider>
    </QueryClientProvider>
  );
}
