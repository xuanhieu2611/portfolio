import styles from "./Hero.module.css"
import { motion } from "framer-motion"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x:0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    }
  }
}

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <motion.div className={styles.textContainer} variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Hieu Le</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.div variants={textVariants} className={styles.buttons}>
            <motion.button className={styles.button1} variants={textVariants} onClick={() => location.href='/#Projects'}>See the Latest Works</motion.button>
            <motion.button className={styles.button2} variants={textVariants} onClick={() => location.href='/#Contact'}>Contact Me</motion.button>
          </motion.div>
          <motion.div className={styles.socialsContainer}>
            <motion.img src="/instagram.svg" alt="My Instagram Profile" className={styles.icon} onClick={() => (window.open("https://instagram.com/hieu.spring"))}/>
            <motion.img src="/linkedin.svg.png" alt="My Linkedin Profile" className={styles.icon} onClick={() => (window.open("https://linkedin.com/in/hieule2611"))}/>
            <motion.img src="/github.svg.png" alt="My Github Profile" className={styles.icon} onClick={() => (window.open("https://github.com/xuanhieu2611"))}/>
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.imageContainer}>
        <img src="/ava.jpg" alt="" />
      </div>
    </div>
  )
}
