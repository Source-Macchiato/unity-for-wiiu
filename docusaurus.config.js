// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unity for Wii U',
  tagline: 'How to create Unity games on Wii U',
  favicon: 'img/favicon.ico',

  url: 'https://portal-wii-u-edition.github.io',
  baseUrl: '/',

  organizationName: 'Portal-Wii-U-Edition',
  projectName: 'portal-wii-u-edition.github.io',
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        path: 'en',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr',
        path: 'fr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Unity for Wii U',
        logo: {
          alt: 'Unity for Wii U Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Portal-Wii-U-Edition',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
              {
                label: 'Setup',
                to: '/docs/setup',
              },
              {
                label: 'Code',
                to: '/docs/code',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@portal-wiiu-edition',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/Cpm5nAEEzY',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@portal.wiiu.edition',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Portal-Wii-U-Edition',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Unity for Wii U, By Source Macchiato.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
