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
        <h1 className="title">Portfolio</h1>
        <About />
      </main>

      <footer>
        <section>
          <h3 className="title">Other places to find me!</h3>

          <div>{/* links to git linkedin and twitter go here */}</div>
        </section>
        <section>
          <div className="form-container">
            <form>
              <h3 className="title">You can slide right here!</h3>
                <div className="form-item">
                  <label>E-mail</label>
                  <input type="email" required />
                </div>
                <div className="form-item">
                  <label>Name</label>
                  <input type="text" required />
                </div>
                <div className="form-item">
                  <label>Message</label>
                  <textarea></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send!
                </button>
            </form>
          </div>
        </section>
      </footer>
    </div>
  );
}
