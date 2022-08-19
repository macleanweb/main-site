import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())

export const overwrite = true
export const schema = {
  [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`]:
    {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
}
export const generates = {
  'src/schema.ts': {
    plugins: ['typescript'],
  },
}
