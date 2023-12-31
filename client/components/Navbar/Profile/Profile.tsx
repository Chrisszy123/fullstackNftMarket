import React from "react";
import Image from "next/image";
//
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";
//
import style from "./Profile.module.css";
import images from "../../../img";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.profile_account}>
        <Image
          src={images.user1}
          alt="user profile"
          width={50}
          height={50}
          className={style.profile_account_img}
        />
        <div className={style.profile_account_info}>
          <p>Goodluck Bassey</p>
          <small>0x0789ese993....</small>
        </div>
      </div>
      <div className={style.profile_menu}>
        <div className={style.profile_menu_one}>
          <div className={style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{pathname: "/myprofile"}}> My Profile</Link>
            </p>
          </div>
          <div className={style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{pathname: "/my-items"}}> My Items</Link>
            </p>
          </div>
          <div className={style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{pathname: "/edit-profile"}}> Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className={style.profile_menu_two}>
          <div className={style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{pathname: "/help"}}>
                Help
              </Link>
            </p>
          </div>
          <div className={style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{pathname: "/disconnect"}}>
                Disconnect
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
