import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer>
      <div className={styles.navLinkContainer}>
          <ul className={styles.navLinks}>
              <li><a href="#About">About</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Contact">Contact</a></li>
          </ul>
      <p>Copyright &copy; 2024 Hieu Le. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
