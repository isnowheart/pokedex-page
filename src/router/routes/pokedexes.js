export default componentImport => [
  {
    path: '/pokedexes/:pokedexName',
    component: componentImport('pokedexes/Base'),
    children: [
      {
          path: '/',
          name: 'pokedexes.pokemonsList',
          component: componentImport('pokedexes/PokemonList')
      }
  ],
    }
]

