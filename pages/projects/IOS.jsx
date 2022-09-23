import BrowseMore from '../../components/BrowseMore/BrowseMore';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import  styles from './CategoryProjects.module.css';
import rightBannerImg from '../../public/assets/hero-top-right.png';
import bottomBannerImg from '../../public/assets/hero-bottom-left.png';
import logo from '../../public/codersartsLogo.png';
import Image from 'next/image';
import { allProjectsData } from '../../data/projects';
import CourseListCard from '../../components/CourseListCard/CourseListCard';
import { useState,useEffect } from 'react';



export const getStaticProps = async ()=>{

  return {
      props:{
        allProjectsList:allProjectsData
      }
  }
}

function Html_css({allProjectsList}) {
  const [allProjects,setAllProjects] = useState([]);

  useEffect(()=>{
    let data = allProjectsData.filter((item)=>{
      return item.technologies.includes("IOS")
   });
   setAllProjects(data);
  },[])
  return (
    <>
    <Navbar />
      <div className={styles.category__projects}>
        <div className={`container ${styles.category__projects__banner}`}>
            <div className={styles.category__projects__banner__header}>
            <h1>
            Learn programming<br />
            with curated HTML/CSS 
            projects
            </h1>
           <div className={styles.category__projects__rightImg}>

           <Image 
            src={rightBannerImg}
            height={"120px"}
            width={"270px"}
            />
           
           </div>
            </div>
            <div className={styles.category__projects__headpara}>
            Bridge the gap between theory and real-world code by working on curated HTML/CSS projects. 
            Use Codersarts as practice or enhance your portfolio with these fun HTML/CSS project ideas. 
            From beginner HTML/CSS projects to more advanced ones, find your next coding project now.
            </div>
            <div className={styles.category__projects__bottom}>
           <div className={styles.category__projects__bottomImg}>
           <Image 
            src={bottomBannerImg}
            height={"150px"}
            width={"250px"}
            />
           </div>
            <a href="#projectListing" className='primaryBtn'>Get Started</a>
            </div>
            
        </div>

        <div className={styles.category__projects__listing} id="projectListing">
               <h2>HTML/CSS Project Ideas</h2>
               <div className={styles.category__projects__listing__cards}>
                {allProjects && allProjects.map((item)=>{
                            return(
                                <CourseListCard
                                key={item.id}
                                title={item.title}
                                href={item.filePath}
                                description={item.introduction}
                                difficulty={item.difficulty}
                                technologies={item.technologies}
                                />
                            )
                })}
        </div>

      

        </div>
    </div>
    <BrowseMore />
    <div className={styles.findMentorSection}>
                <div className={`container ${styles.findMentorWrapper}`}>
                    
                  <div className={styles.findMentorContent}>
                    <div className={styles.findMentorText}>
                          <div className={styles.findMentorLogoArea}>
                          <Image src={logo} width={'30px'} height={'30px'} />
                          <h4>Codersarts</h4>
                          </div>
                          <h3>Get one-on-one IOS help</h3>
                          <p>Codersarts is a community of Expert developers 
                          who help each other grow through one-on-one mentorship.</p>
                      </div>

                      <div className={styles.btnArea} >
                          <a 
                            href="https://www.codersarts.com/" 
                            rel='noreferrer' 
                            target={'_blank'}
                            className={styles.get__help__btn}>
                              Get Help
                            </a>

                      </div>
                  </div>
                </div>
        </div>
        <div className={styles.category__details__section}>
            <div className={`container ${styles.category__details__card}`}>
                   <div className={styles.category__details__part}>
                      <h2>What is IOS and why should I learn it?</h2>
                      <p>iOS is Apple's mobile operating system that powers the iPhone and iPod Touch. Until 2019, it was also the operating system used by the iPad
                         </p>
                         <p>
                         The full meaning of iOS takes a bit more explanation. When the iPhone was introduced in 2007, its operating system was originally called "iPhone OS." Despite the name, the iPod Touch (which launched later in 2007) also ran iPhone OS.
                         </p>
                         <p>
                         At the time, Steve Jobs said that "iMac comes from the marriage of the excitement of the internet with the simplicity of Macintosh." Apple expounded on this with a slide showing that the "i" prefix also stands for individual, instruct, inform, and inspire.
                         </p>
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice IOS by building projects?</h2>
                      <p>
                      To develop iOS apps, you need a Mac computer running the latest version of Xcode. Xcode is Apple’s IDE (Integrated Development Environment) for both Mac and iOS apps. Xcode is the graphical interface you'll use to write iOS apps. Xcode includes the iOS SDK, tools, compilers, and frameworks you need specifically to design, develop, write code, and debug an app for iOS. For native mobile app development on iOS, Apple suggests using the modern Swift programming language.
                         </p>
                         <p>
                         xplore the tools, technologies, capabilities, and languages included in the iOS SDK that make app development possible. Some iOS SDK essentials are the Cocoa Touch frameworks that include the UIKit, GameKit, PushKit, Foundation Kit, and MapKit. These frameworks and others allow you manipulate the iPhone or iPad camera, add voice interaction using SiriKit, explore music with MusicKit, expand viewing and listening via AirPlay 2, and even add iMessage Business Chat to your application. iOS 11 added the power of machine learning with Core ML and augmented reality (AR) experiences with ARKit.
                         </p>
                         
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css