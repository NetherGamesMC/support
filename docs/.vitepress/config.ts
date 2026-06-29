export default {
    lang: 'en-US',
    title: 'NetherGames',
    description: 'Support page for NetherGames Network',
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ],
    cleanUrls: true,
    themeConfig: {
        sidebar: [
        {
        text: 'Server Closure',
        items: [
            { text: 'Closure Announcement', link: '/closure-announcement' },
            { text: 'Closure FAQ and Information', link: '/closure-info' }
        ]
        },
        {
        text: 'Policies',
        items: [
            { text: 'Terms of Service', link: '/terms-of-service' },
            { text: 'Refund Policy', link: '/refund-policy' },
            { text: 'Privacy Policy', link: '/privacy-policy' },
            { text: 'Discord Server Regulations', link: '/discord-server-regulations' },
            { text: 'Branding Guidelines', link: '/branding-guidelines' }
        ]
        },
        {
        text: 'Tutorials',
        items: [
            { text: 'Contacting Modmail', link: '/contacting-modmail' },
            { text: 'Joining our Discord Server', link: '/joining-our-discord-server' },
            { text: 'Linking Your NetherGames & Discord Account', link: '/linking-your-nethergames-and-discord-account' },
            { text: 'Titan Rank Questions', link: '/titan-perks-faq' },
            { text: 'Applying for a Refund', link: '/applying-for-a-refund' },
            { text: 'Managing Your Titan Subscription', link: '/managing-your-titan-subscription' }
        ]
        },
        {
        text: 'Other',
        items: [
            { text: 'Nitro Boosting Rewards', link: '/nitro-boosting-rewards' },
            { text: 'API Documentation & Usage', link: '/api-documentation-and-usage' }
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
            message: 'Thank you for supporting NetherGames Network between 2016 and 2026.',
            copyright: '© 2026 Helpdesk | <a href="https://nethergames.org">NetherGames Network</a>'
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
                link: 'https://discord.gg/UFQfD6ThVF',
            },
            {
                text: 'Contact Us',
                link: 'https://ngmc.co/request',
            }
        ]
        
    }
}
