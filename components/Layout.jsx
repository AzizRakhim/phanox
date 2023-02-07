import Head from "next/head";
import Footer from "./Footer";
import favicon from "../public/favicon.ico";

import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Phanox</title>
        <link rel="shortcut icon" href={favicon.src} />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
