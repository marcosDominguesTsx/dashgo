import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { SidebarDrawerContextProvider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryCliente = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryCliente}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerContextProvider>
          <Component {...pageProps} />
        </SidebarDrawerContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
