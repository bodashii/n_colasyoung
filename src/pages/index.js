import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";

// import Nav from './../components/Nav/Nav'
// import About from './../components/About/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nicolas Young</title>{" "}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="src/public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="src/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../public/favicon-16x16.png"
        />
        <link rel="manifest" href="src/public/site.webmanifest" />
        <link rel="icon" href="src/public/favicon.ico" />
        <meta name="description" content="portfolio" />
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
          <ul className="about-section">
            <li>
              <a
                href="https://github.com/maddnty"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                github
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/n_colasyoung"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicolas-young-818560227/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                linkedin
              </a>
            </li>
          </ul>
        </section>
        <contact />
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
