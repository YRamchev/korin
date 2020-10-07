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
        <section className="container container--max-width home grid-halves">
          <div className="home__left">
            <h1 className="home__title">
              Hello, <br /> I am{" "}
              <Link to="/about" className="link">
                Yordan Ramchev
              </Link>
              , <br /> a Frontend developer living in Varna Bulgaria.
            </h1>
            <Link to="/experience" className="btn">
              Checkout my work
            </Link>
          </div>
          <div className="home__right">right</div>
        </section>
      </Layout>
    </>
  )
}
