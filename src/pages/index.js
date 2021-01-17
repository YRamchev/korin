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
            Hello, <br />
            <Link to="/about" className="link">
              my name is Yordan
            </Link>
            , <br /> and I am a Frontend developer
          </h1>
          <Link to="/experience" className="btn btn--primary">
            Checkout my work
          </Link>
        </section>
      </Layout>
    </>
  )
}
