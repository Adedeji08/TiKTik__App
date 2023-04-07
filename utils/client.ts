import sanityConfig from '@/sanity-backend/sanity.config';
import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'rj48prz4',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
