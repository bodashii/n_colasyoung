import React from "react";
import Link from "next/link";
import Image from "next/image";

import profilePic from "../public/images/me.png";

export default function about() {
  return (
    <div className="">
      <h2 className="text-3xl font-bold underline">Nicolas Young</h2>
      <div>
        <Image
          src={profilePic}
          alt="Nicolas Young"
          width="200"
          height="200"
          className="rounded-full"
        />
      </div>

      <p>This will be some cool stuff about me.</p>
      <Link href="/">back</Link>
    </div>
  );
}
