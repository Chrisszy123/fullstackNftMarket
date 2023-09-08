import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import style from "./Sidebar.module.css";
import images from "../../../img";
import Button from "@/components/Button/Button";

interface SidebarProps {
  setOpenSideMenu: any;
}
const Sidebar = ({ setOpenSideMenu }: SidebarProps) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "seacrh",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
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
  const openDiscoverMenu = () => {
    if(!openDiscover){
      setOpenDiscover(true)
    }else{
      setOpenDiscover(false)
    }
  }
  const openHelpMenu = () => {
    if(!openDiscover){
      setOpenHelp(true)
    }else{
      setOpenHelp(false)
    }
  }

  const closeSideBar = () => {
    setOpenSideMenu(false)
  }
  return (
    <div className={style.sideBar}>
      <GrClose
        className={style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={style.sideBar_box}>
        <Image src={images.logo} alt="NFT Market" width={150} height={150} />
        <p>
          Discover the most outstanding topics on all the topics of NFT, your
          own stories and share them.
        </p>
        <div className={style.sideBar_social}>
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
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>
      <div className={style.sideBar_menu}>
        <div>
          <div className={style.sideBar_menu_box} onClick={() => openDiscoverMenu()}  >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={style.sideBar_discover}> 
              {discover.map((el:any, i:any) => (
                <p key={i + 1}>
                  <Link href={{pathname: `${el.link}`}}>
                    {el.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className={style.sideBar_menu_box} onClick={() => openHelpMenu()}>
              <p>Help Center</p>
              <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={style.sideBar_discover}> 
              {helpCenter.map((el:any, i:any) => (
                <p key={i + 1}>
                  <Link href={{pathname: `${el.link}`}}>
                    {el.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={style.sideBar_button}>
        <Button btnText="Create" handleClick={() => {}}/>
        <Button btnText="Connect Wallet" handleClick={() => {}}/>
      </div>
    </div>
  );
};

export default Sidebar;
