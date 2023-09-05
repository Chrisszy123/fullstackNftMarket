import React, {useState, useEffect} from 'react'
// next imports
import Image from 'next/image'
import Link from 'next/link'
// import css
import style from './Navbar.module.css'
// import icons
import {MdNotifications} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import {CgMenuLeft, CgMenuRight} from 'react-icons/cg'
// component imports
import {Discover, HelpCenter, Notification, Profile, Sidebar} from './index'
import {Button} from "../index"
// import images
import images from '../../img'

const NavBar = () => {
  const [discover, setDiscover] = useState(false)
  const [help, setHelp] = useState(false)
  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)
  const [openSideMenu, setOpenSideMenu] = useState(false)

  return (
    <div className={style.navbar}>
      <div className={style.navbar_container}>
        <div className={style.navbar_container_left}>
          <div className={style.logo}>
            <Image src={images.logo} alt="NFT MARKET" width={100} height={100}/>
          </div>
          <div className={style.navbar_container_left_box_input}>
            <div className={style.navbar_container_left_box_input_box}>
              <input type="text" placeholder='Search NFT' />
              <BsSearch onClick={() => {}} className={style.search_icon}/>
            </div>
          </div>
        </div>
        <div className={style.navbar_container_right}></div>
      </div>
    </div>
  )
}

export default NavBar