import React from 'react';
import Link from 'next/link';

export default function projects() {
    return (
        <div>
            <h3>Projects</h3>
            <div>
                <div>
                    <a>proj1</a>
                    <a>proj3</a>
                </div>
                <div>
                    <a>proj2</a>
                    <a>proj4</a>
                </div>
            </div>
            <Link href="/">back</Link>
        </div>
    )
}