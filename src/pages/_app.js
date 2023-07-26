import "@/styles/globals.css";
import MainContextProvider from "@/Context/MainContextProvider";
//import { UserContextProvider } from "@/Context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContextProvider from "@/Context/UserContextProvider";
import CartContextProvider from "@/Context/CartContext";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function App({ Component, pageProps }) {
  //Envolvemos en el contexto app (A todo lo que querramos aplicar el context)

  return (
    <MainContextProvider>
      <UserContextProvider>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </UserContextProvider>
    </MainContextProvider>
  );
}
