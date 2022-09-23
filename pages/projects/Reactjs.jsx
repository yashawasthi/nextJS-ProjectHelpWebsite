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
              with curated Reactjs
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
            Bridge the gap between theory and real-world code by working on curated React.js projects.
            Use Codersarts as practice or enhance your portfolio with these fun React.js project ideas.
            From beginner React.js projects to more advanced ones, find your next coding project now.
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
              <h3>Get one-on-one React.js help</h3>
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
            <h2>What is Reactjs and why should I learn it?</h2>
            <p>React it's a JavaScript library that enables developers to quickly and efficiently build interactive and dynamic user interfaces with minimal coding. Working with react makes our life as a developer easier, thanks to its simplicity and its modular infrastructure.
            </p>
            <p>
              React uses declarative instead of imperative syntax. It’s a simpler way of developing apps, and you can learn why here.
              Basically, React is faster to develop with because you don’t need to tell the app how to represent the state — you just need to say what you’d like to happen. It’s quick, it’s easy, and there’s less room for human error.
            </p>
            <p>
              React saves you time and money on development because it’s component-based. You can break down an interface into reusable components that allow you to build dynamic user interfaces.
              This taps into the current thinking behind ‘Design Systems’. These enable developers to provide a single source of truth for designers, ensuring consistency for large companies working across multiple tech platforms.
            </p>
          </div>

          <hr />

          <div className={styles.category__details__part}>
            <h2>Why should I practice Reactjs by building projects?</h2>
            <p>
              This goes hand in hand with reusability. At the beginning when the application and the components are very lightweight, they're easy to maintain. But once the requirements start growing, components tend to become very complex and therefore less maintainable.

              I've often seen a component that has many different cases, each representing a different outcome. The JSX is flooded with conditional renderings (ternary operators and simple && operators), classnames are applied conditionally, or the component uses a huge switch statement. There are many possible prop and state values, each responsible for a different outcome.
            </p>
            <p>
              Another root cause for problems React devs have is a poor basic understanding of how React works under the hood. I've been there, too.

              I've seen many people jumping too fast into intermediate or advanced concepts without having a solid foundation. But this isn't only particular to React. It's a general problem in programming.

              Not having a solid understanding of React can also cause issues for you as a developer. I remember having headaches when I wanted to use different component lifecycles but didn't know how to actually use them. So I had to take a few steps back and go deeper into that topic.
            </p>
            <p>
              This challenge goes hand in hand with maintainability. It is not only specific to React, but applies generally in software.

              I've learned that crafting excellent software is not only about UX, clean code patterns, or clever architecture, for example. For me, the quality of a software also rises or falls with its ability to scale.

              To me, many things come into play that increase the scalability of software. You'll learn my most important tips in this article.

              I think when you keep maintainability and scalability in mind when orchestrating your components and organizing your project structure, you'll less likely end up with a mess of source code that needs major refactoring.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Html_css