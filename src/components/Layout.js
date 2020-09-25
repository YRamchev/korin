import React from "react"
import Header from "./Header"
import "normalize.css"
import "./Layout.css"

export default ({ children }) => (
  <section className="page-wrapper">
    <Header />
    <main>{children}</main>
  </section>
)
