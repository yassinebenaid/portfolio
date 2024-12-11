import SanityClient from 'next-sanity-client';

import * as queries from './queries'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const client = new SanityClient({
  projectId,
  dataset,
  useCdn: process.env.NODE_ENV === 'production',
  queries,
});

export default client