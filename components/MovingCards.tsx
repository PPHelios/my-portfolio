import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

function MovingCards() {
  return (
    <div
      className="relative mt-32 flex flex-col items-center justify-center
        overflow-hidden rounded-md bg-white antialiased dark:bg-black
        dark:bg-grid-white/[0.05] md:mt-52"
    >
      <div
        className="relative z-10 mb-5 ml-10 mr-auto bg-gradient-to-b
          from-violet-200 to-fuchsia-600 bg-clip-text font-sans text-lg
          font-bold text-transparent md:text-4xl"
      >
        Other Features:
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "Phone number verification using OTP during signup and reset password.",
    title: "Security",
  },
  {
    quote: "Google reCAPTCHA implemented in all form pages.",
    title: "Security",
  },
  {
    quote: "Form validation client-side and server-side.",
    title: "Security",
  },
  {
    quote: "Server-side rate limiting",
    title: "Security",
  },
  {
    quote: "Compress and watermark images before uploading .",
    title: "Inhancements",
  },
  {
    quote: "Website is PWA compatible.",
    title: "Inhancements",
  },
  {
    quote: "Send notifications to users via email.",
    title: "Inhancements",
  },
  {
    quote:
      "Deployed using Cloudflare workers for a reliable and cost-efficient hosting solution.",
    title: "Inhancements",
  },
  {
    quote:
      "Integrated Google Analytics and Facebook Pixel using Google Tag Manager and Cloudflare Zaraz",
    title: "Inhancements",
  },
];
export default MovingCards;
