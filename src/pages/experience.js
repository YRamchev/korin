import React from "react"
import { Helmet } from "react-helmet"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import "./experience.css"
export default () => {
  return (
    <>
      <Helmet title="Projects - Yordan Ramchev" defer={false} />
      <section className="section experience grid-halves container container--max-width">
        <div className="experience__left">
          <h1>MentorMate</h1>
          <h2>2019-Present</h2>
          <p>
            Nam vehicula, velit et malesuada dignissim, mi augue posuere dolor,
            sed suscipit felis risus semper nulla. Vestibulum auctor ante id
            nisi aliquet, vel euismod felis sagittis. Praesent odio lacus,
            ultrices et arcu vitae, dictum semper mauris. Vestibulum laoreet
            lobortis magna, nec vehicula ante commodo a. Ut congue elit id nulla
            cursus faucibus. Sed dolor lectus, facilisis sed elit sit amet,
            mollis elementum arcu. Pellentesque quis sapien sed lorem ultrices
            accumsan. Nulla turpis quam, blandit non elit maximus, tristique
            ultrices dui.{" "}
          </p>
          <OutboundLink
            className="btn btn--primary"
            href="https://mentormate.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit web site
          </OutboundLink>
        </div>
        <div className="experience__right">
          <h1>Projects</h1>
        </div>
      </section>
    </>
  )
}
