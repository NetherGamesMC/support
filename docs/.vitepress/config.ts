export default {
    lang: 'en-US',
    title: 'NetherGames',
    description: 'Support page for NetherGames Network',
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ],
    themeConfig: {
        logo: {
            dark: 'dark.png',
            light: 'light.png'
        },
        sidebar: [
          {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/jobs' },
          { text: 'Getting Started', link: '/privacy-policy' },
          ...
        ]
      }
    ]
        siteTitle: false,
        editLink: {
            pattern: 'https://github.com/NetherGamesMC/support/edit/master/docs/:path'
        },
        search: {
            provider: 'local'
        },
        footer: {
            copyright: '© 2023 Helpdesk | <a href="https://nethergames.org">NetherGames Network</a>'
        },
        nav: [
            {
                text: 'Home',
                link: 'https://nethergames.org',
            },
            {
                text: 'Portal',
                link: 'https://portal.nethergames.org',
            },
            {
                text: 'Store',
                link: 'https://store.nethergames.org',
            },
            {
                text: 'Vote',
                link: 'https://ngmc.co/vote',
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/ng',
            },
            {
                text: 'Request',
                link: 'https://ngmc.co/request',
            }
        ]
        
    }
}
