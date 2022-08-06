import './style.css'
import typescriptLogo from './typescript.svg';
import Navigo from "navigo";
import AdminPage from './pages/Admin/index';
import AddProductPage from './pages/Admin/Product/add';
import EditProductPage from "./pages/Admin/product/edit";
import homePage from './pages/homePage/home';
import detailPage from './pages/detailPage/detail';
import Signup from './pages/auth/signup';
import Signin from './pages/auth/signin';
const router = new Navigo('/', { linksSelector: "a" });

export type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void
}
const print = async (component: ComponentBase, id: any) => {
  console.log(id)
  document.getElementById('app').innerHTML = await component.render(id)
  if (component.afterRender) {
    component.afterRender(id)
  }
}

router.on({
  "/": () => {
    print(homePage)
  },
  "/products/:id": (value) => {
    console.log(value.data.id);
    print(detailPage, value.data.id);
  },
  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  },
  "/admin/products/edit/:id": (a) => {
    const id = a.data.id
    console.log(id)
    print(EditProductPage, id)
  },
  "/singup": () => {
    print(Signup)
  },
  "/singin": () => {
    print(Signin)
  }
})
router.resolve()