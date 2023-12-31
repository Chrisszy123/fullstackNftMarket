import React from 'react'
import Link from 'next/link'
//internal imports
import style from './Discover.module.css'
const Discover = () => {
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
  return (
    <div>
      {discover.map((el: any, i: any) => (
        <div key={i + 1} className={style.discover}>
          <Link href={{pathname: `${el.link}`}}>
            {el.name}
            </Link>
        </div>
      ))}
    </div>
  )
}

export default Discover