import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="brand">
          <span>Nicolas Young</span>
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
