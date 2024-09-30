// schema type image for all artworks
// type: document er brukt for å kunne lagre ekstra informasjon om artworks 
export const artworks = {
    title: 'artworks images',
    name: 'artworks',
    type: 'document',
    fields: [
        {
            name: 'id', // Id rep the order of the artwork
            title: 'ID',
            type: 'string',
        },
        {
            name: 'title', // ex: Love Blinds
            title: 'Title',
            type: 'string',
        },
        {
            name: 'name', // ex: loveblinds
            title: 'Name',
            type: 'string',
        },
        {
            name: 'year', // year artwork was created
            title: 'Year',
            type: 'string',
        }, 
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true, // Enables hotspot and crop functionality
            },
        },
        {
            name: 'imagewatermark',
            title: 'Image Watermark',
            type: 'image',
            options: {
              hotspot: true, // Enables hotspot and crop functionality
            },
        }

    ]
}