import React from "react";
import Link from "next/link";
// interal
import style from "./HelpCenter.module.css";
const HelpCenter = () => {
  const helpCenter = [
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div className={style.box}>
      {helpCenter.map((el: any, i: any) => (
        <div className={style.helpCenter}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
