import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <>
      <Helmet title="Contact - Yordan Ramchev" defer={false} />

      <Layout>
        <section className="container container--max-width-sm">
          <h1>Contact me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tristique dolor nec quam condimentum rutrum. Sed mattis mattis
            euismod. Praesent iaculis purus eu magna hendrerit, a faucibus justo
            elementum. Proin sed eros nec est maximus iaculis. Proin pharetra
            justo eu convallis gravida. Mauris vestibulum lacinia mi eu blandit.
          </p>
          <div className="field">
            <label>
              <div className="field__label">Your name</div>
              <input type="text" placeholder="Your name" />
            </label>
          </div>
          <div className="field">
            <label>
              <div className="field__label">Your E-mail</div>
              <input type="text" placeholder="Your E-mail" />
            </label>
          </div>
          <div className="field">
            <label>
              <div className="field__label">Message</div>
              <textarea>Message...</textarea>
            </label>
          </div>
          <button className="btn btn--primary mt-24">Submit</button>
        </section>
      </Layout>
    </>
  )
}
