import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/#about'),
    },
    {
      text: 'Projects',
      href: getPermalink('/#projects'),
    },
    {
      text: 'Skills',
      href: getPermalink('/#skills'),
    },
    {
      text: 'Writing',
      href: getPermalink('/#writing'),
    },
    {
      text: 'GitHub',
      href: 'https://github.com/arvindrangarajan2024',
      target: '_blank',
    },
    {
      text: 'Medium',
      href: 'https://medium.com/@arvind-rangarajan',
      target: '_blank',
    },
  ],
  actions: [
    {
      text: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/arvindrangarajan1/',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Connect',
      links: [
        { text: 'GitHub', href: 'https://github.com/arvindrangarajan2024' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/arvindrangarajan1/' },
        { text: 'Medium', href: 'https://medium.com/@arvind-rangarajan' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/arvindrangarajan2024' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/arvindrangarajan1/' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Arvind Rangarajan. All rights reserved.
  `,
};
