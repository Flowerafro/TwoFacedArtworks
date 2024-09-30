import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'lfub3coo',
    dataset: 'artworks',
    apiVersion: '2021-03-25',
    useCdn: true
})