import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lvwebdesign.group',
      lastModified: '2025-06-08',
      changeFrequency: 'weekly',
      priority: 0.5,
      images: ['https://lvwebdesign.group/people/Yuni.png'],
    },
  ]
}