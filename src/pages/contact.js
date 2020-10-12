import React, { useState, useMemo } from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const contact = useMemo(() => {
    return {
      name: name,
      email: email,
      message: message,
    }
  }, [name, email, message])

  const handleSubmit = e => {
    e.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", contact }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  return (
    <>
      <Helmet title="Contact - Yordan Ramchev" defer={false} />

      <Layout>
        <section className="container container--max-width-sm">
          <h1>Contact me</h1>
          <p>
            If you have any questions or just want to chat - feel free to write
            me using the form below or check the <strong>Footer</strong> to add
            me :)
          </p>

          <form
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <label>
                <div className="field__label">Your name</div>
                <input type="text" placeholder="Your name" name="name" />
              </label>
            </div>
            <div className="field">
              <label>
                <div className="field__label">Your E-mail</div>
                <input type="text" placeholder="Your E-mail" name="email" />
              </label>
            </div>
            <div className="field">
              <label>
                <div className="field__label">Message</div>
                <textarea name="message" defaultValue="message" />
              </label>
            </div>
            <button type="submit" className="btn btn--primary mt-24">
              Submit
            </button>
          </form>
        </section>
      </Layout>
    </>
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
