import React from 'react'
import './Footer.css'
import MediaLinksFooter from './MediaLinksFooter/MediaLinksFooter'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div id='footerComponent' className='py-4 flex flex-col' >
      <div className='footerComponentUp flex justify-around'>

        <div id='footerComponentLeft' className="flex flex-col text-left px-2" >
          <span id='footerComponentLogo' className=''>RUXXANDRA T</span>
          <br />
          <div className="footerComponentLeftBottom">
            <span>Contact:</span>
            <p className='underline'>+40 712 345 678</p>
            <p className='underline' >exemplu@domeniu.com</p>

            <div className="footerSectionSocialMedia mx-auto flex">
              <MediaLinksFooter mediaPlatform={'Instagram'} />
              <MediaLinksFooter mediaPlatform={'TikTok'} />
              <MediaLinksFooter mediaPlatform={'YouTube'} />
            </div>
          </div>
        </div >

        <div className="footerComponentRight  pb-8">

          <div className="footerComponentRightLeft flex flex-col ">
            <Link to="/" relative="path">
              <span className=''>Acasă</span>
            </Link>
            <Link to="/aboutMe" relative="path">
              <span className=''>Despre mine</span>
            </Link>

            <Link to="/videos" relative="path">
              <span className=''>Cursuri</span>
            </Link>
            <Link to="/contact" relative="path">
              <span className=''>Contact</span>
            </Link>
          </div>

          <div className="footerComponentRightRight flex flex-col">
            <Link to="/videos/online" relative="path">
              <span className=''>Cursuri online</span>
            </Link>


            <Link to="/videos/offline" relative="path">
              <span className=''>Cursuri fizice</span>
            </Link>


            <a href='https://anpc.ro/' target='_blank' className=''>
              <img src="ANPC.png" alt="ANPC" className='footerImage' />
            </a>



            <a href='https://anpc.ro/' target='_blank' className=''>
              <img src="LITIGII.png" alt="LITIGII" className='footerImage' />
            </a>
          </div>

        </div>
      </div >
      <div className="footerComponentBottom flex justify-between pt-4 px-4 pb-0">
        <div className="footerComponentBottomLeft">
          <p>@{new Date().getFullYear()}© 2024 Ruxxandra T. Toate drepturile rezervate.</p>
        </div>
        <div className="footerComponentBottomRight">

          <Link to="/videos/offline" relative="path" className='mx-4 footerComponentBottomRightComponent'>
            <span className=''>Politică de Confidențialitate</span>
          </Link>
          <Link to="/videos/offline" relative="path" className='mx-4 footerComponentBottomRightComponent'>
            <span className=''>Termeni și Condiții</span>
          </Link>
          <Link to="/videos/offline" relative="path" className='mx-4 footerComponentBottomRightComponent'>
            <span className=''>Setări Cookie-uri</span>
          </Link>
        </div>
      </div>

    </div >
  )
}

export default Footer
