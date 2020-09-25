import React from "react"
import Navigation from "./Navigation"
import { Link } from "gatsby"
import styles from "./Header.module.css"

export default () => (
  <header className={styles.header}>
    <div
      className={`container container--max-width ${styles.header__container}`}
    >
      <Link to="/" className={styles.header__logo}>
        Yordan Ramchev
      </Link>

      <Navigation />
    </div>
  </header>
)
