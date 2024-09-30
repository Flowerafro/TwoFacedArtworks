import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'TwoFacedArtworks',

  projectId: 'lfub3coo',
  dataset: 'artworks',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
