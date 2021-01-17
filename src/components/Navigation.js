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
<<<<<<< HEAD
        <Link
          to="/about"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          About
        </Link>
      </li>
      <li className="nav__item">
        <Link
          to="/work"
=======
        <AniLink
          cover
          bg="#fff"
          direction="up"
          to="/experience"
>>>>>>> 3bbcdbcb9f41e1b021d28836bfd41a42d8072ea0
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Experience
        </AniLink>
      </li>

      <li className="nav__item">
<<<<<<< HEAD
        <Link
          to="/resume"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Resume
        </Link>
=======
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
>>>>>>> 3bbcdbcb9f41e1b021d28836bfd41a42d8072ea0
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
