import React from 'react'
//internal
import style from './Button.module.css'
interface Buttonprops {
  btnText: string;
  handleClick?: any
}
const Button = ({btnText, handleClick}: Buttonprops) => {
  return (
    <div className={style.box}>
      <button className={style.button} onClick={() => handleClick()}>
        {btnText}
      </button>
    </div>
  )
}

export default Button