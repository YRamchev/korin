import React from "react"
import { Link } from "gatsby"
import styles from "./Navigation.module.css"

export default () => (
  <nav className={styles.nav} aria-label="navigation">
    <ul className={styles.nav__list}>
      <li className={styles.nav__item}>
        <Link
          to="/"
          className={styles.nav__link}
          activeClassName={styles.active}
        >
          Home
        </Link>
      </li>
      <li className={styles.nav__item}>
        <Link
          to="/about"
          className={styles.nav__link}
          activeClassName={styles.active}
        >
          About
        </Link>
      </li>
      <li className={styles.nav__item}>
        <Link
          to="/projects"
          className={styles.nav__link}
          activeClassName={styles.active}
        >
          Projects
        </Link>
      </li>
      <li className={styles.nav__item}>
        <Link
          to="/contact"
          className={styles.nav__link}
          activeClassName={styles.active}
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
