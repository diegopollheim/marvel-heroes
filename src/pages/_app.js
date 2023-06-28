import "@/styles/globals.css";
import Header from "@/components/Header";
import {SWRConfig} from "swr";
import { Container } from "@mui/material";

export default function App({Component, pageProps}) {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <SWRConfig
          value={{
            fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </Container>
    </>
  );
}
