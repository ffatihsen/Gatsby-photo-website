import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"
import { node } from "prop-types";
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
//import Seo from "../components/seo"

const IndexPage = ({data}) => {
  console.log(data);
  return(
    <div>
      <h1>Merhaba</h1>
      <div className ="photos">
        {data.allFile.edges.map(({node})=>{
          return <Img key={node.id} fluid = {node.childImageSharp.fluid}></Img>
        })}

      </div>

      
  </div>
  )
}

export const pageQuery = graphql`
  {
  allFile(filter: {absolutePath: {regex: "//photos//"}}) {
    edges {
      node {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}

`

export default IndexPage
