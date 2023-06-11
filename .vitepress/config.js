import { defineConfig } from 'vitepress'

const openSource = {
  text: 'Open Source',
  link: '/open-source/',
  items: [
    { text: 'Libs', link: '/open-source/libs'},
    { text: 'Project MUA', link: '/open-source/project-mua'}
  ]
}

const sideProjects = {
  text: 'Side Projects',
  link: '/side-projects/',
  items: [
    { text: 'Investor Evaluation', link: '/side-projects/investor-evaluation' },
    { text: 'BlueFox Email', link: '/side-projects/bluefox-email' },
    { text: 'Email Assistant', link: '/side-projects/email-assistant' },
    { text: 'Recruitment Agency', link: '/side-projects/recruitment-agency' },
    { text: 'Build, show & tell', link: '/side-projects/build-show-and-tell' }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'GYN.WTF',
  description: 'This is a Web Technology Forum',
  head: [
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-FQ3VVWJD1R' }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-FQ3VVWJD1R');`]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './logo.png',
    nav: [
      { text: 'Home', link: '/' },
      sideProjects,
      openSource,
      { text: 'About', link: '/about'}
    ],

    sidebar: [
      { text: 'About', link: '/about' },
      sideProjects,
      openSource,
      { text: 'Red Ocean', link: '/red-ocean/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gyulanemeth' },
      { icon: 'twitter', link: 'https://twitter.com/gyulanemeth85'}
    ],
    smoothScroll: true
  }
})
