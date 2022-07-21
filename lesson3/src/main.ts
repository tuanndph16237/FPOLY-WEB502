import Navigo from 'navigo'
import '../style.css'
import Detail from './pages/Detail/detail';
import Game from './pages/game/game'
import HomePage from './pages/home/home'

interface Component {
  render: (param: any) => any;
  afterRender?: () => any 
}

const print = async (component: Component, params: any) => {
  document.getElementById('root').innerHTML = await component.render(params)
  if (component.afterRender) {
    component.afterRender()
  }
}

const router = new Navigo('/', {linksSelector: 'a'})
router.on({
  "/": function(params: any) {
    print(HomePage, params)
  },
  "/pokemon/:id": function(params: any) {
    print(Detail, params)
  },
  "/game": function(params: any) {
    print(Game, params)
  }
})

router.resolve()
