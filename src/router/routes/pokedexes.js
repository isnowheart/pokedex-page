export default componentImport => [
  {
    path: '/pokedexes',
    component: componentImport('pokedexes/Base'),
    children: [
      {
        path: '/',
        name: 'pokedexes.index',
        component: componentImport('pokedexes/Index'),
      },
      {
        path: ':pokedexName',
        name: 'pokedex.pokemonsList',
        component: componentImport('pokedexes/Pokemons'),
      }
  ],
    }
]

