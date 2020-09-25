import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <>
      <Helmet title="About - Yordan Ramchev" defer={false} />
      <Layout>
        <section className="container container--max-width">About</section>
      </Layout>
    </>
  )
}
