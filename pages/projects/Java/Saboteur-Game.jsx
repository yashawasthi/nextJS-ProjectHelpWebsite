import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import {BiRocket} from 'react-icons/bi';
import {BsFileEarmarkCode} from 'react-icons/bs';
import Image from 'next/image';
import mapImg from '../../../public/assets/Saboteur.jpg'
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
        <title>Saboteur Game in Java</title>
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
                  <h1>Saboteur Game in Java</h1>
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
                      An implementation of Saboteur is provided. Playing games requires: a server (the real board) to be launched,
and then two clients (agents) to connect to the server via TCP sockets.

                      </p>
                  </div>
                  <div className='projects__details__container'>
                      <h4>Introduction</h4>
                      <p>
                      An implementation of Saboteur is provided. Playing games requires: a server (the real board) to be launched,
and then two clients (agents) to connect to the server via TCP sockets; this allows for clients to be run on
separate computers. We also provide a GUI which displays the game in a nice and intuitive way for learning
the strategy behind Saboteur. Note that games between agents can be played without the GUI to increase
speed.
                      </p>
                      <Image 
                      src={mapImg}
                      alt="img"
                      width={'800px'}
                      height={'300px'}
                      />
                            <p>All source code is found in the src directory. You must NOT edit any packages, other than student player, which can be modified as much as you want so long as it (1) compiles, and, (2) that you do
not use any external libraries, but you can use default internal Java libraries (like Math and Util). If you
edit other packages you must be aware that your edits will not be used during the tournament; e.g., so if
you know what you’re doing, you may want to edit Autoplay.java to run many test games of your agent
against another agent (or perhaps against itself).
We encourage you to compare your agent with other groups prior to the submission. Set-up the server
with the agents of the two group and try a few games
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