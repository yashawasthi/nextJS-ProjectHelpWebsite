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
                      <h2>What is Python and why should I learn it?</h2>
                      <p>
                      Python is one of the most popular programming languages in the world, used by companies like Intel, NASA, Netflix, Spotify, and IBM. It’s versatile, easy to read, and used for everything from web development to machine learning. 
                      </p>
                         <p>
                         Python is a high-level, object-oriented programming language with built-in data structures and dynamic semantics. It supports multiple programming paradigms, such as structures, object-oriented, and functional programming.
                         </p>
                         <p>
                         Python has a massive community that can help you in programming errors or issues with the software. You can post your queries in community forums, and community members will address it in real quick time.
                         </p>
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice Python by building projects?</h2>
                      <p>
                      Building projects helped me bring together everything I was learning. Once I started building projects, I immediately felt like I was making more progress.
                      </p>
                         <p>
                         Project-based learning is also the philosophy behind our teaching method at Dataquest, where we teach data science skills using Python. Why? Because time and time again, we’ve seen that it works!
                         </p>
                         <p>
                         The second reason a project-based approach works is that there’s no gap between learning the skill and putting it into practice. You won’t waste time learning irrelevant things, because you’ll be actively trying to learn the specific things you need to build your project.

This also means you will get where you want to go a lot faster. If you’re trying to learn Python for data science by building data science projects, for example, you won’t be wasting time learning Python concepts that might be important for robotics programming but aren’t relevant to your data science goals.
                         </p>
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css