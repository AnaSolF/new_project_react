import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/Header";
import Main from "@/Components/Main";
import Footer from "@/Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { hydrateRoot } from 'react-dom/client';
import { FaReact } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  return (
    <>
      <Head>
        <title>MyFlavor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/FaReact" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
}
