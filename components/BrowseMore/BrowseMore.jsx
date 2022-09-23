import Link from 'next/link'
import React from 'react';
import styles from './BrowseMore.module.css';

function BrowseMore() {
  return (
    <div className={`container px-5  py-5 text-center`}>
        <h1>Browse More Project</h1>
        <div className={`row mt-5 ${styles.projects__listing}`}>
            <div className='col-md-3 col-sm-6'>
                <div>
                <Link href="/projects/web-development">
                    <a className={styles.project__band}>Web development Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/Html_css">
                    <a className={styles.project__band}>HTML/CSS Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/Reactjs">
                    <a className={styles.project__band}>React Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/Nodejs">
                    <a className={styles.project__band}>Nodejs Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/Java">
                    <a className={styles.project__band}>Java Projects</a>
                </Link>
                </div>

            </div>
            <div className='col-md-3 col-sm-6'>
                <div>
                <Link href="/projects/DataScience">
                    <a className={styles.project__band}>Data Science Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/NLP">
                    <a className={styles.project__band}>Natural Language Processing Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/IOS">
                    <a className={styles.project__band}>IOS Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/DeepLearning">
                    <a className={styles.project__band}>Deep Learning Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/DeepLearning">
                    <a className={styles.project__band}>Python Projects</a>
                </Link>
                </div>

            </div>
            <div className='col-md-3 col-sm-6'>
                <div>
                <Link href="/projects/Angular">
                    <a className={styles.project__band}>Angular.js Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/ReactNative">
                    <a className={styles.project__band}>ReactNative Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/Swift">
                    <a className={styles.project__band}>Swift Projects</a>
                </Link>
                </div>
                <div>
                <Link href="/projects/PHP">
                    <a className={styles.project__band}>PHP Projects</a>
                </Link>
                </div>
                

            </div>
        </div>
        <div className='text-secondary'>More coming soon...</div>
    </div>
  )
}

export default BrowseMore