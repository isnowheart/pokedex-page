import regions from './regions'
import pokedexes from './pokedexes'

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
    ...regions(componentImport),
    ...pokedexes(componentImport),
  ]