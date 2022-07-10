import React from "react";
import Link from "next/link";
import Image from "next/image";

import profilePic from "../public/images/me.jpg";

export default function About() {
  return (
    <div className="about-section">
      <div>
        <h2 className="title">Who am I?</h2>
        <div className="about-pic">
          <Image
            src={profilePic}
            alt="Nicolas Young"
            width="200"
            height="200"
            className="profile-pic"
          />
        </div>
      </div>

      <p className="description">
        I am this. This is cool. I liek to create stuff and build things.
      </p>
    </div>
  );
}
