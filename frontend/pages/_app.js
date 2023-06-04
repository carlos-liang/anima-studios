import "../styles/global.css"
import Head from "next/head"
import Navbar from "../components/Navbar";

export default function AppWrapper({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anima Studio</title>
      </Head>
        <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
