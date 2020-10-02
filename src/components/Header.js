import React from "react"
import Navigation from "./Navigation"
import { Link } from "gatsby"
import "./Header.css"
import logo from "../assets/images/logo.svg"

export default () => (
  <header className="header">
    <div className="container container--max-width header__container">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Logo" />
        Yordan Ramchev
      </Link>

      <Navigation />
    </div>
  </header>
)
