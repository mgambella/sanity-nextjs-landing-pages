import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'j4s6958c',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

export default client
