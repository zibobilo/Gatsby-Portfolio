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
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <div className="primary-content">Hi there, I previously studied to get a bachelor’s degree in Communication and a master’s degree in Digital Communication. 
          My background entails 4+ years in web designing using WordPress and implementing SEO practices with various clients. 
          In September 2019, I graduated from Wyncode Academy with a Full Stack Web Developer certification. 
          Since then, I have been developing meaningful projects such as an educational game - 'Geography Quiz'. 
          I coded this game using Vanilla JS, CSS, HTML. 
          Recently, I also worked with Code of South FL & Community Justice Project to develop a website called 
          'Florida Eviction Protection'. Within this project, I led the developing of the core functionality using JS, 
          Rest APIs, CSS, & UX/UI guidelines. I am passionate about not only coding, but coding in the most efficient and 
          optimized manner. I am very curious when it comes to learning more about web development, I love solving overly 
          complicated algorithm problems. I tend to see coding as the evolution of our society and all its possible 
          applications to our everyday lives. 
          I am eager to keep learning and be able to contribute with my skills in a company.</div>
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
        <a href="https://burkdev.com/assets/Raphael-Burkhardt-resume.pdf" download="Raphael-Burkhardt-CV">
          <button className="button -primary">Download CV</button>
        </a>
      </div>
    )}
  />
)