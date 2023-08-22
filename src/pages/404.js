import * as React from "react"
import {Link} from "gatsby"

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}

// markup
const NotFoundPage = () => {
    return (
        <main style={pageStyles}>
      <title>Loading...</title>
      <h1 style={headingStyles}>Loading, please wait...</h1>
      <p style={paragraphStyles}>
        Hang on{" "}
        <span role="img" aria-label="Hourglass emoji">
          ⏳
        </span>{" "}
        while we prepare your content.
        <br />
        {/*{process.env.NODE_ENV === "development" ? (*/}
        {/*    <>*/}
        <br />
        If you're curious, you can explore more in{" "}
        <code style={codeStyles}>src/pages/</code>.
        <br />
        {/*</>*/}
        {/*) : null}*/}
        <br />
        <Link to="/">Return to the main page</Link>.
      </p>
    </main>
    )
}

export default NotFoundPage
