import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    {data.allMarkdownRemark.edges.map((post) => <p key={post.node.id}><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></p>)}
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage;

export const postsQuery = graphql`
query PostsQuery {
  allMarkdownRemark(
    limit: 10,
    filter: {
      frontmatter: {
        draft: {
          eq: false
        }
      }
      }
  ) {
  edges {
    node  {
      id
      frontmatter {
        title
        path
        draft
      }
    }
  }
}
}
`