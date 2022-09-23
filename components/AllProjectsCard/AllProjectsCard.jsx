import Link from 'next/link';
import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import styles from './AllProjectsCard.module.css';


function AllProjectsCard(props) {
  return (
    <div className={styles.all__projects__card}>
        <div className={`badge ${props.difficulty.toLowerCase()==='easy' ?'easy' : 
        props.difficulty.toLowerCase()==='medium' ? 'medium' : 'hard'
        }`}>{props.difficulty}</div>
        <h3 className={styles.all__projects__header}>
        <Link href={props.href}>
            <a>{props.title}</a>
        </Link>
       
        </h3>
        <p>{props.description.slice(0,70)}...</p>
        <div className={styles.technologies}>
            {props.technologies.length > 0 && props.technologies.map((item,index)=>{
                return (<div className={styles.tech__item} key={index}>{item}</div>)
            })}
        </div>

        <div className={styles.all__projects__link__wrapper}>
        <Link href={props.href}>
            <a className={styles.all__projects__card__link}>View Project <FiArrowRight /></a>
        </Link>
        </div>
    </div>
  )
}

export default AllProjectsCard