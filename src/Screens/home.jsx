import React from 'react'
import styles from "./home.module.css"

    var counter = 0
  
const Home = () => {

  function Active(name) {
    var popover = document.getElementById("popover")
    var popover_p = document.getElementById("popover_p")
    var popover_T = document.getElementById("popover_T")
    var LogoPopover = document.getElementById("LogoPopover")
    var Spec_List = {
      "Disney_Plus": {
          "Name": "Disney_Plus",
          "Background": "url(https://wallpapercave.com/wp/wp2488102.jpg)",
          "Title": "Disney Plus",
          "Text": "It guarantees all content on the platform without restrictions. For a cost of $4, you can obtain a membership for approximately four (4) months, and for a cost of $11, a one-year membership (12 months of service). It should be noted that we are not responsible for policy changes within the platform or other matters beyond our control."
      },
      "HBOmax": {
        "Name": "HBOmax",
        "Background": "url(https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/04/hbo-max-logo-1922879.jpg?tf=3840x)",
        "Title": "HBOmax",
        "Text": "It guarantees all content on the platform without restrictions. For a cost of $3, you can obtain a membership for approximately four (4) months; for $5, you can obtain six (6) months of service; and for a cost of $8, you can obtain a one (1) year membership (12 months of service). Please note that we are not responsible for policy changes within the platform or other matters beyond our control."
      },
      "Prime_Video": {
        "Name": "Prime_Video",
        "Background":"url(https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/campaigns/primeVideo/AMADS_2025_Sizzle_Q1_AThousandFutures_Pre_MasterHD_16x9_Poster11.jpg)",
        "Title":"Prime Video",
        "Text":"Amazon's video streaming service offering movies, series, and other digital content. For $3, you can get 6 months of service, and for $5, you can get 12 months of service. This allows you to watch content included with your subscription, as well as rent or purchase recent titles. The platform also offers original Amazon content, called Amazon Originals, and the option to subscribe to additional channels."
      },
      "Netflix":{
        "Name": "Netflix",
        "Background": "url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/06551278710263.5cad16152d3a6.jpg)",
        "Title": "Netflix",
        "Text": "Netflix is a subscription streaming service that offers a wide variety of movies, series, documentaries, and more, which can be viewed on almost any device with an internet connection. There are currently three plans available: the first is a four-month plan for $3.50, the second is a nine-month plan for $7, and the last is a premium plan that allows you to download content from the platform for 12 months for $12."
      },
  }


    counter += 1
    if (counter %2 !== 0 && name){
      popover.style.display = "grid"
      popover_T.innerText = Spec_List[name].Title
      popover_p.innerText = Spec_List[name].Text
      LogoPopover.style.backgroundImage = Spec_List[name].Background
    } else {
      popover.style.display = "none"
    }
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

        <div className={styles.TextBox}>

        <div id="popover_T" className={styles.popover_T}>
          IdkText
        </div>
              
        <p className={styles.popover_p} id="popover_p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem non, praesentium quo enim maiores dolorum molestias eligendi repudiandae nobis sed minima voluptatem. Nisi autem laboriosam deleniti magnam inventore. In.
        </p>

        </div>

        <button onClick={() => {Active()}} className={styles.button} id='Close'>X</button>

      </div>

    </div>
  )
}

export default Home