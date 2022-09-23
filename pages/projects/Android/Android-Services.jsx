import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import { BiRocket } from 'react-icons/bi';
import { BsFileEarmarkCode } from 'react-icons/bs';
import Image from 'next/image';
import mapImg from '../../../public/assets/Android1.png'
import BrowseMore from '../../../components/BrowseMore/BrowseMore';
import Footer from '../../../components/Footer/Footer';

function Buildacustomgooglemapstheme() {
    const [screen, setScreen] = useState(1);
    const [isScrolledPass, setIsScrolledPass] = useState(false);

    const handleScroll = (event) => {

        if (event) {
            let scrollTop = window.scrollY;
            if (scrollTop > 200) {
                setIsScrolledPass(true);
            } else {
                setIsScrolledPass(false);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });


    return (
        <div>
            <Head>
                <title>Android Services</title>
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
                                <a>Android</a>
                            </Link>

                        </div>
                        <div className='project__heading'>
                            <h1>Android Services </h1>
                            <div>
                                <button className='primaryBtn'>
                                    Get Solution
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='container project__nav'>
                        <ul className="nav nav-tabs">
                            <li className={`nav-item ${screen === 1 ? 'active' : ''}`} onClick={() => { setScreen(1) }}>
                                <div><BsFileEarmarkCode className='project__tab__icon' /> Project</div>
                            </li>
                            <li className={`nav-item ${screen === 2 ? 'active' : ''}`} onClick={() => { setScreen(2) }}>
                                <div><BiRocket className='project__tab__icon' /> Get Started</div>
                            </li>
                        </ul>
                    </div>
                </div>
                {screen === 1 ?
                    <div className='container projects__main__content__wrapper'>
                        <div className='row'>
                            <div className='col-md-8 col-sm-12'>
                                <div className='projects__practice__content'>
                                    <h5>What you will practice</h5>
                                    <p>
                                        A service is an application component which can be used to handle
                                        long running background tasks without the interaction of user.

                                    </p>
                                </div>
                                <div className='projects__details__container'>
                                    <h4>Introduction</h4>
                                    <p>
                                        A service is an application component which can be used to
                                        handle long running background tasks without the interaction
                                        of user. services keeps on running even after user switch to
                                        different activity or different application,


                                        <h4>TYPES OF SERVICES </h4>

                                        In android there are 3 types of services :
                                        <ul>

                                            <li>Foreground services</li>
                                            <li>Background services</li>
                                            <li>Bind services</li>
                                        </ul>





                                    </p>
                                    <Image
                                        src={mapImg}
                                        alt="img"
                                        width={'800px'}
                                        height={'300px'}
                                    /><p><ul>
                                        <li><b>Foreground services</b>
                                            It is a service which can be used to run log running services in the front of user so that user can see the progress of on going task

                                            <b>Example:</b> Downloading something from internet and showing the progress of download to user </li>



                                        <li><b>Background services</b>
                                            It is a service which can be used to run long running task in background without the interaction of user.

                                            <b>Example:</b>

                                            Syncing user information with server, downloading large file in background

                                        </li>
                                        <li>
                                            <b>Bound services </b>
                                            It provides client-server interface to our application for doing long running tasks in background it binds current state of activity with the on going call so that activity will always remains in touch with service

                                            <b>Example : </b>doing server based long running task in background with realtime sync
                                        </li>
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
                                            <div className='grayBadge mx-2'>Android</div>
                                            
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
                    screen === 2 ?
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