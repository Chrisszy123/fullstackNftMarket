import React, { useState, useEffect } from "react";
// next imports
import Image from "next/image";
import Link from "next/link";
// import css
import style from "./Navbar.module.css";
// import icons
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
// component imports
import { Discover, HelpCenter, Notification, Profile, Sidebar } from "./index";
import { Button } from "../index";
// import images
import images from "../../img";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e: any) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };
  const openProfile = () => {
    if(!profile){
      setProfile(true)
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    }else{
      setProfile(false)
    }
  }
  const openSideBar = () => {
    if(!openSideMenu) {
      setOpenSideMenu(true)
    }else{
      setOpenSideMenu(false)
    }
  }

  return (
    <div className={style.navbar}>
      <div className={style.navbar_container}>
        <div className={style.navbar_container_left}>
          <div className={style.logo}>
            <Image
              src={images.logo}
              alt="NFT MARKET"
              width={100}
              height={100}
            />
          </div>
          <div className={style.navbar_container_left_box_input}>
            <div className={style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={style.search_icon} />
            </div>
          </div>
        </div>
        {/* end of left section */}
        <div className={style.navbar_container_right}>
          {/* Discover menu */}
          <div className={style.navbar_container_right_dicover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={style.navbar_container_right_dicover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* Help Center Menu */}
          <div className={style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* Notification Menu */}
          <div className={style.navbar_container_right_notify}>
            <MdNotifications
              className={style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>
          {/* create button section  */}
          <div className={style.navbar_container_right_button}>
            <Button btnText="Create" />
          </div>
          {/* user profile */}
          <div className={style.navbar_container_right_profile_box}>
            <div className={style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={style.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>
          {/* Menu button */}
          <div className={style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>
      {/* side bar component */}
      {openSideMenu && (
        <div className={style.SideBar}>
          <Sidebar setOpenSideMenu={setOpenSideMenu}/> 
        </div>
      )}
    </div>
  );
};

export default NavBar;
