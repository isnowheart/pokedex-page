import pokedexes from './pokedexes'
import pokemons from './pokemons'
import regions from './regions'

const componentImport = view => () => import(`@/views/${view}.vue`)

export default [
    {
      path: '/',
      name: 'home',
      component: componentImport('Index'),
    },
    {
      path: '/about',
      name: 'about',
      component: componentImport('About'),
    },
    ...pokedexes(componentImport),
    ...pokemons(componentImport),
    ...regions(componentImport),
  ]