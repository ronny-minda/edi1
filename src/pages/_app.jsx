import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import Layout from "@/components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1.0"
        />
      </Head>
      <Layout>
        <main className="relative w-full">
          <AnimatePresence>
            <motion.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0 }}
              className="absolute top-0 left-0 w-screen"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </main>
      </Layout>
    </>
  );
}
