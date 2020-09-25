import React from "react"
import Layout from "../../components/Layout"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <>
      <Helmet title="Projects - Yordan Ramchev" defer={false} />
      <Layout>
        <section className="container container--max-width">Projects</section>
      </Layout>
    </>
  )
}
