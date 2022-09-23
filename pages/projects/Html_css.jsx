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
      return item.technologies.includes("HTML/CSS")
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
                      <h2>What is HTML and CSS and why should I learn it?</h2>
                      <p>Is HTML a coding language? Is CSS a programming language? 
                      The technical answer is no, but they are computer languages
                       that are required for all web developers and most web designers. 
                       HTML determines the structure of a web page, and will let you define 
                       elements like headers, paragraph structure, links, images, and more.
                        CSS, on the other hand, determines the layout and design of the web page.
                         With CSS, you'll  work with fonts, colors, backgrounds, and 
                         even animations and 3D effects.
                         </p>
                         <p>
                         Since HTML and CSS are both considered front end languages,
                          you're probably thinking, should I learn HTML and CSS
                           before JavaScript? As HTML and CSS are easier to learn, the general consensus is that you should learn HTML and CSS first. Then, if you want 
                         to dive into programming more, JavaScript would be your natural next step.
                         </p>
                         <p>
                         HTML and CSS alone are also useful languages for professionals in all fields. You can design emails, optimize WordPress sites, and build your own resume website from scratch. While there aren’t many pure HTML CSS jobs out there, HTML and CSS are must-knows for front end developers and are extremely helpful for 
                         designers, marketers, and product managers to give them an upperhand in the market.
                         </p>
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice HTML/CSS by building projects?</h2>
                      <p>
                      Project-based learning is a method of learning where you learn a skill through working on a project. This type of learning allows you to learn not only the theory, 
                      but also how to apply those skills. By building a HTML/CSS project, you'll practice the high-level logic of your code and project, and see how each individual line can impact your application. You will also gain problem-solving
                      skills and how to fix it. With so many HTML/CSS projects available, finding an idea that interests you will make the learning process more fun and sustainable.
                      When you finish building a project, you will have learned and practiced HTML/CSS techniques, gained problem solving skills,
                      learned how to ask questions, and have a finished project to show off.
                         </p>
                         <p>
                         Since HTML and CSS are both considered front end languages,
                          you're probably thinking, should I learn HTML and CSS
                           before JavaScript? As HTML and CSS are easier to learn, the general consensus is that you should learn HTML and CSS first. Then, if you want 
                         to dive into programming more, JavaScript would be your natural next step.
                         </p>
                         <p>
                         HTML and CSS alone are also useful languages for professionals in all fields. You can design emails, optimize WordPress sites, and build your own resume website from scratch. While there aren’t many pure HTML CSS jobs out there, HTML and CSS are must-knows for front end developers and are extremely helpful for 
                         designers, marketers, and product managers to give them an upperhand in the market.
                         </p>
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css