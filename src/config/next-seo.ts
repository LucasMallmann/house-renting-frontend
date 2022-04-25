const title = 'House Renting'

const description = 'Procure a casa dos seus sonhos agora mesmo!'

export const SEO = {
  title,
  description,
  canonical: 'https://personal-blog-coral.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://personal-blog-coral.vercel.app',
    title,
    description,
    images: [
      {
        url: 'https://personal-blog-coral.vercel.app/static/images/banner.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@lucasmallmann76',
    site: '@lucasmallmann76',
    cardType: 'summary_large_image'
  }
}
