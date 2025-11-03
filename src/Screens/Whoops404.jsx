import React from 'react'
import styles from "./Whoops404.module.css"

const Whoops404 = () => {
  return (
    <>
      <div className={styles.Error}>Cannot find the page<p className={styles.LittleText}>Error-404</p> </div>


      <div className={styles.NotFound}>
        <img src='https://cdn-icons-png.flaticon.com/512/7486/7486797.png' alt="Err404logo"/>
      </div>
    </>
  )
}

export default Whoops404