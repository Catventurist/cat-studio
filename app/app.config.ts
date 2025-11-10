export default defineAppConfig({
  ui: {
    colors: {
      primary: 'purple',
      neutral: 'neutral'
    },
    footer: {
      slots: {
        root: 'border-t border-primary/40',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'CatStudio'
  },
  header: {
    title: 'CatStudio',
    to: '/',
    logo: {
      alt: 'CS',
      light: '/catbirch.webp',
      dark: '/catbirchdark.webp'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/catventurist',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Catventurist • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-telegram',
      'to': 'https://t.me/catventurists',
      'target': '_blank',
      'aria-label': 'TG'
    }, {
      'icon': 'i-simple-icons-hive-blockchain',
      'to': 'https://ecency.com/@catventurist',
      'target': '_blank',
      'aria-label': 'Hive'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/catventurist',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/catventurist',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/catventurist',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Nuxt UI docs',
        to: 'https://ui4.nuxt.com/docs/getting-started/installation/nuxt',
        target: '_blank'
      }]
    }
  }
})
