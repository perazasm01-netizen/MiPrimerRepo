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
      "Disney_Plus": {
          "Name": "Disney_Plus",
          "Background": "url(https://wallpapercave.com/wp/wp2488102.jpg)",
          "Title": "Disney Plus",
          "Text": "Disney+ is a streaming-platform that guarantees the content about all it's movies and series from Disney Studios.",
          "Prices": ["4$ for 3 months", "9$ for 7 months", "12$ for 1 year"]
      },
      "HBOmax": {
        "Name": "HBOmax",
        "Background": "url(https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/04/hbo-max-logo-1922879.jpg?tf=3840x)",
        "Title": "HBOmax",
        "Text": "HBOmax is the streaming-platform of Warner Bros.Discovery that guarantees content about series, movies, documentals, and kids content.",
        "Prices": ["4$ for 3 months", "9$ for 7 months", "12$ for 1 year"]
      },
      "Prime_Video": {
        "Name": "Prime_Video",
        "Background":"url(https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/campaigns/primeVideo/AMADS_2025_Sizzle_Q1_AThousandFutures_Pre_MasterHD_16x9_Poster11.jpg)",
        "Title":"Prime Video",
        "Text":"PrimeVideo is a streaming-platform provided by Amazon that includes movies, Tv-Series, sports, and more content.",
        "Prices": ["3$ for 4 months", "7$ for 9 months", "11$ for 1 year"]
      },
      "Netflix":{
        "Name": "Netflix",
        "Background": "url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/06551278710263.5cad16152d3a6.jpg)",
        "Title": "Netflix",
        "Text": "Netflix is a Streaming-platform that provides many content about series, movies, and documentals in dispositives that has an internet connection",
        "Prices": ["4$ for 6 months", "5.5$ for 8 months", "7$ for 1 year"]
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
        <p id='Sec_1_p' className={styles.Sec_1_p}>In this page you'll find too much content about streaming platforms profiles that you can buy, obviosly, for it's cost. we have for selling some profiles like HBOMax, Netflix, PrimeVideo, DisneyPlus(+), and many others that wou'll find down here... please enjoy and if you have any questions, please make us know!</p>

        <div className={styles.related_products_container}>

          <div className={styles.products}>

            <div className={styles.Product_1} id='Disney_Plus' onClick={() => {
              Active("Disney_Plus")
            }}>

            </div>

            <div className={styles.Product_2} id='HBOmax' onClick={() => {
              Active("HBOmax")
            }}>

            </div>

            <div className={styles.Product_3} id='Prime_Video' onClick={() => {
              Active("Prime_Video")
            }}>

            </div>

            <div className={styles.Product_4} id='Netflix' onClick={() => {
              Active("Netflix")
            }}>

            </div>

          </div>

          <div className={styles.products}>

            <div className={styles.Product_1} id='Disney_Plus' onClick={() => {
              Active("Disney_Plus")
            }}>

            </div>

            <div className={styles.Product_2} id='HBOmax' onClick={() => {
              Active("HBOmax")
            }}>

            </div>

            <div className={styles.Product_3} id='Prime_Video' onClick={() => {
              Active("Prime_Video")
            }}>

            </div>

            <div className={styles.Product_4} id='Netflix' onClick={() => {
              Active("Netflix")
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