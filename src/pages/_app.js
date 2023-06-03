import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <title>URIOK.com - Free URL Shortening Service</title>
      </Head>

      <div className="max-w-xl mx-auto px-4 dark:text-gray-300 text-gray-600">
        <Header />
        <main>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </main>
        <Footer />
      </div>
    </>
  );
}
