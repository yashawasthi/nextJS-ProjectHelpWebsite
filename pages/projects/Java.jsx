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
      return item.technologies.includes("Java")
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
            with curated Java 
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
            Bridge the gap between theory and real-world code by working on curated Java projects. 
            Use Codersarts as practice or enhance your portfolio with these fun Java project ideas. 
            From beginner Java projects to more advanced ones, find your next coding project now.
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
               <h2>Java Project Ideas</h2>
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
                          <h3>Get one-on-one Java help</h3>
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
                      <h2>What is Java and why should I learn it?</h2>
                      <p>Java is a programming language and computing platform first released by 
                      Sun Microsystems in 1995. It has evolved from humble beginnings to power a
                       large share of today’s digital world, by providing the reliable platform 
                       upon which many services and applications are built. New, innovative products
                        and digital services designed for the future continue to rely on Java, as well.
                         </p>
                         <p>
                         There are many applications and even some websites that will not function
                          unless you have Java installed. Java.com, this website, is intended for 
                          consumers who require Java for their desktop applications – specifically 
                          applications targeting Java 8. Developers as well as users that would like
                           to learn Java programming 
                         </p>
                         <p>
                         A Java Programmer writes a program in a human-readable language called Source
                          Code. Therefore, the CPU or Chips never understand the source code written in
                           any programming language.These computers or chips understand only one thing,
                            which is called machine language or code. These machine codes run at the CPU 
                            level. Therefore, it would be different machine codes for other models of CPU.
                         </p>
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice Java by building projects?</h2>
                      <p>
                      Java is platform-independent.One of the most significant advantages of
                       Java is its ability to move easily from one computer system to another.
                        The ability to run the same program on many different systems is crucial 
                        to World Wide Web software, and Java succeeds at this by being platform-independent 
                        at both the source and binary levels.
                         </p>
                         <p>
                         Anyone can become a good programmer, no matter if you have a particular gene code 
                         to do this or not. That said, putting in the hard work and having the right mindset
                          is inevitable to achieve this. Building Java projects will help you sharpen your
                           skills on real-life projects and boost your confidence as a programmer.
                         </p>
                         <p>
                         Employers are not only interested in the theoretical knowledge that you possess, 
                         they are also interested in how you can translate the knowledge in a practical setup.
                          Can you really code? You should build a portfolio of your own projects. So when you’ll
                           apply for the position of programmer, you will have code, apps, projects, solutions to 
                           show to recruiters.
                         </p>
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css