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
      return item.technologies.includes("Node")
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
            with curated Nodejs 
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
            Bridge the gap between theory and real-world code by working on curated Node.js projects. 
            Use Codersarts as practice or enhance your portfolio with these fun Node.js project ideas. 
            From beginner Node.js projects to more advanced ones, find your next coding project now.
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
               <h2>Node.js Project Ideas</h2>
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
                          <h3>Get one-on-one Node.js help</h3>
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
                      <h2>What is Nodejs and why should I learn it?</h2>
                      <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                         </p>
                         <p>
                         Using Node It's easy to send and synchronize the data between server-side and client-side coding. Because of using the same language Javascript on both sides your source code will be cleaner and more consistent. You will be using the same naming convention, the same tools, and the same best practices.
                         </p>
                         
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice Nodejs by building projects?</h2>
                      <p>
                      In any project you work on, your priority should always be to keep getting better at what you do. This means honing the key skills that allow you to build high-performing apps. As you take on some of the Node.js projects below, these are the skills that you should be focusing on:
                         </p>
                         <p>
                         Full Stack Web Development. The projects below give you a chance to work on your front end and backend development skills. In the most advanced levels, you will rely on your knowledge of servers, databases, frameworks, and user interface (UI) design to build websites and mobile apps that function optimally.
                         </p>
                         <p>
                         Database Management. All websites and mobile apps deal with data in one way or another. With Node.js, you can ensure that databases store, provide, and secure information correctly.
                         </p>
                         <p>
                         RESTful API. Creating an API is an essential part of the development process. Some of the projects on this list will challenge you to build stable RESTful APIs, an important skill that will help you succeed in this industry.
                         </p>
                         <p>
                         Problem Solving Skills. As you work on some of the projects on this list, you will encounter plenty of problems that you will have to solve using your ingenuity and creativity as well as your analytical skills.
                         </p>
                         <p>
                         App Security. For some of the apps you create, you will have to come up with security measures and protocols to safeguard critical data.
                         </p>
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css