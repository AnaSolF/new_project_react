import "@/styles/globals.css";
import MainContextProvider from "@/Context/MainContextProvider";

export default function App({ Component, pageProps }) {
  //Envolvemos en el contexto app (A todo lo que querramos aplicar el context)

  return (
    <MainContextProvider>
      <Component {...pageProps} />
    </MainContextProvider>
  );
}
