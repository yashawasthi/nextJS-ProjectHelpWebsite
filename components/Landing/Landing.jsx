import styles from './Landing.module.css';
import Link from 'next/link';
import Image from 'next/image';
import landingImg from '../../public/assets/landing.jpg'

function Landing() {
  return (
    <div className={styles.landing__wrapper}>
        <div className={styles.landing__text}>
            <h1>Learn programming by building projects</h1>
            <div className={styles.landing__para}>
            Improve your programming skills by working on real-world projects. Join our free 
            community to discuss projects, review code, and learn from peers and mentors.
            </div>
            <div className={styles.landing__btn__wrapper}>
                <Link href="/all-projects">
                    <a className={styles.landing__btn}>Explore Projects</a>
                </Link>
            </div>
        </div>
        <div className={styles.landing__img}>
           <Image 
           src={landingImg}
           width={'600px'}
           height={'450px'}
           priority
           placeholder="blur"
           />
        </div>
    </div>
  )
}

export default Landing