export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '633df19a87f9d90070f2ad2d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g2rgpu68',
                  apiId: 'ead7e19e-6ba2-4768-8da7-0ab26cb7180b'
                },
                {
                  buildHookId: '633df19a66844c08349ed31e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nfz97xxa',
                  apiId: 'b967b2a4-7d42-4de8-bc87-c2db2dcf12b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mgambella/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nfz97xxa.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
