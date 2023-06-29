import "@/styles/globals.css";
import Header from "@/components/Header";
import { SWRConfig } from "swr";
import { Container } from "@mui/material";
import AppProvider from "@/contexts/AppProvider";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Header />
      <Container maxWidth="xl">
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </Container>
      <Footer />
    </AppProvider>
  );
}
