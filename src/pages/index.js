import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import styles from './../styles/Home.module.css';



// import Nav from './../components/Nav/Nav'
// import About from './../components/About/About'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas Young</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="..public/favicon.ico" />
      </Head>
      <section>
        <h1>My Portfolio</h1>
        <h3>Contact</h3>
        <p>drop me a message broh!</p>
      </section>
      <Header />
      {/* <Nav>
        <Link href="/api/about">About</Link>
        </Nav> */}

      <main>
      </main>

      <footer className={styles.footer}>
       <p>in progress</p>
      </footer>
    </div>
  );
}
