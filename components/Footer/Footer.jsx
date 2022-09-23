import React from 'react'
import styles from './Footer.module.css';
import Image from 'next/image';
import logo from '../../public/codersartsLogo.png';
import Link from 'next/link';
import {BsFacebook,BsLinkedin} from 'react-icons/bs';
import {AiFillYoutube,AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai';


function Footer() {
  return (
    <div className={` container-fluid  ${styles.footer}`}>
        <div className='row' style={{borderBottom:'2px solid gray'}}>
            <div className='col-md-5 col-sm-12'>
                <div className={`${styles.footer__logo__area}`}>
                    <Image
                    src={logo}
                    alt="codersarts"
                    placeholder="blur"
                    height={'50px'}
                    width={'50px'}
                    />
                    <div className={styles.logo__footer}>
                        <h3>Codersarts</h3>
                    </div>
                </div>
                <a href="https://www.codersarts.com/" 
                target={'_blank'}
                 rel="noreferrer">
                 Get Project and Assignment Help
                 </a>
                
               <div className='mt-3'>
                   <h5>About Us</h5>
                   <p className={styles.aboutUs}>
                Codersarts is a product of Sofstack.com.
                 SofStack is product development company based in Noida, India.
                We are  serving its clients across the globe.As passionate 
                professionals of technology, Here you will find all sorts
                 of services about our work as a Web Development, 
                 Mobile App Development, Technology Solutions for 
                 Business, Hiring dedicated developer for Project, 
                 IT Solutions, Database Development, 
                Programming expert Help solutions.
                </p>
               </div>
            </div>
            
            <div className='col-md-2 ml-5 col-sm-12'>
               <div className={styles.footer__links}>
                   <div className='mb-2'>
                   <Link href={'/'}>
                        <a>Web Development Projects</a>
                    </Link>
                   </div>

                  

                   <div className='mb-2'>
                   <Link href={'/'}>
                        <a>Machine Learning Projects</a>
                    </Link>
                   </div>

                   <div className='mb-2'>
                   <Link href={'/'}>
                        <a>Data Science Projects</a>
                    </Link>
                   </div>
                   <div className='mb-2'>
                   <Link href={'/'}>
                        <a>Java Projects</a>
                    </Link>
                   </div>
               </div>

               
            </div>
            <div className='col-md-2 ml-5 col-sm-12'>
               <div className={styles.footer__links}>
                   <div className='mb-2'>
                   <Link href={'/'}>
                        <a>HTML/CSS Projects</a>
                    </Link>
                   </div>

                  

                   <div className='mb-2'>
                   <Link href={'/'}>
                        <a>React Projects</a>
                    </Link>
                   </div>

                   <div className='mb-2'>
                   <Link href={'/'}>
                        <a>Nodejs Projects</a>
                    </Link>
                   </div>
                   <div className='mb-2'>
                   <Link href={'/'}>
                        <a>Python Projects</a>
                    </Link>
                   </div>
                   
                   <div className='mb-2'>
                   <Link href={'/'}>
                        <a>Javascript Projects</a>
                    </Link>
                   </div>

                   <div className='mb-2'>
                   <Link href={'/'}>
                        <a>NLP Projects</a>
                    </Link>
                   </div>
               </div>

               
            </div>

            <div className='col-md-3 col-sm-12' style={{marginTop:'6%'}}>
                <h4>Contact Us</h4>
                <p>Customer Care: (+91) 0120  4118730</p>
                <p>Time: 10:00 AM - 08:00 PM IST</p>
                <p>Email: <a href="mailto: contact@codersarts.com"> contact@codersarts.com</a> </p>
                <p>Registered address: G-69, Sector 63, Noida - 201301, India</p>
            </div>



        </div>
        <div className={styles.otherLinks}>
                <a href="https://www.codersarts.com/privacy-policy" 
                target={'_blank'}
                 rel="noreferrer">
                 Privacy Policy
                 </a>
                 <a href="https://www.codersarts.com/terms-of-service" 
                target={'_blank'}
                 rel="noreferrer">
                 Terms and Conditions
                 </a>

                 <a href="https://www.facebook.com/codersarts2017" 
                target={'_blank'}
                 rel="noreferrer">
                    <BsFacebook className={styles.socialIcon} />
                 </a>

                 <a href="https://twitter.com/@CodersArts" 
                target={'_blank'}
                 rel="noreferrer">
                    <AiFillTwitterCircle className={styles.socialIcon} style={{fontSize:'2rem'}} />
                 </a>

                 <a href="https://www.youtube.com/channel/UC1nrlkYcj3hI8XnQgz8aK_g" 
                target={'_blank'}
                 rel="noreferrer">
                    <AiFillYoutube className={styles.socialIcon} style={{fontSize:'2rem'}} />
                 </a>

                 <a href="http://linkedin.com/company/codersarts" 
                target={'_blank'}
                 rel="noreferrer">
                    <BsLinkedin className={styles.socialIcon} />
                 </a>

                 <a href="https://www.instagram.com/codersarts/" 
                target={'_blank'}
                 rel="noreferrer">
                    <AiFillInstagram className={styles.socialIcon} style={{fontSize:'2rem'}} />
                 </a>
                 
        </div>
    </div>
  )
}

export default Footer