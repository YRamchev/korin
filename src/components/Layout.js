import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css"
import "./layout.css"

export default ({ children }) => {
  return (
    <section className="page-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  )
}
