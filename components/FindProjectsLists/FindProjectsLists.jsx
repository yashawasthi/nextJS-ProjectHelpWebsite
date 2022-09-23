import CourseListCard from '../CourseListCard/CourseListCard';
import styles from './FindProjectsLists.module.css';
import Link from 'next/link';
import { allProjectsData } from '../../data/projects';
import Image from 'next/image';
import webDevIcon from '../../public/assets/web-dev-large.png';
import mobileDevIcon from '../../public/assets/mobile-app-large.png';
import mlIcon from '../../public/assets/ml.png';



export const getStaticProps = async ()=>{
    return {
        props:{
            allProjectsData:allProjectsData
        }
    }
}



function FindProjectsLists() {
    let webCards = 0;
    let mobileCard = 0;
    let mlCards = 0;
  return (
    <div className={styles.find__projects__list}>
    <div>
        <h1 className={styles.heading}>Find Your Next Project</h1>
    </div>
    <div className={styles.find__projects__area}>
    <h3 className={styles.projects__heading}> 
    <span style={{marginRight:'15px'}}><Image src={webDevIcon} width={'30px'} height={'30px'} /></span>
    Web Development Projects
    </h3>
    <div className={styles.card__group}>

          {allProjectsData.map((item)=>{
                        if(item.category && item.category==="web" && webCards < 3){
                            webCards++;
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
                        }else{
                            return null;

                        }
                         
          })}
    </div>
    <div className='mt-4'>
        <Link href="/">
            <a className='primaryBtn' >View More</a>
        </Link>
    </div>
    </div>

    <div className={styles.find__projects__area} style={{background:'#FFFBEC',marginTop:'3%',marginBottom:'3%'}}>
    <h3 className={styles.projects__heading} style={{color:'#CF8E10'}}> 
    <span style={{marginRight:'15px'}}><Image src={mobileDevIcon} width={'30px'} height={'30px'} /></span>
    Mobile app projects
    </h3>
    <div className={styles.card__group}>

    {allProjectsData.map((item)=>{
                        if(item.category && item.category==="mobile" && mobileCard < 3){
                            mobileCard++
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
                        }else{
                            return null;
                        }
                         
          })}
    </div>
    <div className='mt-4'>
        <Link href="/">
            <a className='primaryBtn' >View More</a>
        </Link>
    </div>
    </div>

    <div className={styles.find__projects__area} style={{background:'#FDEFE9',marginTop:'3%',marginBottom:'3%'}}>
    <h3 className={styles.projects__heading}  style={{color:'#B35D38'}}> 
    <span style={{marginRight:'15px'}}><Image src={mlIcon} width={'30px'} height={'30px'} /></span>
    Machine Learning & Data Science Projects
    </h3>
    <div className={styles.card__group}>

    {allProjectsData.map((item)=>{
                 if(item.category && item.category==="mobile" && mlCards < 3){
                            mlCards++
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
                        }else{
                            return null;
                        }
                         
          })}
    </div>
    <div className='mt-4'>
        <Link href="/">
            <a className='primaryBtn' >View More</a>
        </Link>
    </div>
    </div>
    </div>
  )
}

export default FindProjectsLists