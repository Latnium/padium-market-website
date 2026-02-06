export const homepageQuery = `
  *[_type == "page" && site == "padmium" && slug.current == "home"][0] {
    ...,
    sections[] {
      ...,
      "image": image.asset->,
      "backgroundImage": backgroundImage.asset->,
      integrations[] {
        ...,
        "logo": logo.asset->
      },
      paymentMethods[] {
        ...
      }
    },
    "ogImage": seo.ogImage.asset->
  }
`;

export const siteSettingsQuery = `
  *[_type == "siteSettings" && site == "padmium"][0] {
    ...,
    "logo": logo.asset->,
    "favicon": favicon.asset->
  }
`;

export const mediaQuery = `
  *[_type == "media" && site == "padmium"] {
    ...,
    "image": image.asset->,
    "video": video.asset->
  }
`;
