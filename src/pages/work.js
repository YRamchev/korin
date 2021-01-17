import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import "./experience.css"
export default () => {
  return (
    <>
      <Helmet title="Projects - Yordan Ramchev" defer={false} />
      <Layout>
        <section className="experience grid-halves container container--max-width">
          <div className="experience__left">
            <h1>
              <a href="https://mentormate.com" target="_blank" rel="noreferrer">
                MentorMate
              </a>
            </h1>
            <h2>2019-Present</h2>
            <p>
              Nam vehicula, velit et malesuada dignissim, mi augue posuere
              dolor, sed suscipit felis risus semper nulla. Vestibulum auctor
              ante id nisi aliquet, vel euismod felis sagittis. Praesent odio
              lacus, ultrices et arcu vitae, dictum semper mauris. Vestibulum
              laoreet lobortis magna, nec vehicula ante commodo a. Ut congue
              elit id nulla cursus faucibus. Sed dolor lectus, facilisis sed
              elit sit amet, mollis elementum arcu. Pellentesque quis sapien sed
              lorem ultrices accumsan. Nulla turpis quam, blandit non elit
              maximus, tristique ultrices dui.{" "}
            </p>
            <div>Socials</div>
            <a
              className="btn btn--primary"
              href="https://mentormate.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit web site
            </a>
            <div>1/3</div>
          </div>
          <div className="experience__right">Right side</div>
        </section>
      </Layout>
    </>
  )
}
