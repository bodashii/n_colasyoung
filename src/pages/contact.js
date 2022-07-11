import React from "react";

import Header from "../components/Header";

export default function contact() {
  return (
    <section>
      <Header />
      <h4 className="title">Other places to find me!</h4>
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
  );
}
