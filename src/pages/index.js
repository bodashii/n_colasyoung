import Head from "next/head";
import Header from "../components/Header";

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
  
      <section>
        <h1 className="text-3xl font-bold underline">My Portfolio</h1>
        <h3>Contact</h3>
        <p>drop me a message broh!</p>
      </section>
      <Header />
      {/* <Nav>
        <Link href="/api/about">About</Link>
        </Nav> */}

      <main></main>

      <footer>
        <p>in progress</p>
      </footer>
    </div>
  );
}
