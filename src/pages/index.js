import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import "./index.css"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <>
      <Helmet title="Home - Yordan Ramchev" defer={false} />

      <Layout>
        <section className="container container--max-width home">
          <h1 className="home__title">
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
    </>
  )
}
