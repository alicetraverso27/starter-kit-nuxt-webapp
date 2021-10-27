const structure = {
  htmlAttrs: {},
  meta: [],
  link: [],
}

const i18nHead = (tags = structure, i18nHead = structure) => {
  const htmlAttrs = { ...i18nHead.htmlAttrs, ...tags.htmlAttrs }
  const meta = Object.values({ ...i18nHead.meta, ...tags.meta })
  const link = Object.values({ ...i18nHead.link, ...tags.link })

  return {
    htmlAttrs,
    meta,
    link,
  }
}

const generateTags = (seo) => ({
  title: seo?.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: seo?.description,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: '',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: seo?.title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: seo?.description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: seo?.image?.url,
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: '',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: seo?.title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: seo?.description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: seo?.image?.url,
    },
  ],
})

export default (context, inject) => {
  inject('i18nHead', i18nHead)
  inject('generateTags', generateTags)
}
