import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Hello World!!",
    url: "https://www.burnsyhosting.co.uk",
    description:
      "welcome to my very basic site",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Burnsy Hosting!</b>
      </h1>
      <p className={styles.intro}>
        <b>This is a starter page:</b>{" "}
        <br />
        <code>src/pages/index.js</code>.
      </p>
    </div>
    <ul className={styles.list}>
    </ul>
  </Layout>
)

export default IndexPage
