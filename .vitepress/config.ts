import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  title: 'OnlyCards',
  description: 'Flashcards For Teachers',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }]],
  themeConfig: {
    logo: {
      src: '/icon.png',
      alt: 'OnlyCards',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/onlycards' },
    ],
    nav: [
      { text: 'Документация', link: '/product/overview' },
    ],
    sidebar: [
      {
        text: 'Продукт',
        items: [
          { text: 'Что такое OnlyCards', link: '/product/overview' },
        ],
      }
    ],
  },
})
