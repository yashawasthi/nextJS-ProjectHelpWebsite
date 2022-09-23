import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import {BiRocket} from 'react-icons/bi';
import {BsFileEarmarkCode} from 'react-icons/bs';
import Image from 'next/image';
import mapImg from '../../../public/assets/ImageGallery.png'
import BrowseMore from '../../../components/BrowseMore/BrowseMore';
import Footer from '../../../components/Footer/Footer';
import { Button, IconButton, Paper, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
function Buildacustomgooglemapstheme() {
  const [screen,setScreen] = useState(1);
  const [isScrolledPass,setIsScrolledPass] = useState(false);
  const [clicked,setClicked]=useState(false);
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
            {clicked?
        <Paper style={{height: "calc(100vh - 500px)" ,minWidth:"600px",display:"flex",flexDirection:"column",position:"fixed",zIndex:"999",left:"400px",backgroundColor:"black"}}>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <IconButton onClick={()=>{setClicked(false)}}><CloseIcon style={{margin:"5px",fontSize:"50px",color:"white"}} /></IconButton>
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <h3 style={{color:"white"}}>Let Us Send You the Code</h3>
          </div>
          <div style={{padding:"30px"}}>
            <TextField fullWidth style={{margin:"10px 0",backgroundColor:"white"}} placeholder="Enter your Name"/>
            <TextField fullWidth style={{margin:"10px 0",backgroundColor:"white"}} placeholder="Enter your Email"/>
            <div  style={{display:"flex",justifyContent:"center"}}>
            <Button variant="contained" style={{margin:"40px 0",fontSize:"15px"}} color="success">Send Me The Code</Button>
            </div>
          </div>
        </Paper>:<div style={{dispaly:"none"}}></div>}
        <div style={{ opacity: clicked === true? '0.3': '1'}}>
      <Head>
        <title>Buid Image Gallery Using HTML/CSS</title>
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
                  <a> Web Development</a>
                </Link>
                
                </div>
                <div className='project__heading'>
                  <h1>Buid Image Gallery Using HTML/CSS</h1>
                  <div>
                  <button className='primaryBtn' style={{margin:"0 10px 0 0"}}>
                      <a href="https://www.youtube.com/c/CodersArts">Watch Video</a>
                    </button>
                    <button className='primaryBtn' onClick={()=>{setClicked(true)}}>
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
                          We will structure the images on our page in a beautiful manner.
                      </p>
                  </div>
                  <div className='projects__details__container'>
                      <h4>Introduction</h4>
                      <p>
                          In this project we will learn how we can show images in our projects in a beautiful manner using css.
                          CSS is a very important component when it comes to designing web pages.
                      </p>
                      <Image 
                      src={mapImg}
                      alt="img"
                      width={'800px'}
                      height={'300px'}
                      />
                        <p>On the home page we will see well structured images with equal gap in between them</p>
                      <h4 className="mt-3">Requirements</h4>
                      <ul>
                        <li>Basic HTML/CSS</li>
                        
                        
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
                          <div className='grayBadge mx-2'>HTML/CSS</div>
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
    </div>
    
  )
}

export default Buildacustomgooglemapstheme