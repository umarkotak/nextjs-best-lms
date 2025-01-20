import "@/styles/globals.css";

import { ThemeProvider } from "@/components/layouts/ThemeProvider";
import { CookiesProvider } from "react-cookie";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { AdminLayout } from "@/components/layouts/AdminLayout";
import { Geist, Roboto } from 'next/font/google'

const roboto = Geist({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  const pathName = usePathname()

  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Head>
            <title>Best LMS</title>
          </Head>

          <main className={roboto.className}>
            {/* <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout> */}

            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          </main>

        </ThemeProvider>
      </CookiesProvider>
    </>
  );
}
