import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import {BiRocket} from 'react-icons/bi';
import {BsFileEarmarkCode} from 'react-icons/bs';
import Image from 'next/image';
import mapImg from '../../../public/assets/DeepL1.png'
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
        <title>Visual Search using Deep learning (CNN)</title>
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
                  <h1>Visual Search using Deep learning (CNN)</h1>
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
                      How to import data from kaggle on colab 
                   How to read the image data 
                      </p>
                  </div>
                  <div className='projects__details__container'>
                      <h4>Introduction</h4>
                      <p>
                      Visual search aims at searching for images by 
                      visual features to provide users with relevant 
                      image lists. In this project build the visual 
                      search model using the image dataset which will
                       be able to search similar images and provide to
                        the user
                      </p>
                      <Image 
                      src={mapImg}
                      alt="img"
                      width={'800px'}
                      height={'300px'}
                      />
                            <p><b>Key highlights of projects or Essence</b>
                            <ul>
                                <li>This project is about Visual search using deep learning.</li> 

<li>This project shows you how to use data directly from Kaggle.</li> 

<li>This project shows you how to read the image data and visualize it.</li> 

<li>This project show you how to use image data to train the model</li> 

<li>This project shows you how to compare the similarity of two images using cosine_similarity. </li>

<li>This project shows you how to display a similar image using this model. </li>
                            </ul>
                            </p>
                      <h4 className="mt-3">Skills Reqired</h4>
                      <ul>
                        <li>Python programming language </li>

<li>Machine learning concept </li>

<li>Deep learning concept </li>
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