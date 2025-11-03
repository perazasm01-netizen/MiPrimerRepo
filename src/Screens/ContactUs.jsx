import React from 'react'
import s from "./ContactUs.module.css"

const ContactUs = () => {


  
  return (
    <div className={s.login_container}>
      
      <form className={s.form_container}>

        <div className={s.header}>Contact Us</div>


        <div className={s.Main}>

          <div className={s.inputs}>
            <input type="text" required minLength={3} name='Name' id='Name' className={s.input} placeholder='Name'/>
          </div>
          
          <div className={s.inputs}>
            <input type="Email" required name='Email' id='Email' className={s.input} placeholder='E-mail'/>
          </div>

          <div className={s.input_message}>
            <textarea required className={s.message} placeholder='Message'/>
          </div>

        </div>

        <div className={s.Footer}>
          <input type="submit" value={"Send"} className={s.Accessbutton}/>
        </div>

      </form>

      <div className={s.Map}>
        <iframe className={s.Location} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125691.18323305226!2d-64.66363444999999!3d10.111404599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d723eff71306f%3A0x22feb43cef889e75!2sBarcelona%2C%20Anzo%C3%A1tegui!5e0!3m2!1ses-419!2sve!4v1761949474218!5m2!1ses-419!2sve" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Map'></iframe>
      </div>
    </div>
  )
}

export default ContactUs