import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./index.css"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <>
      <Helmet title="Home - Yordan Ramchev" defer={false} />

<<<<<<< HEAD
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
=======
      <section className="section container container--max-width home grid-halves">
        <div className="home__left">
          <h1 className="home__title">
            Hello, <br /> I am{" "}
            <AniLink
              cover
              bg="#fff"
              direction="up"
              to="/about"
              className="link"
            >
              Yordan Ramchev
            </AniLink>
            , <br /> a Frontend developer living in Varna Bulgaria.
          </h1>
          <AniLink
            cover
            bg="#fff"
            direction="up"
            to="/experience"
            className="btn btn--primary"
          >
            Checkout my work
          </AniLink>
        </div>
        <div className="home__right">right</div>
      </section>
>>>>>>> 3bbcdbcb9f41e1b021d28836bfd41a42d8072ea0
    </>
  )
}
