import React from 'react'
import styles from "./aboutus.module.css"


const AboutUs = () => {
  return (
    <div className={styles.main_container} id='Main_container'>
      <div className='sec-1'>
        
        <div className={styles.head_box}>
          <h1 className={styles.Title}>Who we are?</h1>
        </div>
        <div className={styles.body_box}>
          <p className={styles.head_box_p}>We are a group whose goal is to provide customers with access to various streaming platform services that they would not be able to access on their own, for one reason or another, and would have to resort to other people in order to obtain them.</p>
        </div>
        <br/>
          <br/>
          <br/>

        <div>
          <h2 className={styles.head_box_2}>Our Team:</h2>

          <br/>
          <ul className={styles.teammates_list}>
            <li>
              <div className={styles.firstTeammate}>
                <div className={styles.firstTeammate_img_1} title='Geraldine Castro'/>
                <div className={styles.firstTeammate_Content}>
                  <h3 className={styles.firstTeammate_header}>Geraldine Castro:</h3>
                  <p className={styles.firstTeammate_header_p}>She's the owner of the website, she's the one that controls how the profiles are selling and who are the users of those profiles. You might talk to her if you want to buy anything. For contacting her you can go to the "Contact Us" section.</p>
                </div>
              </div>
            </li>

            <br/>

            <li>
              <div className={styles.secondTeammate}>
                <div className={styles.secondTeammate_img_1} title='Jesus Peraza'></div>
                <div className={styles.secondTeammate_Content}>
                  <h3 className={styles.secondTeammate_header}>Jesus Peraza:</h3>
                  <p className={styles.secondTeammate_header_p}>He's the co-owner of the web-site, he helps with all the stuff when the other owner is not able to do it at the moment. Sometimes, he got clients too, so he sells some profiles. He manages the database that contain the data of all the profiles.</p>
                </div>
              </div>
            </li>

            <br/>

            <li>
              <div className={styles.thirdTeammate}>
                <div className={styles.thirdTeammate_img_1} title='Sebastian Peraza'></div>
                <div className={styles.thirdTeammate_Content}>
                  <h3 className={styles.thirdTeammate_header}>Sebastian Peraza:</h3>
                  <p className={styles.thirdTeammate_header_p}>He coded the whole web-page, he doesn't work or sells any profiles but is the web-page developer. He's still learning about the world of Front-End development, and its using his knowledge to do something useful.</p>
                </div>
              </div>
            </li>
          </ul>

        </div>

      </div>

      <script>

      </script>

    </div>
  )
}

export default AboutUs