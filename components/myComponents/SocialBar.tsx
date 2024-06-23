import React from "react";

function SocialBar({ className }: { className?: string }) {
  return (
    <div className={className}>
      {socials.map((social) => (
        <div key={social.name}>
          <a href={social.link} target="_blank">
            <img src={social.icon} alt={social.name} className="h-5 md:h-7" />
          </a>
        </div>
      ))}
    </div>
  );
}
const socials = [
  {
    name: "LinkedIn",
    icon: "/link.svg",
    link: "https://www.linkedin.com/in/haytham-atef/",
  },
  { name: "GitHub", icon: "/git.svg", link: "https://github.com/pphelios" },
];
export default SocialBar;
