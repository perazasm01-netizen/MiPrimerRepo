import React from 'react'
import s from "./Footer.module.css"

const Footer = (Display) => {
    if (Display.Show === "True") {
        return (
            <div className={s.Footer}>
                <div className={s.Footer_container}>
                    <div className={s.Footer_element_1}>
                        <h3 className={s.Footer_title}>Social:</h3>
                        <ul className={s.Contacts_list}>
                            <li className={s.Contact_item}><i className="fi fi-brands-instagram"></i><a href="https://instagram.com" className={s.Contact_link} target='_blank' rel='noreferrer'>Instagram</a></li>
                            <li className={s.Contact_item}><i className="fi fi-brands-facebook"></i><a href="https://facebook.com" className={s.Contact_link} target='_blank' rel='noreferrer'>Facebook</a></li>
                            <li className={s.Contact_item}> <i className="fi fi-brands-whatsapp"></i><a href="https://whatsapp.com" className={s.Contact_link} target='_blank' rel='noreferrer'>WhatsApp</a></li>
                        </ul>
                    </div>

                    <div className={s.Footer_element_2}>
                        <h3 className={s.Footer_2_title}> Most Frequently Questions:</h3>
                        <ul className={s.Questions_List}>
                            <li className={s.Answers}>
                                <h4 className={s.Question}>Do you have any other products?</h4>
                                <small className={s.Answer}>Yes, we have other products for selling, but this time we'll be promotionating only these ones.</small>
                            </li>
                            <li className={s.Answers}>
                                <h4 className={s.Question}>Have you thought about starting a company?</h4>
                                <small className={s.Answer}>For being honestly, yes, we have thought about that. However, sadly we couldn't start it because we lacked of enough resources</small>
                            </li>
                            <li className={s.Answers}>
                                <h4 className={s.Question}>Are there any other ways for starting?</h4>
                                <small className={s.Answer}>Maybe yes, depending on what you want for working, you could start something like a little businnes of selling </small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer