export default componentImport => [
  {
    path: '/regions',
    component: componentImport('regions/Base'),
    children: [
      {
        path: '/',
        name: 'regions.index',
        component: componentImport('regions/Index'),
      },
      {
        path: ':regionName',
        name: 'regions.pokedexesList',
        component: componentImport('regions/PokedexList'),
    }
    ],
  }
]
