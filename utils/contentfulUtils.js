const contentful = require('contentful')

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

const client = contentful.createClient({
  space: SPACE_ID,
  environment: ENVIRONMENT,
  accessToken: ACCESS_TOKEN,
})

export async function makeContentfulQuery(query) {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
    }
  )

  if (!result.ok) {
    console.error(result)
    return {}
  }

  const { data } = await result.json()
  console.log(data)
  return data
}
