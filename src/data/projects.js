import recipesApp from '../assets/recipesApp.png'
import storeManager from '../assets/storeManager.png'
import emConstrucao from '../assets/emConstrucao.png'
import apiBlog from '../assets/apiBlogs.png'

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
    name: 'API de Blogs',
    img: apiBlog,
    description:
      'Uma API e um banco de dados para a produção de conteúdo para um blog!',
    projectLink: '',
    codeLink: 'https://github.com/IsraelViPe/blogs-api',
    title: 'API de Blogs',
    tags: ['API rest', 'nodeJS']
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
