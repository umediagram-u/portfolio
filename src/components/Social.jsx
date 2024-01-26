import React from "react";

const SocialShare = [
  { iconName: "fa-brands fa-instagram", link: "https://www.instagram.com/usmonjon_hasanov" },
  {
    iconName: "fa-brands fa-telegram",
    link: "https://t.me/DevMERN",
  },
  {
    iconName: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/usmonjon-hasanov-100b39299/",
  },
  { iconName: "fa-brands fa-twitter", link: "https://twitter.com/HasanovUsmonjon" },
  { iconName: "fa-brands fa-github", link: "https://github.com/Usmonjon007" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
