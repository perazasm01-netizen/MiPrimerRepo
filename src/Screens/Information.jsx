import React from 'react'
import s from "./information.module.css"

const Information = () => {
    return (
        <div className={s.container}>

            <div className={s.main}>
                <div className={s.information}>
                    <h1 className={s.Title}>Welcome.</h1>
                    <p className={s.welcome_p}>Welcome to our webpage. It has been made for selling different courses of Web Development for those people that really wants to improve their web development skills.</p>
                </div>
            </div>

            <div className={s.Image}>
                
            </div>

        </div>
    )
}

export default Information