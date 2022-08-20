import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/Layout/Layout'
import { Homepage } from '../src/schema'
import { makeContentfulQuery } from '../utils/contentfulUtils'

interface Props {
  homePageData: Homepage
}

const Home: NextPage<Props> = ({ homePageData }) => {
  const seoMeta = homePageData?.seoMeta || null
  return (
    <>
      <Head>
        <title>{seoMeta?.pageTitle || 'MacLean Web'}</title>
        <meta
          name="description"
          content={seoMeta?.pageDescription || 'Andrew MacLean Web Developer'}
        />
      </Head>
      <Layout pageData={homePageData} />
    </>
  )
}

export async function getStaticProps() {
  const homepageQuery = `
    query {
      homepageCollection {
        items {
          seoMeta {
            pageTitle
            pageDescription
            pageImage {
              url
            }
          }
          title
          mainContent {
            json
          }
          image {
            url
            description
          }
        }
      }
    }
  `
  const data = await makeContentfulQuery(homepageQuery)
  const homepageData = data.homepageCollection.items[0]

  return {
    props: {
      homePageData: homepageData,
    },
  }
}

export default Home
