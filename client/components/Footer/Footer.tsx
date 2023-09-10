import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
// import style
import style from "./Footer.module.css";
import images from "../../img";
import { Discover, HelpCenter } from "../Navbar";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_box}>
        <div className={style.footer_box_social}>
          <Image src={images.logo} alt="footer logo" width={100} height={100} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            inventore, corporis doloribus eum illum quo voluptatum repellat
            sapiente possimus porro tempore? Sequi nemo asperiores repellendus
            eum ratione maiores, nobis est?s
          </p>
          <div className={style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <div className={style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className={style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
        <div className={style.subscribe}>
          <h3>Subscribe</h3>
          <div className={style.subscribe_box}>
            <input placeholder="Enter your email" type="email" />
            <RiSendPlaneFill className={style.subscribe_box_send} />
          </div>
          <div className={style.subscribe_box_info}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
              vitae nulla nesciunt error, sunt dolorum quis! Animi sed
              distinctio quia soluta! Alias maiores commodi dignissimos adipisci
              ipsum dolorem quas facere?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
