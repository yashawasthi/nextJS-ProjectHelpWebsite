import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import {BiRocket} from 'react-icons/bi';
import {BsFileEarmarkCode} from 'react-icons/bs';
import Image from 'next/image';
import mapImg from '../../../public/assets/HotelBooking.jpg'
import BrowseMore from '../../../components/BrowseMore/BrowseMore';
import Footer from '../../../components/Footer/Footer';

function Buildacustomgooglemapstheme() {
  const [screen,setScreen] = useState(1);
  const [isScrolledPass,setIsScrolledPass] = useState(false);

  const handleScroll = (event)=>{

    if(event){
      let scrollTop = window.scrollY;
     if(scrollTop > 200){
        setIsScrolledPass(true);
     }else{
       setIsScrolledPass(false);
     }
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  });

  
  return (
    <div>
      <Head>
        <title>Hotel Reservation System Java</title>
        <meta 
        name="description" 
        content="Codersarts is a 
        trusted website for Programming Assignment Help, 
        Project Help, and Mentorship. Our dedicated team of programming experts will 
        help and guide you throughout your software development journey" />
        <link rel="icon" href="/codersartsLogo.ico" />
      </Head>

      <main>
        <Navbar />
        <div className={`project__details__banner ${isScrolledPass ? 'project__details__banner__onScroll' : ''}`}>
          <div className='container'>
              <div className='project__category'>
                <Link href="/">
                  <a> Java</a>
                </Link>
                
                </div>
                <div className='project__heading'>
                  <h1>Hotel Reservation System in Java</h1>
                  <div>
                    <button className='primaryBtn'>
                      Get Solution
                    </button>
                  </div>
                </div>
          </div>
          <div className='container project__nav'>
          <ul className="nav nav-tabs">
              <li className={`nav-item ${screen===1 ? 'active' : ''}`} onClick={()=>{setScreen(1)}}>
                <div><BsFileEarmarkCode className='project__tab__icon' /> Project</div>
              </li>
              <li  className={`nav-item ${screen===2 ? 'active' : ''}`} onClick={()=>{setScreen(2)}}>
                <div><BiRocket className='project__tab__icon'/> Get Started</div>
              </li>
            </ul>
          </div>
        </div>
       {screen===1 ? 
        <div className='container projects__main__content__wrapper'>
          <div className='row'>
              <div className='col-md-8 col-sm-12'>
                  <div className='projects__practice__content'>
                      <h5>What you will practice</h5>
                      <p>
                      Hotel ABC is one of the famous tourist hotels in XYZ city. But this hotel’s current reservation is
based on manual system. 

                      </p>
                  </div>
                  <div className='projects__details__container'>
                      <h4>Introduction</h4>
                      <p>
                      Hotel ABC is one of the famous tourist hotels in XYZ city. But this hotel’s current reservation is
based on manual system. When guests come in to make reservation details are recorded in a
file and then those files are stored in special cabinets. Also the billing system is manual too.
As the current system is manual based, management of the hotel has to put extra efforts to
keep the data secured. Record can easily be destroyed in case of fire, disaster or even possible
to be stolen. Also keeping files take extra cabinets to store them into, searching a record is very
hard, which in results put lots of man hours. As well as billing system are manually handled so
having an error in calculation is also at high risk.
We have decided to develop their Reservation system as a computer based system and hotel
can give quick service to the guests.
                      </p>
                      <Image 
                      src={mapImg}
                      alt="img"
                      width={'800px'}
                      height={'300px'}
                      />
                            <p><b>Objectives</b>
                            <ul>
                                <li>Computerized system to replace the manual reservation system.</li>
<li>• Save time of hotel employees and guests.</li>
<li>• Develop a data structure which stores guest’s details when they arrive for reservation.</li>
<li>• Create and easy to understand user friendly environment.</li>
<li>• The customers can book the room via phone or in person.</li>
<li>• The billing system should provide a bill against each reservation made at check out.</li>
                            </ul>
                            </p>
                      
                  </div>
                

              </div>
              <div className='col-md-4 col-sm-12'>
                  <div className='projects__get__help'>
                  <h6>Hit a programming wall?</h6>
                  <h6>Get help from our mentors</h6>
                  <button className='primaryBtn'>Get Help Now!</button>
                  </div>

                  <div className='projects__info'>
                      <div>
                        <h6>Technologies Used</h6>
                        <div className='d-flex flex-wrap'>
                          <div className='grayBadge mx-2'>Java</div>
                          
                        </div>
                      </div>

                      <div className='mt-5'>
                        <h6>Difficulty</h6>
                        <div className='badge easy'>Medium</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        :
        screen===2 ? 
        <div className='container projects__main__content__wrapper'>
          Get Started
        </div>
        :
        null
       }
      </main>
      <BrowseMore />
      <Footer />
    </div>
  )
}

export default Buildacustomgooglemapstheme