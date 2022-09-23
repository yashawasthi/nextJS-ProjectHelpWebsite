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
      return item.technologies.includes("NLP")
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
            with curated PHP 
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
            Bridge the gap between theory and real-world code by working on curated PHP projects. 
            Use Codersarts as practice or enhance your portfolio with these fun PHP project ideas. 
            From beginner PHP projects to more advanced ones, find your next coding project now.
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
               <h2>Natural Processing Language Project Ideas</h2>
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
                          <h3>Get one-on-one Natural Processing Language help</h3>
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
                      <h2>What is PHP and why should I learn it?</h2>
                      <p>PHP is an open-source, server-side programming language used across industries to develop dynamic websites and pages. Some of the common tasks PHP is used for are gathering information on leads, processing sales from a website, sending and receiving cookies, and more
                         </p>
                         <p>
                         PHP provides the basis for many popular websites and functionalities. Also, frameworks for many widely used applications are available in PHP, which eliminates the need to start from scratch each time you want to customize a new project. There are many shortcuts that can exist within the embedded functions making  PHP a time-saving solution for programmers who need to create something new in a limited amount of time or with a limited budget
                         </p>
                         <p>
                         PHP is often used to create customer relationship management (CRM) systems, which are used to manage customer-facing websites. (A few CRMs you might be familiar with are Salesforce, HubSpot, and Monday.com.) This makes it easy for users who aren’t technically savvy to add content and make changes to the site without the help of a designer or developer.
                         </p>
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice PHP by building projects?</h2>
                      <p> 
                      Project-based learning is a method of learning where you learn a skill through working on a project. This type of learning allows you to learn not only the theory, but also how to apply those skills. 
                         </p>
                         <p>
                         By building a PHP project, you'll practice the high-level logic of your code and project, and see how each individual line can impact your application. You will also gain problem-solving skills and how to fix it. With so many PHP projects available, finding an idea that interests you will make the learning process more fun and sustainable. 
                         </p>
                         <p>
                         When you’re learning PHP, you may not know how to apply PHP theories in the real world. But when working on beginner PHP projects, you immediately learn how each line of code impacts your project. By giving theory context, you’ll understand how to apply theories and find more resources to complete your PHP project. These PHP projects for beginners can also help you build up your portfolio early on. Each PHP project you finish can be incorporated into your portfolio to demonstrate your new skills 
                         </p>
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css