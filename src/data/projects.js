import recipesApp from '../assets/recipesApp.png'
import storeManager from '../assets/storeManager.png'
import emConstrucao from '../assets/emConstrucao.png'

const projects = [
  {
    name: 'RecipesApp',
    img: recipesApp,
    description: 'Um app de receitas construído em React',
    projectLink: 'https://recipes-app-rose.vercel.app/',
    codeLink: 'https://github.com/IsraelViPe/recipesApp',
    title: 'RecipesApp',
    tags: ['web app', 'reactJS']
  },
  {
    name: 'StoreManager',
    img: storeManager,
    description:
      'Um sistema de gerenciamento de vendas no formato dropshipping em que é possível criar, \
      visualizar, deletar e atualizar produtos e vendas.',
    projectLink: '',
    codeLink: 'https://github.com/IsraelViPe/store-manager',
    title: 'StoreManager',
    tags: ['full stack', 'API rest', 'nodeJS']
  },
  {
    name: 'Em breve',
    img: emConstrucao,
    description: 'projeto em construção...',
    projectLink: '',
    codeLink: '',
    title: 'Em breve',
    tags: []
  },
  {
    name: 'Em breve',
    img: emConstrucao,
    description: 'projeto em construção...',
    projectLink: '',
    codeLink: '',
    title: 'Em breve',
    tags: []
  }
]

export default projects
