import React from "react"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <>
      <Helmet title="About - Yordan Ramchev" defer={false} />

      <section className="section container container--max-width-sm">
        <h1>A little about myself</h1>
        <p>
          Hey, I am <strong>Yordan Ramchev</strong>, a Frontend developer living
          in Varna, Bulgaria. I have been making digital products for the past
          four years. In the first years of my career, the main focus of my work
          is developing Web Applications for small and medium-sized businesses
          which helped me to build and expand the skill sets that would define
          my career.
        </p>
        {/* <p>
            I've collaborated on great products for ... You could check them{" "}
            <Link to="/projects" className="link">
              here
            </Link>
            .
          </p> */}

        <h1>Skills and tools</h1>
        <h2>Coding</h2>
        <ul>
          <li>HTML (Bootstrap, Foundation, Bulma, Tailwind)</li>
          <li>CSS (SASS, LESS)</li>
          <li>VueJS (Vuex, Nuxt)</li>
          <li>ReactJS (Redux, StoryBook, GastbyJS)</li>
          <li>Git (Gitlab, Bitbucket, Github)</li>
        </ul>
        <h2>Design</h2>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Sketch</li>
          <li>Figma</li>
          <li>Zeplin</li>
        </ul>

        <h2>Project management</h2>
        <ul>
          <li>Jira</li>
          <li>Notion</li>
          <li>Service Now</li>
        </ul>
      </section>
    </>
  )
}
