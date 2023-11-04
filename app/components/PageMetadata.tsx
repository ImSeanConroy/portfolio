interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  link: string;
  image: string;
}

const PageMetadata = ({ title, description, keywords, link, image }: Metadata) => {
  return {
    metadataBase: new URL(link),
    title: title,
    description: description,
    keywords: keywords,
    authors: [
      { name: 'Sean Conroy', url: 'https://www.imseanconroy.co.uk' }
    ],
    alternates: {
      canonical: link,
    },
    openGraph: {
      type: "website",
      url: link,
      title: title,
      description: description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Sean Conroy Portfolio Image'
        }
      ],
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      site: "@ImSeanConroy",
      title: title,
      description: description,
      creator: "@ImSeanConroy",
      images: [
        {
          url: image,
          alt: 'Sean Conroy Portfolio Image'
        }
      ],
    }
  };
}

export default PageMetadata;
