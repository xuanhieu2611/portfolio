import React from 'react'
import styles from "./About.module.css"

export default function About() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>About me</h2>
            <div className={styles.content}>
                {/* <div className={styles.imgContainer}> */}
                    <img src="/about.jpeg" alt="About me picture"/>
                {/* </div> */}
                <ul className={styles.aboutItems}>
                    <li className={styles.item}>
                        <h3>About</h3>
                        <p>I'm originally from Vietnam</p>
                    </li>
                    <li className={styles.item}>
                        <h3>Education</h3>
                        <p>I'm currently a Computer Science student at the University of British Columbia</p>
                    </li>   
                    <li className={styles.item}>
                        <h3>Passion</h3>
                        <p>I love coding and create things. In my free time, I also enjoy going to the gym and playing basketball</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
