import  "./GoMapStyle.css";
import React, { Fragment, useState, useEffect } from 'react'




function GoMap() {

      const [contactinfo, setContactInfo] = useState([])
      const [contactinfo1, setContactInfo1] = useState([])

    const fetchContactInfo = () => {
        fetch('http://localhost:5000/contactdetails')
          .then(response => response.json())
          .then(json => json.data)
          .then(data => {
            setContactInfo(data)
          })
      }
      useEffect(() => {
        fetchContactInfo()
      }, [])
      const fetchOtherDetails = () => {
        fetch(`http://localhost:5000/contactdetailsmore`)
          .then(response => response.json())
          .then(json => json.data)
          .then(data => {
            console.log('superhead', data)
            setContactInfo1(data)
          })
      }
      useEffect(() => {
        fetchOtherDetails()
      }, [])


      const page_name='contact';
  const [Information, setUsers] = useState([])
  const [serviceheading,setOurServiceHeading]=useState([])
      
const fetchSuperHeading=()=>{
  fetch(`http://localhost:5000/super-heading/${page_name}`)
  .then(response=>response.json())
  .then(json=>json.data)
  .then(data=>{
      console.log('superhead',data)
      setOurServiceHeading(data[0])
      
  })
 
}
useEffect(()=>{
  fetchSuperHeading()
},[])
    return (
<Fragment>

      <section className='page-title inner-baner'>
        <div className='container'>

          <ul className='bread-crumb clearfix'></ul>
        </div>
      </section>

      <div className='sec-pad'>
        <div className='container'>
          <div className='section-title title-padd-btm text-center'>
            <h1> {serviceheading.page_heading}</h1>

            <p className='wd-50'>{serviceheading.page_paragraph} </p>
          </div>
           <div className='row'>
            <div className='col-md-4 col-sm-6 col-xs-12 pull-right'>
            </div>
            <div className='col-md-4 col-sm-6 col-xs-12'>
              {contactinfo &&
                contactinfo.map(contactinfo => (
                  <div
                    className='tt-contact'
                    style={{ paddingBottom: '0px !important' }}
                  >
                    <div className='tt-contact-icon-outer'>
                      <div className='tt-contact-icon'>
                        <i className='fa fa-map-marker' aria-hidden='true'></i>
                      </div>
                    </div>

                    <div className='tt-contact-info'>
                      <div className='simple-text'>
                        <p style={{ paddingTop: '0px' }}>
                          {contactinfo.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10726.04236228009!2d81.23513235693282!3d26.21660383798049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba1384ccba11b%3A0x642168d0ace76b97!2sE2X%20INFOTECH%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1628687733283!5m2!1sen!2sin'
                allowfullscreen=''
                loading='lazy'
              ></iframe>
            </div>
            <div className='col-md-4 col-sm-6 col-xs-12'>
              {contactinfo1 &&
                contactinfo1.map(contactinfo1 => (
                  <div className='tt-contact'>
                    <div className='tt-contact-icon-outer'>
                      <div className='tt-contact-icon'>
                        <i className='fa fa-map-marker' aria-hidden='true'></i>
                      </div>
                    </div>

                    <div className='tt-contact-info'>
                      <div className='simple-text'>
                        <p style={{ paddingTop: '0px' }}>
                          {contactinfo1.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.4064574096788!2d77.39873506500594!3d28.497416432471315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce860bfea95d9%3A0x683ddf48f263ecc!2sAssotech%20Business%20Cresterra!5e0!3m2!1sen!2sin!4v1679506369030!5m2!1sen!2sin'
                style={{ border: '0', width: '350', height: '150' }}
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  
  )
}

export default GoMap