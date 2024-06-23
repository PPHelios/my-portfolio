import React from "react";
import { MovingBorderButton } from "./ui/MovingBorderButton";
import { ArrowUpRight } from 'lucide-react';

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-800 to-blue-950"
    >
      <div
        className="ml-auto mr-auto flex max-w-3xl flex-col items-center
          justify-center gap-8 py-40 px-5"
      >
        <h2 className="text-center text-4xl md:text-6xl">
          Ready to take{" "}
          <span className="font-bold text-emerald-600">your </span>
          digital presence to the next level?
        </h2>
        <p className="text-xl text-center md:text-left">
          Reach out to me, and let's discuss how can I help you to achieve your
          goals.
        </p>
        <a href="mailto:haytham.atef1@gmail.com">
          <MovingBorderButton>Contact me now <ArrowUpRight/> </MovingBorderButton>
        </a>
      </div>
    </section>
  );
}

export default Contact;
