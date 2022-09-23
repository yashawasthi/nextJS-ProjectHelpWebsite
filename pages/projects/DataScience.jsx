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
      return item.technologies.includes("Data Science")
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
            with curated Data Science
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
            Bridge the gap between theory and real-world code by working on curated Data Science projects. 
            Use Codersarts as practice or enhance your portfolio with these fun Data Science project ideas. 
            From beginner Data Science projects to more advanced ones, find your next coding project now.
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
               <h2>Data Science Project Ideas</h2>
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
                          <h3>Get one-on-one Data Science help</h3>
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
                      <h2>What is Data Science and why should I learn it?</h2>
                      <p>
                      Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains.
                         </p>
                         <p>
                         If you’re looking for a clearer picture of working in this area, you can read what a group of established professionals working in the field of data science across a wide array of industries say data scientists really do in the Harvard Business Review.

An example of a well-known company using big data to improve user experience is streaming giant Netflix. Netflix collects huge amounts of user data to understand what type of content interests the subscriber and targets users with suggestions for the next show or movie to watch. Another example is oil giant Shell who use data science techniques to anticipate machine failure at their facilities across the world.

Now that you understand what it is, here are some big reasons why data science might be the right choice for you to study at college:
                         </p>
                         <p>
                         
                         </p>
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice Data Science  by building projects?</h2>
                      <p>
                      One key problem with following a curriculum to learn data science is it doesn't expose you to real-world issues. In most learning environments the data provided would be clean enough to be used directly. The Kaggle datasets are mostly clean too or at least formatted to be used directly. In reality, a data scientist would spend days collecting data from different sources. Then combining them to create one master dataset. The data as such would have issues with respect to quality and consistency.
                         </p>
                         <p>
                         Now let us learn different machine learning algorithms by using them. I have included datasets and sample learning scripts for different categories of machine learning problems. These will be enough to learn everything about the most commonly used algorithms. 
                         </p>
                         <p>
                         When we have a labeled dataset we use supervised learning to solve them. The key categories of supervised learning are regression and classification. I have provided two datasets one for each of them.
First, refer to the below kaggle notebooks to get a better understand of the supervised learning algorithms. These well-documented scripts will help you to properly understand the steps and standards involved in solving supervised learning problems. The first one is about a regression problem and the second is about classification.
                         </p>
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css