export default {
    lang: 'en-US',
    title: 'NetherGames',
    description: 'Support page for NetherGames Network',
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ],
    themeConfig: {
        sidebar: [
        {
        text: 'In-game Information',
        items: [
            { text: 'Credits & Tiers', link: '/credits-and-tiers' },
            { text: 'Guilds System', link: '/guilds-system' },
            { text: 'Friends System', link: '/friends-system' },
            { text: 'In-game Emojis', link: '/in-game-emojis' },
            { text: 'Earning Cosmetic Crate Keys', link: '/earning-cosmetic-crate-keys' }
        ]
        },
        {
        text: 'Policies',
        items: [
            { text: 'Terms of Service', link: '/terms-of-service' },
            { text: 'Enforcement System', link: '/enforcement-system' },
            { text: 'Refund Policy', link: '/refund-policy' },
            { text: 'Privacy Policy', link: '/privacy-policy' },
            { text: 'Discord Server Regulations', link: '/discord-server-regulations' },
            { text: 'Branding Guidelines', link: '/branding-guidelines' }
        ]
        },
        ],
        logo: {
            dark: 'dark.png',
            light: 'light.png'
        },
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
                text: 'Contact Us',
                link: 'https://ngmc.co/request',
            }
        ]
        
    }
}
