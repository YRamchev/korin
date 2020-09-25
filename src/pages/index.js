import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import styles from "./index.module.css"

export default () => {
  return (
    <Layout>
      <section className={`container container--max-width ${styles.home}`}>
        <h1 className={styles.home__title}>
          Hey, I am{" "}
          <Link to="/about" className="link">
            Yordan Ramchev
          </Link>
          , a Frontend developer for{" "}
          <a
            href="https://mentormate.com/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            MentorMate
          </a>{" "}
          living in Varna Bulgaria.
        </h1>
        <Link to="/projects" className="btn">
          Checkout my work
        </Link>
      </section>
    </Layout>
  )
}
