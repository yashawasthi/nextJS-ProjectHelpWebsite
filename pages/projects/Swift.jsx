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
            with curated Python 
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
            Bridge the gap between theory and real-world code by working on curated Python projects. 
            Use Codersarts as practice or enhance your portfolio with these fun Python project ideas. 
            From beginner Python projects to more advanced ones, find your next coding project now.
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
                      <h2>What is Natural Processing Language and why should I learn it?</h2>
                      <p>
                      As a programming language that was developed by Apple as an alternative to Objective-C, Swift is used for a wide variety of applications. But, it’s most commonly used by developers to build apps for Mac OSX, iPhone, Apple Watch, and Apple TV.

Since every operating system Apple has released after OSX 10.9 and iOS7 is compatible with Swift, it’s a great language to learn if you’re interested in iOS and MacOS development.

With some of the best aspects of Objective C, Swift is also a convenient language for developers working outside iOS and MacOS development, like Game Developers who rely on it to produce fast and readable code
                      </p>
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice Swift by building projects?</h2>
                      <p> 
                      Project-based learning is a method of learning where you learn a skill through working on a project. This type of learning allows you to learn not only the theory, but also how to apply those skills. 
                         </p>
                         <p>
                         By building a Swift project, you'll practice the high-level logic of your code and project, and see how each individual line can impact your application. You will also gain problem-solving skills and how to fix it. With so many Swift projects available, finding an idea that interests you will make the learning process more fun and sustainable. 
                         </p>
                         <p>
                         When you finish building a project, you will have learned and practiced Swift techniques, gained problem solving skills, learned how to ask questions, and have a finished project to show off. 
                         </p>
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css