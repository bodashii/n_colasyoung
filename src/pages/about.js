import React from "react";
import Link from "next/link";
import Image from "next/image";

import profilePic from "../public/images/me.jpg";

export default function about() {
  return (
    <div>
      <h2>Nicolas Young</h2>
      <Image src={profilePic} alt="Nicolas Young" width="200" height="200" />

      <p>This will be some cool stuff about me.</p>
      <Link href="/">back</Link>
    </div>
  );
}
