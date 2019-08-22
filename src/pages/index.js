import React from 'react'
import ReactGA from 'react-ga'
import { useStaticQuery, graphql } from 'gatsby'

import ButtonLink from 'components/ButtonLink'
import Layout from 'components/Layout'
import Content from 'components/Content'
import SEO from 'components/Seo'
import Social from 'components/Social'
import GridTemplate from 'components/GridTemplate'
import BlogList from 'components/BlogList'

const trackLanguageClick = () => {
  ReactGA.event({
    category: 'Home',
    action: 'click',
    label: `Home - Go to english`
  })
}

const content = ({ site }) => {
  return (
    <section>
      <Social />
      <ButtonLink
        to="/en/"
        title="View in english"
        onClick={trackLanguageClick()}>
          View in english
      </ButtonLink>
      <Content>
        <h1>Eai... <span
          className="small"
          role="img"
          aria-label="Emoji mostrando a lingua">😜</span>
        </h1>

        <p>{site.siteMetadata.description}</p>

        <p>Atualmente estou trabalhando no <a href="https://cubo.network/jobs" target="_blank" rel="noopener noreferrer" title="Ver">Cubo Itaú</a> e sou criador da organização <a href="https://github.com/frontendbr" target="_blank" rel="noopener noreferrer" title="Ver">Front-end BR</a> no Github.</p>
      </Content>
      <BlogList />
    </section>
  )
}

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title={site.siteMetadata.title} />
      <GridTemplate content={content({ site })} />
    </Layout>
  )
}

export default IndexPage
