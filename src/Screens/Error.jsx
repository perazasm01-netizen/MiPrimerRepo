import React from 'react'
import s from "./Error.module.css"

const Error = () => {
  return (
    <div className={s.container}>
        <div className={s.Err_msg}>
            Page not found.
            <small className={s.small}>Error-404</small>
        </div>
    </div>
  )
}

export default Error