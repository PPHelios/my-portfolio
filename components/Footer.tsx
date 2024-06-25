import React from "react";
import SocialBar from "./myComponents/SocialBar";

function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-between gap-5 px-5 py-10
        md:flex-row"
    >
      <p>©2024 Haytham Atef. All rights reserved.</p>
      <SocialBar className="flex gap-5" />
    </footer>
  );
}

export default Footer;
