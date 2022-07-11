import React from "react";
import Link from "next/link";
import Image from "next/image";

import Brand from "../public/images/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="brand">
            <Link href="/"><Image src={Brand}  width="100" height="90" className="brand-logo" /></Link>
        </div>
        <ul className="directory">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
