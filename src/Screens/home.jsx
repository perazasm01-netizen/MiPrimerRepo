import React, { useState } from 'react'
import styles from "./home.module.css"

    var counter = 0
  
const Home = () => {

  var localproduct = null;
  function Active(name) {
    var popover = document.getElementById("popover")
    var popover_T = document.getElementById("popoverT")
    var popover_p = document.getElementById("popoverP")
    var Price_1 = document.getElementById("Price_1")
    var Price_2 = document.getElementById("Price_2")
    var Price_3 = document.getElementById("Price_3")
    var LogoPopover = document.getElementById("LogoPopover")
    var Spec_List = {
      "FullStack-Developer": {
          "Name": "FullStack-Developer",
          "Background": "url(https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png)",
          "Title": "FS Developer",
          "Text": "Full stack knowledge encompasses the ability to develop a complete web application, including both the frontend (user interface) and the backend (server logic and database).",
          "Prices": ["500$", null, null]
      },
      "FrontEnd-Developer": {
        "Name": "FrontEnd-Developer",
        "Background": "url(https://media.istockphoto.com/id/1167600197/vector/front-end-development-web-banner-concept.jpg?s=170667a&w=0&k=20&c=eNl3Wt4rDh1KPUIP5AX4TkmaEk1K_9CMxDjlu5kR2mE=)",
        "Title": "FE Developer",
        "Text": "A front-end web developer creates the user-facing part of websites and applications, focusing on layout, design, and interactivity using HTML, CSS, and JavaScript",
        "Prices": ["300$", null, null]
      },
      "BackEnd-Developer": {
        "Name": "BackEnd-Developer",
        "Background":"url(https://media.istockphoto.com/id/1167600251/vector/back-end-development-web-banner-concept.jpg?s=170667a&w=0&k=20&c=mfv4Pjj_hHX7l7UtKyokMi8T-PvK0dX7ZU_wxuzkmLg=)",
        "Title":"BE Developer",
        "Text":"A Back-End Web Developer builds and maintains the server-side technology, databases, and application logic that power the 'behind-scenes' functionality of websites and apps",
        "Prices": ["350$", null, null]
      },
      "DataBase-Developer":{
        "Name": "DataBase-Developer",
        "Background": "url(https://ianttechnology.com/Content/images/banner-database.png)",
        "Title": "DB Developer",
        "Text": "A database developer is a software specialist responsible for designing, building, programming, and maintaining database systems to ensure secure, efficient data storage and retrieval",
        "Prices": ["415$", null,null]
      }
  }


    counter += 1
    if (counter %2 !== 0 && name){
      localproduct = name
      popover.style.display = "grid"
      LogoPopover.style.backgroundImage = Spec_List[name].Background
      popover_T.innerText = Spec_List[name].Title
      popover_p.innerText = Spec_List[name].Text
      Price_1.innerText = Spec_List[name].Prices[0]
      Price_2.innerText = Spec_List[name].Prices[1]
      Price_3.innerText = Spec_List[name].Prices[2]
    } else {
      popover.style.display = "none"
    }

    return localproduct
  }

  const [info, Setinfo] = useState(true)

  function setinfo() {
    Setinfo(true)
  }

  function setprices() {
    Setinfo(false)
  }

  return (
    <div>

      <div className={styles.sec_1_Container}>
        <h1 id='Sec_1_Header' className={styles.Sec_1_Header}>Home!</h1>
        <p id='Sec_1_p' className={styles.Sec_1_p}>This web page has been made for promoting different courses about web development, including: <em>Full-Stack, Front-End, Back-End, and Data Base development</em>. Maybe in a future we could have more products for offer, but this time we'll start with these ones. </p>

        <div className={styles.related_products_container}>

          <div className={styles.products}>

            <div className={styles.Product_1} id='Disney_Plus' onClick={() => {
              Active("FullStack-Developer")
            }}>

            </div>

            <div className={styles.Product_2} id='HBOmax' onClick={() => {
              Active("FrontEnd-Developer")
            }}>

            </div>

            <div className={styles.Product_3} id='Prime_Video' onClick={() => {
              Active("BackEnd-Developer")
            }}>

            </div>

            <div className={styles.Product_4} id='Netflix' onClick={() => {
              Active("DataBase-Developer")
            }}>

            </div>

          </div>

          <div className={styles.products}>

            <div className={styles.Product_1} id='Disney_Plus' onClick={() => {
              Active("FullStack-Developer")
            }}>

            </div>

            <div className={styles.Product_2} id='HBOmax' onClick={() => {
              Active("FrontEnd-Developer")
            }}>

            </div>

            <div className={styles.Product_3} id='Prime_Video' onClick={() => {
              Active("BackEnd-Developer")
            }}>

            </div>

            <div className={styles.Product_4} id='Netflix' onClick={() => {
              Active("DataBase-Developer")
            }}>

            </div>

          </div>

        </div>

        <div className={styles.AnnouncementWrapper}>
        <h2>More information about</h2>
        </div>
        
        <div className={styles.sub_sec_1}>
            <h3 className={styles.sub_sec_1_header}>Important</h3>
            <div className={styles.p_wrap}>
              <p className={styles.paragraph_wrap}>We would like to say that this is just a webpage made for sales, not for anything else. So if you don't see something like the owners doing comments about the diferent services, don't be surprised. You can know more about us in the "About Us" section. Please, don't be rude and treat everyone with respect.</p>
            </div>
        </div>

      </div>

      <div id="popover" className={styles.PopOver}>

        <div className={styles.LogoPopover} id="LogoPopover">

        </div>

        <div className={styles.popover_container}>
          <div className={styles.btns_wrapper}>
            <button className={styles.infobtn} onClick={() => {setinfo()}}>Info</button>
            <button className={styles.infobtn} onClick={() => {setprices()}}>Prices</button>
          </div>

          <div className={styles.information}>
            <div className={styles.popover_T} id='popoverT'></div>
            <div className={styles.info}>
              <div className={styles.popover_p} id='popoverP' style={info ? {display: "flex"}:{display:"none"}}></div>
              <ul className={styles.PricesList} id='PricesList' style={info ? {display: "none"}:{display:"flex"}}>
                <li className={styles.Price} id='Price_1'></li>
                <li className={styles.Price} id='Price_2'></li>
                <li className={styles.Price} id='Price_3'></li>
              </ul>
            </div>
          </div>
        </div>

        <button onClick={() => {Active()}} className={styles.button} id='Close'>X</button>

      </div>

    </div>
  )
}

export default Home