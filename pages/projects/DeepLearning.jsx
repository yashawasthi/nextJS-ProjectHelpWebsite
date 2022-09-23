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
      return item.technologies.includes("Deep Learning")
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
            with curated Deep Learning 
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
            Bridge the gap between theory and real-world code by working on curated Deep Learning projects. 
            Use Codersarts as practice or enhance your portfolio with these fun Deep Learning project ideas. 
            From beginner Deep Learning projects to more advanced ones, find your next coding project now.
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
               <h2>Deep Learning Projects</h2>
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
                          <h3>Get one-on-one Deep Learning help</h3>
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
                      <h2>What is Deep Learning and why should I learn it?</h2>
                      <p>Deep learning is focused on improving that process of having machines learn new things. With rule-based AI and ML, a data scientist determines the rules and data set features to include in models, which drives how those models operate. With deep learning, the data scientist feeds raw data into an algorithm. The system then analyzes that data, without specific rules or features preprogrammed into it. Once the system makes its predictions, they are checked against a separate set of data for accuracy. The level of accuracy of these predictions—or lack thereof—then informs the next set of predictions the system makes.
                         </p>
                         <p>
                         The “deep" in deep learning refers to the many layers the neural network accumulates over time, with performance improving as the network gets deeper. Each level of the network processes its input data in a specific way, which then informs the next layer. So the output from one layer becomes the input for the next.
                         </p>
                         <p>
                         The advantage of deep learning is that it can process data in ways that simple rules-based AI cannot. The technology can be used to drive clear business outcomes as diverse as improved fraud detection, increased crop yields, improved accuracy of warehouse inventory control systems, and many others.
                         </p>
                   </div>

                   <hr />

                   <div className={styles.category__details__part}>
                      <h2>Why should I practice Deep Learning by building projects?</h2>
                      <p>
                      There are many challenges in calculating the ROI of a deep learning project. One is that it’s often difficult to isolate the contributions of it alone to improvements, especially towards larger business outcomes. Furthermore, the calculation is often complicated because the value isn’t all in one number and can spread across multiple departments and teams. Thus, the biggest part of the work here is often determining all the possible ways that deep learning project could be bringing success.
                         </p>
                         <p>
                         It’s very important to invest in pre-processing your data before feeding them into the deep learning model. Real-world data are generally incomplete (lacking attribute values, lacking certain attributes of interest, or containing only aggregate data), noisy (containing errors or outliers), and inconsistent (containing discrepancies in codes or names). A couple of good pre-processing practices include cleaning (fill in missing values, smooth noisy data, identify or remove outliers, and resolve inconsistencies), integration (using multiple databases, data cubes, or files), transformation (normalization and aggregation), reduction (reducing the volume but producing the same or similar analytical results), and discretization (replacing numerical attributes with nominal ones).
                         </p>
                         <p>
                         As you saw the importance of data augmentation, an often overlooked component in building a strong data stack is the process by which data is annotated, which needs to be robust for that purpose. Annotation is the process of adding contextual information or labels to images, which serve as training examples for algorithms to learn how to identify various features automatically. Depending on your dataset, annotations can be generated internally or outsourced to third-party service providers.
                         </p>
                   </div>
              </div>  
        </div>
    <Footer />
    </>
  )
}

export default Html_css