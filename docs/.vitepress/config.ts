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
        text: 'In-game Information',
        items: [
            { text: 'Anti-cheat', link: '/anti-cheat' },
            { text: 'Credits & Tiers', link: '/credits-and-tiers' },
            { text: 'Cosmetic Crate Keys', link: '/cosmetic-crate-keys' },
            { text: 'Friends System', link: '/friends-system' },
            { text: 'Guilds System', link: '/guilds-system' },
            { text: 'In-game Emojis', link: '/in-game-emojis' },
            { text: 'Map Rotations', link: '/map-rotations' },
            { text: 'Useful Commands', link: '/useful-commands' },
            { text: 'Season Rotations', link: '/season-rotations' },
            { text: 'Allocation of XP', link: '/allocation-of-xp' }
        ]
        },
        {
        text: 'Policies',
        items: [
            { text: 'Terms of Service', link: '/terms-of-service' },
            { text: 'Enforcement System', link: '/enforcement-system' },
            { text: 'Allowed Modifications', link: '/allowed-modifications' },
            { text: 'Refund Policy', link: '/refund-policy' },
            { text: 'Privacy Policy', link: '/privacy-policy' },
            { text: 'Discord Server Regulations', link: '/discord-server-regulations' },
            { text: 'Branding Guidelines', link: '/branding-guidelines' }
        ]
        },
        {
        text: 'Tutorials',
        items: [
            { text: 'Appealing a Punishment', link: '/appealing-a-punishment' },
            { text: 'Buying a Premium Rank', link: '/buying-a-premium-rank' },
            { text: 'Connecting on Mobile & Console', link: '/connecting-on-mobile-and-console' },
            { text: 'Contacting Modmail', link: '/contacting-modmail' },
            { text: 'Joining our Discord Server', link: '/joining-our-discord-server' },
            { text: 'Paying with Paysafecard', link: '/paying-with-paysafecard' },
            { text: 'Voting for the Server', link: '/voting-for-the-server' },
            { text: 'Reporting a Bug', link: '/reporting-a-bug' },
            { text: 'Reporting a Player', link: '/reporting-a-player' },
            { text: 'Submitting Feedback', link: '/submitting-feedback' },
            { text: 'Syncing Ranks & Tiers to Discord', link: '/syncing-ranks-and-tiers-to-discord' },
            { text: 'Titan Rank Questions', link: '/titan-perks-faq' }
        ]
        },
        {
        text: 'Applications',
        items: [
            { text: 'Jobs', link: '/jobs' },
            { text: 'Applying for Staff', link: '/applying-for-staff' },
            { text: 'Applying for a YouTube Rank', link: '/applying-for-a-youtube-rank' },
            { text: 'Partner Program', link: '/partner-program' },
        ]
        },  
        {
        text: 'Troubleshooting',
        items: [
            { text: 'This Username Is Already Registered', link: '/this-username-is-already-registered' },
            { text: 'Troubleshooting Connection Issues', link: '/troubleshooting-connection-issues' },
            { text: 'Unable to Change My \"About Me\"', link: '/unable-to-change-my-about-me' },
        ]
        },  
        {
        text: 'Factions & Skyblock',
        items: [
            { text: 'Rollbacks in Factions & Skyblock', link: '/rollbacks-in-factions-and-skyblock' },
            { text: 'Scamming in Factions & Skyblock', link: '/scamming-in-factions-and-skyblock' },
            { text: 'Skyblock Crates & Enchantments', link: '/skyblock-crates-and-enchantments' },
            { text: 'Skyblock Kits', link: '/skyblock-kits' },
            { text: "Skyblock Crate Keys", link: "/skyblock-crate-keys" },
            { text: "Factions Crate Keys", link: "/factions-crate-keys" }
        ]
        },
        {
        text: 'Other',
        items: [
            { text: 'Frequently Asked Quesitons', link: '/faq' },
            { text: 'Nitro Boosting Rewards', link: '/nitro-boosting-rewards' },
            { text: 'Security Bug Bounty', link: '/security-bug-bounty' },
            { text: 'API Documentation & Usage', link: '/api-documentation-and-usage' },
            { text: 'Localised Pricing', link: '/localised-pricing' },
            { text: 'Sending & Receiving Gifts', link: '/sending-and-receiving-gifts' }

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
            copyright: '© 2024 Helpdesk | <a href="https://nethergames.org">NetherGames Network</a>'
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
