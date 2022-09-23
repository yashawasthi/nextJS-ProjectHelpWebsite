import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import {BiRocket} from 'react-icons/bi';
import {BsFileEarmarkCode} from 'react-icons/bs';
import Image from 'next/image';
import mapImg from '../../../public/assets/ReduxInReact.png'
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
        <title>Redux in Reactjs</title>
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
                  <h1>Redux in reactjs</h1>
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
                      In this project, you will learn 
                      how and where to use redux in reactjs.
                      </p>
                  </div>
                  <div className='projects__details__container'>
                      <h4>Introduction</h4>
                      <p>
                      When we use react , we use components which is used in 
                      different section of website. But there is a problem
                       when we change the state of any component then where 
                       that component is already in use will not change the
                        state of that section. Redux is the solution of this
                         problem. Redux provide us a central store where component
                          goes and updates its state and from there wherever the
                           store data is using in that section data is also updated.
                      </p>
                      <Image 
                      src={mapImg}
                      alt="img"
                      width={'800px'}
                      height={'300px'}
                      />
                      <p>Mainly Redux  provides us three different sections.
                   <ul>
                      <li><b>Actions</b>- when an event is happened in components than 
                      action function is called. Actions tells us that what type
                       of action has to be taken. Payloads are passed to reducers 
                       through action.</li>
                      <li><b>Reducers</b>- It receives the payloads and the previous
                       state after manipulating it return the updated state.</li>
                      <li><b>Store</b>- It is place where all the state application is listed. 
                      It manages the status o application. Any component can use it directly.</li>
                   </ul>



                      
                   Here I am creating a screen , there will be an input 
                   field when click on the add bird button  then the data 
                   will be dispatched to the action and from action it will 
                   tell the reducer that what type action is to be taken and 
                   reducer do its task accordingly. Updated state will be manage 
                   by store and then it will display on the scree.</p>
                      <p>
                      <b>Actions</b>
                      Here two actions are created ADD_BIRD  to add bird and INCREMENT_BIRD is to increment the bird.
                      </p>
                      <p>
                      <b>Reducers</b> 
                      Reducer function birds are taking two arguments previous state and action.
                       Here the notice point is that we are not changing the existing state we are
                        creating a new array and  returning the new array. One more important point
                         is that if the action type is not found in reducer function then we are going
                          to return previous state by default.
                      </p>
                      <p>
                      <b>Stores</b> 
                      There should be only one store in react.js  but we need more than one store .
                       Redux provide us CombineReducers  which helps us in solving this problem in
                        which we can give more than one store in the form of object. 
                      </p>
                      <h4 className="mt-3">Requirements</h4>
                      <ul>
                          
                        <li>HTML/CSS</li>
                        <li>Reactjs</li>
                        <li>Javascript</li>
                        
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
                          <div className='grayBadge mx-2'>Javascript</div>
                          <div className='grayBadge mx-2'>Reactjs</div>
                          <div className='grayBadge mx-2'>Redux</div>
                          <div className='grayBadge mx-2'>HTML/CSS</div>
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
    </div>
    
  )
}

export default Buildacustomgooglemapstheme