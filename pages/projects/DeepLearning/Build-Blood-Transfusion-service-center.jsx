import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import {BiRocket} from 'react-icons/bi';
import {BsFileEarmarkCode} from 'react-icons/bs';
import Image from 'next/image';
import mapImg from '../../../public/assets/Blood.png'
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
        <title>Build-a-todo-app-in-reactjs</title>
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
                  <a> Deep Learning</a>
                </Link>
                
                </div>
                <div className='project__heading'>
                  <h1>Build Blood Transfusion service center data set</h1>
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
                      We can use this dataset to predict  the whether 
                       he/she donated blood in  March 2007.
                      </p>
                  </div>
                  <div className='projects__details__container'>
                      <h4>Introduction</h4>
                      <p>
                      This dataset was taken from a blood transfusion service center
                       in taiwan. This dataset contains information about the blood 
                       donor, E.g. duration of last month blood donation, number of 
                       times blood donated, how much blood donated, how many times 
                       blood donated etc.This dataset consists of 748 instances and 
                       5 attributes. We can use this dataset to predict  the whether 
                       he/she donated blood in  March 2007.
                      </p>
                      <Image 
                      src={mapImg}
                      alt="img"
                      width={'800px'}
                      height={'300px'}
                      />
                            <p><b>Overview of data</b>
                            <ul>
                                <li>Recency (months) - The number of months since the most recent donation</li>
                                <li>Frequency (times) - Total number of blood donation of particular donor</li>
                                <li>Monetary (c.c. blood) - Total amount  of blood that the donor has donated in C.C</li>
                                <li>Time (months) - Number of  months since the donor's first donation</li>
                            </ul>
                            </p>
                      <h4 className="mt-3">Requirements</h4>
                      <ul>
                        <li>Algorithms to be used</li>
                        <li>TPOT Classifier</li>
                        <li>logistic regression</li>
                      </ul>
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
                          <div className='grayBadge mx-2'>Python</div>
                        </div>
                      </div>

                      <div className='mt-5'>
                        <h6>Difficulty</h6>
                        <div className='badge easy'>Easy</div>
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