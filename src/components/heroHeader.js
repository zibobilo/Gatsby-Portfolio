import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div id="circle-shape">
          <img src="https://burkdev.com/assets/Raphael-Burkhardt-picture.jpg" alt="Raphael Burkhardt profile picture" className="curve">
          </img>
          <div className="headline">{data.site.siteMetadata.home.title}</div>
          <div 
            className="primary-content" 
            dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
          />
          <p className="primary-content" style={{alignText: "justify", textJustify: "inter-word"}}>I have a bachelor’s degree in Communication and a master’s degree in Digital Communication. 
          My background entails 4+ years in web design using WordPress and implementing SEO practices with various clients. 
          In September 2019, I graduated from Wyncode Academy with a Full Stack Web Developer certification. 
          Since then, I've been starting to develop meaningful projects that you can explore below. <b>I am passionate about not only coding, but coding in the most efficient and 
          optimized manner.</b> I am very curious when it comes to learning more about web development, I love solving overly 
          complicated algorithm problems. I tend to see coding as the evolution of our society and all its possible 
          applications to our everyday lives.</p>
        </div>
        <div className="primary-content"></div>
        <a className="primary-content" href="https://burkdev.com/assets/Raphael-Burkhardt-resume.pdf" download="Raphael-Burkhardt-CV">
          <button className="button -primary">Download Resume</button>
        </a>
      </div>
    )}
  />
)