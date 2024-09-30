import { client } from "./client";

export async function fetchArtworks() {
    const data = await client.fetch(`*[_type == "artworks"] | order(id asc) {
        _id,
        id,
        title,
        name,
        year,
        "imageUrl": image.asset->url,
        "watermarkImageUrl": imagewatermark.asset->url}`)

        console.log(data);
        return data;
}