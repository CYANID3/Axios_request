import React from 'react'
import styles from './Title.module.css'

function Title({text, myStyle}) {
   const check = (x) => {
       if(x == "big"){
           return styles.big
       } else if(x == "small"){
           return styles.small
       }
   }

  return (
    <div className={check(myStyle)}>{text[0]} - {text[1]}</div>
  )
}

export default Title