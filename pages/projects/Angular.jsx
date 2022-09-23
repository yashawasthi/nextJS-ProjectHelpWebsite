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
            with curated Angular.js 
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
            Bridge the gap between theory and real-world code by working on curated Angular.js projects. 
            Use Codersarts as practice or enhance your portfolio with these fun Angular.js project ideas. 
            From beginner Angular.js projects to more advanced ones, find your next coding project now.
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
                      <h2>What is Angular and why should I learn it?</h2>
                      <p>
                      Angular is an open-source, front end framework used to create dynamic web apps. Developed by Google, the framework cuts down unnecessary code for dynamic front end apps. Angular is a component-based framework, meaning that code is easily recycled, has better readability, and is easier to test and maintain. These Angular features are the reasons why Angular has remained popular since its launch in 2010.
                      </p>
                         <p>
                         Should I learn Angular? With so many front end frameworks out there, why use Angular? If you’re already familiar with JavaScript and want to learn more about front end development, then Angular is perfect for you. Built with TypeScript, which relies on JavaScript, you’ll be able to use Angular features like static typing, interfaces, and classes, without having to learn a completely new language. The structure and design patterns of the framework also makes it easy for beginners to test and maintain the code.
                         </p>
                        <p>
                        Angular’s vibrant and active community is constantly evolving and developing new tools. With an ever growing community, including Google’s public support for Angular, you’ll be able to find existing tools to help you build any Angular features. Angular’s growing popularity means you’ll likely have an exciting and long-lasting career if you invest in learning Angular now.
                        </p>
                         
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice Angular.js by building projects?</h2>
                      <p>
                      Project-based learning is a method of learning where you learn a skill through working on a project. This type of learning allows you to learn not only the theory, but also how to apply those skills.

                      </p>
                         <p>
                         By building a Angular project, you'll practice the high-level logic of your code and project, and see how each individual line can impact your application. You will also gain problem-solving skills and how to fix it. With so many Angular projects available, finding an idea that interests you will make the learning process more fun and sustainable.
                         </p>
                         <p>
                         When you finish building a project, you will have learned and practiced Angular techniques, gained problem solving skills, learned how to ask questions, and have a finished project to show off.


                         </p>
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css