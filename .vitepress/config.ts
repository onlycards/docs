import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  title: 'OnlyCards',
  description: 'Flashcards For Teachers',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }]],
  themeConfig: {
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
    outlineTitle: 'На этой странице',
    darkModeSwitchLabel: 'Тёмная тема',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },
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
          { text: 'Глоссарий', link: '/product/glossary' },
          { text: 'Для преподавателя', link: '/product/teacher-flow' },
          { text: 'Для ученика', link: '/product/student-flow' },
        ],
      },
      {
        text: 'Инструкции',
        items: [
          { text: 'Быстрый старт', link: '/guides/quick-start' },
          { text: 'Варианты использования', link: '/guides/use-cases' },
        ],
      },
      {
        text: 'Часто задаваемые вопросы',
        link: '/faq'
      },
    ],
  },
})
