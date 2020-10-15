import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./Navigation.css"

export default () => (
  <nav className="nav" aria-label="navigation">
    <ul className="nav__list">
      <li className="nav__item">
        <AniLink
          cover
          bg="#fff"
          direction="up"
          to="/"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Home
        </AniLink>
      </li>
      <li className="nav__item">
        <AniLink
          cover
          bg="#fff"
          direction="up"
          to="/experience"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Experience
        </AniLink>
      </li>
      <li className="nav__item">
        <AniLink
          cover
          bg="#fff"
          direction="up"
          to="/about"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          About
        </AniLink>
      </li>

      <li className="nav__item">
        <AniLink
          cover
          bg="#fff"
          direction="up"
          to="/contact"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Contact
        </AniLink>
      </li>
    </ul>
  </nav>
)
