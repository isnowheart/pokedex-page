export default componentImport => [
  {
    path: '/regions/:regionName',
    component: componentImport('regions/Base'),
    children: [
      {
          path: '/',
          name: 'regions.pokemonsList',
          component: componentImport('regions/PokedexList')
      }
    ],
  }
]
