import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <>
      <Helmet title="About - Yordan Ramchev" defer={false} />
      <Layout>
        <section className="container container--max-width-sm">
          <h1>A little about myself</h1>
          <p>
            Hey, I am <strong>Yordan Ramchev</strong>, a Frontend developer
            living in Varna, Bulgaria. I have been making digital products for
            the past four years. In the first years of my career, the main focus
            of my work is developing Web Applications for small and medium-sized
            businesses which helped me to build and expand the skill sets that
            would define my career.
          </p>

          <h2>Clients</h2>
          {/* <p>
            I've collaborated on great products for ... You could check them{" "}
            <Link to="/projects" className="link">
              here
            </Link>
            .
          </p> */}
        </section>
      </Layout>
    </>
  )
}
