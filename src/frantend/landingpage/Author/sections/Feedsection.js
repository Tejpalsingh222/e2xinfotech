import "./feedsection.css"
import routes from "routes";
import TripData from "./TripData";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { useState, useEffect } from 'react'
import DestinationData from "./DestinationData";
import Building from "assets/images/pl.webp"
import Event from "assets/images/bg-sign-in-basic.jpeg"
import Footer from "./Footer";
// import TextEditor from "admin/pages/Main_editor/Main_editor_list";

const img = 'http://localhost:5000/uploads/'


function Trip(){
    const page_id = window.location.href.split('/')[7]
    const [getdata, setData] = useState('')
    // const body = user.testomonials
  //   const [htmlData, setHtmlData] = useState<HTMLData>({
  //   content: { "mycustom-html": "<p>demo</p>" }
  // });
    const fetchdatawithapi = () => {
        fetch(`http://localhost:5000/geteventwithid/${page_id}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log('dataatatatatadatadatadatadata',data.newaa)
          setData(data.newaa)
        })
    }
    useEffect(() => {
      fetchdatawithapi()
    }, [])
    
    return( 
        getdata && getdata.map(user => (  
            <div className="trip">
            <h1>COMPANY ACTIVITY</h1>
            <p>Our Business Is Making Memories ,Exclusive Events, Priceless Memories</p>
              <div className="tripcard">
              {/* <TextEditor/> */}
                <TripData
                 image={img + user.blog_image}
              />
              </div>
              <div className="trip">
              <h3>{user.title}</h3>
              <p>{user.blog_para}</p>
              <div className="card">
              <div dangerouslySetInnerHTML={{__html:user.testomonials}}/>
              </div>
               </div>
              {/* <div className="destination">
    <h1>Our Events And Activities</h1>
    <p>Tours give you the opportunity to see a lot of places</p>
     <DestinationData
     className="first-des"
     heading="13 Years Of Experiences"
     text="E2X Infotech is one of the forecast fast growing offshore IT services provider across the globe. E2X Infotech primarily emerged into interest services and solutions such as web scraper, crawler etc. We have building blocks like web scraper/crawler, website, to more complex solutions built for specific industry verticals. E2X Infotech provides a range of web designing and development services to organizations across the world. It's our best endeavor to continue being the leader in providing client based customized web designing, web development, SEO and other IT related services"
      img1={Event}
     img2={Building}
     />
    </div> */}
    <Footer />
              </div>
    )
    ))
}
export default Trip;
