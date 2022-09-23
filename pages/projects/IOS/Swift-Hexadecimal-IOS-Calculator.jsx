import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar';
import { BiRocket } from 'react-icons/bi';
import { BsFileEarmarkCode } from 'react-icons/bs';
import Image from 'next/image';
import mapImg from '../../../public/assets/IOS1.png'
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
                <title>Swift Hexadecimal IOS Calculator </title>
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
                            <h1>Swift Hexadecimal IOS Calculator</h1>
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
                                        To convert a string to a hex number, use “radix: 16” as an argument
                                    </p>
                                </div>
                                <div className='projects__details__container'>
                                    <h4>Introduction</h4>
                                    <p>

                                        The functionality of your hex calculator worth 60% of the credit, while the appearance of the user interface worth 40%.


                                        When you submit the assignment, please compress the entire project folder into a single zip file, and upload it to D2L. In addition, please provide 4 to 5 screenshots of your app in

                                        different devices and orientations. If your app doesn’t work on every device/orientation, please specify why.


                                        The screenshots of a sample program are shown below. Your UI does not have to be the same as the sample program. As long as it has a pleasing looking, it should be fine







                                    </p>
                                    <Image
                                        src={mapImg}
                                        alt="img"
                                        width={'800px'}
                                        height={'300px'}
                                    />


                                </div>
                                <p>
                                    <h4>Reuirtements</h4>
                                    <ul>
                                        <li>The calculator should support 4 basic arithmetic operations: + - * and /</li>

                                        <li>The calculator will operate on hexadecimal numbers, not decimal numbers</li>

                                        <li>The calculator only needs to operate on unsigned integers (i.e. UInt). You do not need to consider negative numbers or fractions.</li>

                                        <li>The calculator should support the 16-digit hexadecimal numbers (i.e. The range of the numbers is from 0 to FFFF FFFF FFFF FFFF). Prevent the user from entering a number that is greater than FFFF FFFF FFFF FFFF.</li>

                                        <li>The calculator should handle overflow and underflow gracefully. The app must not crash.</li>

                                        <li>The calculator should handle division-by-zero error gracefully. The app must not crash.</li>

                                        <li>The calculator should be able to support most of the devices and orientations. If it does not support the old devices earlier than iPhone 6, it is okay.</li>
                                    </ul>
                                </p>
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