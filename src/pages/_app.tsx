import Head from "next/head";
import "../styles/base.scss";
import "../styles/fonts.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CV&nbsp;|&nbsp;Amir Ahmady</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
