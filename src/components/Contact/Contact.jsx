import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <div className={styles.contact}>
        <p className={styles.sectionTextp1}>
            Get in Touch
        </p>
        <h1 className={styles.title}>Contact Me</h1>
        <div className={styles.contactInfoUpperContainer}>
            <div className={styles.contactInfoContainer}>
                <img src="gmail.png" alt="gmail icon" className={`${styles.icon} ${styles.iconContact} ${styles.emailIcon}`} />
                <p><a href="mailto:hieulexuan261103@gmail.com">hieulexuan261103@gmail.com</a></p>
            </div>
            <div className={styles.contactInfoContainer}>
                <img src="linkedin.svg.png" alt="linkedin icon" className={`${styles.icon} ${styles.iconContact}`} />
                <p><a href="https://linkedin.com/in/hieule2611" target="_blank">LinkedIn</a></p>
            </div>
            <div className={styles.contactInfoContainer}>
                <img src="instagram.svg" alt="instagram icon" className={`${styles.icon} ${styles.iconContact}`} />
                <p><a href="https://instagram.com/hieu.spring" target="_blank">Instagram</a></p>
            </div>
            <div className={styles.contactInfoContainer}>
                <img src="github.svg.png" alt="github icon" className={`${styles.icon} ${styles.iconContact}`} />
                <p><a href="https://github.com/xuanhieu2611" target="_blank">Github</a></p>
            </div>
        </div>
    </div>
    )
}
