module.exports = {
  title: 'Sanando el Mundo',
  tagline: 'Servimos al Reino de Dios, promoviendo el evangelio que restaura la relación entre Dios y su creación. El cual trae una nueva vida, paz, descanso y esperanza a las personas y brinda justicia al oprimido. Con el objetivo de llegar a una sociedad de personas que aman y se preocupan por su prójimo.',
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
        alt: 'Sanando el Mundo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://www.facebook.com/curandoelmundo',
          label: 'Sigueme en Facebook',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: 
      `Copyright © ${new Date().getFullYear()} Sanando el Mundo. Built with Docusaurus. <br />
        Icon made by Freepik from www.flaticon.com
      `,
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
