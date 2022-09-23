import BrowseMore from '../../components/BrowseMore/BrowseMore';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import styles from './CategoryProjects.module.css';
import rightBannerImg from '../../public/assets/hero-top-right.png';
import bottomBannerImg from '../../public/assets/hero-bottom-left.png';
import logo from '../../public/codersartsLogo.png';
import Image from 'next/image';
import { allProjectsData } from '../../data/projects';
import CourseListCard from '../../components/CourseListCard/CourseListCard';
import { useState, useEffect } from 'react';



export const getStaticProps = async () => {

  return {
    props: {
      allProjectsList: allProjectsData
    }
  }
}

function Html_css({ allProjectsList }) {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    let data = allProjectsData.filter((item) => {
      return item.technologies.includes("React")
    });
    setAllProjects(data);
  }, [])
  return (
    <>
      <Navbar />
      <div className={styles.category__projects}>
        <div className={`container ${styles.category__projects__banner}`}>
          <div className={styles.category__projects__banner__header}>
            <h1>
              Learn programming<br />
              with curated React Native
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
            Bridge the gap between theory and real-world code by working on curated React Native projects.
            Use Codersarts as practice or enhance your portfolio with these fun React Native project ideas.
            From beginner React Native projects to more advanced ones, find your next coding project now.
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
          <h2>React.js Project Ideas</h2>
          <div className={styles.category__projects__listing__cards}>
            {allProjects && allProjects.map((item) => {
              return (
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
              <h3>Get one-on-one React Native help</h3>
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
            <h2>What is React Native and why should I learn it?</h2>
            <p>React Native is a framework created by Facebook, which allows developing native mobile apps for Android and iOS simultaneously.  
            </p>
            <p>
            It provides a number of components for creating a user interface, which translate into native controls corresponding to a given platform. For example, when we want to display a line of text, we will use the `Text` component in React Native. Then, the framework will ensure that the Android application uses the native` TextView` control, while the iOS one uses`UITextView` control. 
            </p>
            <p>
            Now, let’s take a short trip back in time. The beginning of the React Native framework dates back to 2012 – 2015 when Facebook creators wanted to release its mobile app version. At first, they tried to do it using web software development technologies. However, they turned out to be insufficient, considering the growing popularity of mobile applications and the importance of user experience. Providing a good UX for Facebook in the mobile version became one of their main goals. 
            </p>
          </div>

          <hr />

          <div className={styles.category__details__part}>
            <h2>Why should I practice React Native by building projects?</h2>
            <p>
            With React Native, you create one codebase that works on both Android and iOS. And it doesn't just “work”—it compiles to native Java and Swift code. Specifically, React Native creates a bridge between web UI components and their native Java/Swift counterparts. Think about the implications for your software project.
            </p>
            <p>
            For a long time, React Native was considered to be commercially unviable. It wasn’t developed or supported enough to produce “native-like” apps.

            But the times have changed. React Native is gaining popularity, gaining community support, and gaining more market share. It’s getting easier and easier to write brilliant apps using React Native—and the world is taking notice.
            </p>
            <p>
            With React Native, you create one codebase that works on both Android and iOS. And it doesn’t just “work”—it compiles to native Java and Swift code. Specifically, React Native creates a bridge between web UI components and their native Java/Swift counterparts.

Think about the implications for your software project. No need for two development teams for two platforms. No need to synchronize features and layouts. You simply develop faster and can get more out of your budget.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Html_css