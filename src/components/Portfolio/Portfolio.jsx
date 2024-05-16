import styles from "./Portfolio.module.css"
import {useRef} from "react"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"VitAlert ",
        img:"/VitAlert.png",
        description:"VitAlert is a web application designed to help individuals maintain a balanced diet by tracking their daily food intake. VitAlert will display the total amount of specific nutrients, percentage of recommended daily intake achieved, and symptoms of deficiency of a specific nutrient. This additional information includes the deficiency rarity, deficiency symptoms , foods that contain the specific nutrient, and functions of the specific nutrient within the human body.",
        githubLink: "https://github.com/xuanhieu2611/VitAlert",
        link: "https://vitalert.tech/"
    },
    {
        id:2,
        title:"Next.js",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi ullam, tempora reiciendis quisquam quod?",
        githubLink: "https://github.com/xuanhieu2611/VitAlert",
    },
    {
        id:3,
        title:"JavaScript",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi ullam, tempora reiciendis quisquam quod?",
        githubLink: "https://github.com/xuanhieu2611/VitAlert",
    },
    {
        id:4,
        title:"Music",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi ullam, tempora reiciendis quisquam quod?",
        githubLink: "https://github.com/xuanhieu2611/VitAlert",
    }
]

const ButtonLink =  ({item}) => {
    console.log(item.link)
    return (
        <button onClick={() => (window.open(`${item.link}`))} className={styles.iconButton}>
            <span>Visit Website</span>
        </button>
    )
}

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref})
    const y = useTransform(scrollYProgress, [0,1], [-300,300])
    return (
        <section id="Projects">
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.imgContainer} ref={ref}>
                        <img src={item.img} alt="This is an image" />
                    </div>
                    <motion.div className={styles.textContainer} style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <div className={styles.buttonContainer}>
                            <button onClick={() => (window.open(`${item.githubLink}`))} className={styles.iconButton}>
                                <img src="/github.svg.png" alt="github icon" />
                                <span>Github</span>
                            </button>
                            {item.link && <ButtonLink item={item} />}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default function Portfolio() {

    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref, offset:["end end","start start"]})
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
  return (
    <div className={styles.portfolio} ref={ref}>
        <div className={styles.progress}>
            <h1>Featured Work</h1>
            <motion.div style={{scaleX}}className={styles.progressBar}>

            </motion.div>
        </div>
        {items.map(item=> (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}
