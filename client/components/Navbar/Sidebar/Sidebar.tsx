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
import style from './Sidebar.module.css'
import images from '../../../img'
import Button from "@/components/Button/Button";

interface SidebarProps {
  setOpenSideMenu: any;
}
const Sidebar = ({ setOpenSideMenu }: SidebarProps) => {
  const [openDiscover, setOpenDiscover] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "seacrh"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    },
  ]
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
  return <div>Sidebar</div>;
};

export default Sidebar;
