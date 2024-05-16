import { useState } from "react"
import styles from "./Navbar.module.css"

export default function Navbar() {
 const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  }
  
  return (
  <>
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <span>Hieu Le</span>
        <ul className={styles.link}>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <nav className={styles.hamburgerNav}>
      <div className={styles.logo}>Hieu Le</div>
      <div className={styles.hamburgerMenu}>
          <div className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ""}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
          </div>
          <div className= {`${styles.menuLinks} ${isOpen ? styles.open : ""}`}>
            <li><a href="#About" onClick={toggleMenu}>About</a></li>
            <li><a href="#Projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
          </div>
      </div>
    </nav>
  </>
  )
}
