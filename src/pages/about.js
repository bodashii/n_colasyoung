import React from 'react';
import Link from 'next/link';

export default function about() {
    return (
        <div>
            <h2>
                About Nicolas Young
            </h2>
            <p>This will be some cool stuff about me.</p>
            <Link href="/">back</Link>
        </div>
    )
}