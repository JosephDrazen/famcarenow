import React, { ReactElement } from 'react'
import { Link } from 'gatsby'

// @ts-expect-error
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout'
// @ts-expect-error
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO'

export default function NotFound(): ReactElement {
  return (
    <Layout title='Page not found!'>
      <SEO title='404: Not found'/>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        If you&#39;d like to go back to homepage, <Link to="/">click here</Link>
        .
      </p>
    </Layout>
  )
}
