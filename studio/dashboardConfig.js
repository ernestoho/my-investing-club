export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '627a9b7720e2f1514af48c71',
                  title: 'Sanity Studio',
                  name: 'my-investing-club-studio',
                  apiId: 'cdf15679-9766-4799-877c-ac7d6c9cf963'
                },
                {
                  buildHookId: '627a9b7750d796513c8322c9',
                  title: 'Blog Website',
                  name: 'my-investing-club',
                  apiId: 'e4aa25f6-90e6-4140-8a34-162272d7890e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ernestoho/my-investing-club',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://my-investing-club.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
