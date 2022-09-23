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
      return item.technologies.includes("Android")
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
            with curated Android Development
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
            Bridge the gap between theory and real-world code by working on curated Android Development projects. 
            Use Codersarts as practice or enhance your portfolio with these fun Android Development project ideas. 
            From beginner Android Development projects to more advanced ones, find your next coding project now.
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
               <h2>Android DevelopmentProject Ideas</h2>
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
                          <h3>Get one-on-one HTML/CSS help</h3>
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
                      <h2>What is Android Development and why should I learn it?</h2>
                      <p>Any application developed to be supported by the Android Operating system using the android software development kit (sdk) on android studio is the process of android development. The open-source operating system designed by Google especially for mobiles is Android. Android OS has been developed using Linux Kernel. 
                         </p>
                         <p>
                         The best thing about Android app development is that you can learn easily. There are numerous amounts of resources available for Android app development on the web. But the only thing that one should require is how to search effectively on Google or the art of googling stuff. With this, you can access well-written official documentation by Google developers, video tutorials, online free courses, articles, and many more. In simple words, you have access to valuable and precious knowledge. 
                         </p>
                         <p>
                         Android is an open-source, free operating system, giving it the power to create or run applications. It has a wide community and because of this, you can solve the obstacles that come when you are learning android app development. Open source means that you can easily access the codebase of software that is open source, so you can learn from it, and you can also contribute to their codebase. Android also allows you to participate in this and introduce yourself as a developer to the open-source community.
                         </p>
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice Android Development by building projects?</h2>
                      <p>
                      Not all apps are built with the same approach. You have to brainstorm, plan and pick an appropriate method before starting the development process. Before proceeding you will have to make a prior move that your further app will be a Native, Hybrid, or Web-based app. There are pros and cons of each of these development methods, having proper research will help you better. 


                         </p>
                         <p>
                         We all know that Coding is an Art. And once an individual starts coding correctly he/she starts loving the flavor. Moreover how creatively you code, shows how better developer you are. Your Quality Of Code Always Matters. Because writing long code is never a smart step, it not only increases the chances of having more bugs and consumes a lot of time, and creates lots of complexity. 
                         </p>
                         <p>
                         Android itself is a very vast concept, and it’s very much impractical to imagine that you are a master in all the concepts and techniques. And when it comes to programming or building application nothing can help you out other than the stack’s documentation. Learning how to use/read and understand the Android Documentation is important this will help you to build lots of applications with a variety of features.  So it’s highly recommended to go through developer training at android.

                         </p>
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css