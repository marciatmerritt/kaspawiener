import IconTelegram from '../components/icons/IconTelegram';
import IconTwitter from '../components/icons/IconTwitter';
import IconEmail from '~/components/icons/IconEmail';

export const siteData = {
  branding: {
    default: 'Bailey the WIENER',
    token: 'Bailey the $WIENER',
  },
  brand: {
    name: 'WIENER',
    logo: {
      src: '/images/logo.svg',
      fileName: 'logo.svg',
      width: 50,
      height: 50,
      provider: 'local',
    },
    tokenName: '$WIENER',
    tokenUrl: 'https://kas.fyi/token/krc20/WIENER',
  },
  siteName: 'Bailey the WIENER',
  siteDescription:
    'Join the fun with WIENER— the top dog on the Kaspa chain. Fast, fun, and ready for the next big trend.',
  social: [
    {
      id: 'telegram',
      icon: IconTelegram,
      title: 'Join the conversation on Telegram',
      url: 'https://t.me/+Civ_RQYiZH03Y2I5',
      meta: {},
    },
    {
      id: 'twitter',
      icon: IconTwitter,
      title: 'Follow us on Twitter',
      url: 'https://x.com/wienerKRC20',
      meta: {
        handle: '@wienerKRC20',
      },
    },
  ],
  contact: {
    email: {
      icon: IconEmail,
      title: 'Email',
      url: 'mailto:admin@wieneronkas.com',
    },
  },
  navigation: [
    { title: 'Home', href: '/' },
    { title: 'Story', href: '/story' },
    { title: 'Roadmap', href: '/roadmap' },
    { title: 'Tokenomics', href: '/tokenomics' },
    { title: 'Contact', href: '/contact' },
  ],
  links: [
    {
      title: 'Resources',
      items: [
        { title: 'Kas.fyi', href: 'https://kas.fyi/token/krc20/wiener' },
        { title: 'KRC-20', href: 'https://kasplex.org/' },
      ],
    },
    {
      title: 'Trade',
      items: [
        { title: 'KSPR Bot', href: 'https://t.me/kspr_home_bot?start=WdRcvw' },
        { title: 'Chainge (coming soon)', href: '/' },
      ],
    },

    {
      title: 'Kaspa',
      items: [
        { title: 'Docs', href: 'https://kaspa.org/' },
        {
          title: 'Explorer',
          href: 'https://explorer.kaspa.org/?_gl=1*zucsjw*_ga*MTU0NTUwNzk2NC4xNzM0MTE4NTEw*_ga_YSMK4G52CC*MTczNjQwNzQ0Ny4yMi4xLjE3MzY0MDc4NjEuMC4wLjA.',
        },
      ],
    },
  ],
  placeholders: {
    name: 'Satoshi $Wiener',
    project: 'Enter project name',
    email: 'satoshi@kaspa.org',
    message: 'Leave Bailey a message',
  },
} as const;
