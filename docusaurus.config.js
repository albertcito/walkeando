module.exports = {
  title: 'Walkeando',
  tagline: 'Pronto más información',
  url: 'https://sanandoelmundo.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'albertcito', 
  projectName: 'walkeando',
  themeConfig: {
    navbar: {
      title: 'Sanando el Mundo',
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
          label: 'Sigueme en Facebook',
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
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/albertcito/walkeando/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/albertcito/walkeando/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
