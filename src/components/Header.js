import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div>
                <h3>Nicolas Young</h3>
            </div>
            <nav>
                <ul>
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