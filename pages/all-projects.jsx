import React, {useEffect, useState} from 'react';
import styles from './allProjects.module.css';
import Navbar from '../components/Navbar/Navbar';
import AllProjectsCard from '../components/AllProjectsCard/AllProjectsCard';
import {allProjectsData} from '../data/projects';
import Head from 'next/head';

export const getStaticProps = async () => {
  return {
    props: {
      allProjectsData: allProjectsData,
    },
  };
};

function allprojects({allProjectsData}) {
  const [currentActiveKey, setCurrentActiveKey] = useState (1);
  const [filteredArr, setFilteredArr] = useState ([]);
  const [notFound, setNotFound] = useState (false);

  useEffect (
    () => {
      if (!allProjectsData || allProjectsData.length === 0) {
        setNotFound (true);
      } else {
        setNotFound (false);
      }
    },
    [allProjectsData]
  );
  const handleSearch = query => {
    // console.log(query);
    // console.log(allProjectsData);

    if (query) {
      let filteredResult = allProjectsData.filter (item => {
        return (
          item.title.toLowerCase ().match (query.toLowerCase ()) ||
          item.technologies.includes (query)
        );
      });
      // console.log ('Result : ', filteredResult);
      if (filteredResult.length > 0) {
        setFilteredArr (filteredResult);
        setNotFound (false);
      }
    }
  };

  const handleFilter = (filteredTech, key) => {
    setCurrentActiveKey (key);

    let filteredResult = allProjectsData.filter (item => {
      return item.technologies.includes (filteredTech);
    });

    if (filteredResult.length > 0) {
      setFilteredArr (filteredResult);
      setNotFound (false);
    } else {
      setNotFound (true);
    }

    if (key === 1) {
      setFilteredArr ([]);
      setNotFound (false);
    }
  };

  return (
    <div>
      <Head>
        <title>Codersarts Project</title>
        <meta
          name="keywords"
          content="Codersarts, Codersarts Support, Codersarts contact"
        />
        <meta
          name="description"
          content="Codersarts Support - Help & Support"
        />
        <meta name="author" content="Codersarts" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/codersartsLogo.ico" />
      </Head>
      <main>
        <Navbar />
        <div className={styles.all__projects__banner}>
          <h1>What Project Are you Looking For?</h1>
          <div className={styles.projects__search__bar}>
            <input
              type="search"
              placeholder="Search projects here..."
              onChange={e => {
                handleSearch (e.target.value);
              }}
            />
            <button
              type="button"
              className="primaryBtn"
              style={{borderRadius: '100px'}}
              disabled
            >
              Search
            </button>
          </div>
        </div>
        <div className={`container ${styles.all__projects}`}>
          <div className={styles.all__projects__category}>
            <ul>
              <li
                onClick={() => handleFilter ('', 1)}
                className={currentActiveKey === 1 ? styles.active : ''}
              >
                All Courses
              </li>
              <li
                onClick={() => handleFilter ('HTML/CSS', 2)}
                className={currentActiveKey === 2 ? styles.active : ''}
              >
                HTML/CSS
              </li>
              <li
                onClick={() => handleFilter ('Javascript', 3)}
                className={currentActiveKey === 3 ? styles.active : ''}
              >
                Javascript
              </li>
              <li
                onClick={() => handleFilter ('React', 4)}
                className={currentActiveKey === 4 ? styles.active : ''}
              >
                React
              </li>
              <li
                onClick={() => handleFilter ('Nodejs', 5)}
                className={currentActiveKey === 5 ? styles.active : ''}
              >
                Nodejs
              </li>
              <li
                onClick={() => handleFilter ('Django', 6)}
                className={currentActiveKey === 6 ? styles.active : ''}
              >
                Django
              </li>
              <li
                onClick={() => handleFilter ('Java', 7)}
                className={currentActiveKey === 7 ? styles.active : ''}
              >
                Java
              </li>
            </ul>
          </div>
          <div className={styles.all__projects__listing}>

            {notFound
              ? <div>
                  <h1>Not found</h1>
                </div>
              : filteredArr.length > 0
                  ? filteredArr.map (item => {
                      return (
                        <AllProjectsCard
                          key={item.id}
                          title={item.title}
                          href={item.filePath}
                          description={item.introduction}
                          difficulty={item.difficulty}
                          technologies={item.technologies}
                        />
                      );
                    })
                  : allProjectsData.map (item => {
                      return (
                        <AllProjectsCard
                          key={item.id}
                          title={item.title}
                          href={item.filePath}
                          description={item.introduction}
                          difficulty={item.difficulty}
                          technologies={item.technologies}
                        />
                      );
                    })}

          </div>

        </div>
      </main>
    </div>
  );
}

export default allprojects;
