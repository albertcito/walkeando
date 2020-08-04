module.exports = {
  title: 'Walkeando',
  tagline: 'Pronto más información',
  url: 'https://albertcito.github.com',
  baseUrl: '/walkeando/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'albertcito', 
  projectName: 'walkeando',
  themeConfig: {
    navbar: {
      title: 'Walkeando.org',
      logo: {
        alt: 'Walkeando',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://www.facebook.com/walkeando',
          label: 'Facebook',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Walkeando. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
