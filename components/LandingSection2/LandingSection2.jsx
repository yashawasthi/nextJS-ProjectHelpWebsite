import React from 'react'
import styles from  './LandingSection2.module.css';
import Image from 'next/image';
import section2Img from '../../public/assets/landingSection2.png'
import projectIcon from '../../public/assets/icon-projects.png';
import reactIcon from '../../public/assets/reactjs-plain.svg';
import javaIcon from '../../public/assets/java-plain.svg';
import javascriptIcon from '../../public/assets/javascript-plain.svg';
import python from '../../public/assets/python-plain.svg';
import nodejs from '../../public/assets/nodejs-plain.svg';

function LandingSection2() {
  return (
    <div className={`container px-3 pb-5 ${styles.section2}`}>
        <div className='row'>
            <div className='col-md-6 col-sm-12'>
                <Image 
                    src={section2Img}
                    height={'450px'}
                    width={'470px'}
                    placeholder="blur"
                    />
            </div>
            <div className={`col-md-6 col-sm-12 ${styles.section2__text}`}>
                <Image 
                src={projectIcon}
                placeholder={"blur"}
                height={'50px'}
                alt="image"
                width={'50px'}
                />

                <h1>Still writing “Hello World”?</h1>
                <h1>Build <span className='text-primary'>real-world</span> projects</h1>
                <div className={styles.section2__para}>
                Bridge the gap between learning and applying new skills through projects 
                designed by senior developers. More languages coming soon!
                </div>
                <div className={`d-flex mt-5 ${styles.imageSection}`}>
                   <span className={styles.lightIcon}>
                   <Image
                    src={reactIcon}
                    height={'40px'}
                    width={'40px'}
                    alt="icon"
                    
                    />
                   </span>
                   <span className={styles.lightIcon}>
                   <Image
                    src={nodejs}
                    height={'40px'}
                    width={'40px'}
                    alt="icon"
                    
                    />
                   </span>
                   <span className={styles.lightIcon}>
                   <Image
                    src={python}
                    height={'40px'}
                    width={'40px'}
                    alt="icon"
                    
                    />
                   </span>
                   <span className={styles.lightIcon}>
                   <Image
                    src={javaIcon}
                    height={'40px'}
                    width={'40px'}
                    alt="icon"
                    
                    />
                   </span>
                   <span className={styles.lightIcon}>
                   <Image
                    src={javascriptIcon}
                    height={'40px'}
                    width={'40px'}
                    alt="icon"
                    
                    />
                   </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingSection2