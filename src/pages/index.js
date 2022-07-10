import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";

// import Nav from './../components/Nav/Nav'
// import About from './../components/About/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nicolas Young</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="..public/favicon.ico" />
      </Head>

      <Header />
      {/* <Nav>
        <Link href="/api/about">About</Link>
        </Nav> */}

      <main>
        <h1 className="title">Nicolas Young</h1>
        <About />
      </main>

      <footer>
        <section>
          <h3 className="title">Contact</h3>
          <p className="description">drop me a message broh!</p>
        </section>
      </footer>
    </div>
  );
}
