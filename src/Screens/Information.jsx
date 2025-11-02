import React from 'react'
import s from "./information.module.css"

const Information = () => {
    return (
        <div className={s.container}>

            <div className={s.main}>
                <div className={s.information}>
                    <h1 className={s.Title}>Welcome.</h1>
                    <p className={s.welcome_p}>Welcome to our webpage. It was made for selling diferent services of streaming-platforms for those people that doesn't have the oportunity to buy one by themselves in the streaming-platforms official web-sites.</p>
                </div>
            </div>


            <div className={s.Image}>
                
            </div>

        </div>
    )
}

export default Information