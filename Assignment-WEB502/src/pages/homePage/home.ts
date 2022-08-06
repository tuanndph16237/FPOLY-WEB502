import { getProducts } from "../../api/product"
import Product from "../../model/product"
import footer from "../../components/footer"
import header from "../../components/header"
import menu from "../../components/menu"
import banner from "../../components/banner"
import Category from "../../model/category"
import { getCategoryid } from "../../api/category"
const homePage = {
    render: async () => {
        const res = await getProducts()
        const data: Product[] = res.data
        console.log(data.map((p) => (p._id)));
        const res3 = await getCategoryid("62ec840af4785a23d87da017")
        const data3: Category[] = res3.data
        console.log(data3.products.map((p) => (`${p.name}`)).join(""))
        return /*html*/`
            ${header.render()}
        <div class="flex mt-4 divide-x">
            ${menu.render()}
            ${banner.render()}
        </div>    
        <h1 class="ml-20 mt-10 text-lg ">Sản Phẩm CHUNG</h1> 
        <div class="product ">
            
            <div class=" grid grid-cols-5 gap-6 m-10">
            ${data.map((p, index) => /*html*/`
                <div>
                    <a href="/products/${p._id}"><img src="${p.image}"  class="mb-2" alt=""></a>
                    <a href="/products/${p._id}"><p class="mb-2">${p.name}</p></a>
                    <label class="text-red-700 pr-4">${p.saleOffPrice}</label>
                    <label class="text-gray-400">${p.originalPrice}</label>
                    <p class="bg-gray-100 p-3 mt-2">${p.shortDescription}</p>
                </div>`).join('')}
            </div>
        </div>
        <div class="phukien mx-[100px]">
            <div class="grid grid-cols-2 mb-5 ">
                <h1 class="ml-20 mt-10 text-lg">PHỤ KIỆN</h1>
                <a href="#" class="ml-20 mt-10 ">Xem tất cả</a>
            </div>
            <div class="grid grid-cols-9 gap-4 mx-20">
                <div class="bg-[#FFB8B8] rounded-lg">
                <p class="text-white">Phụ kiện Apple</p>
                <img src="./public/image/phukien.jpg" alt="">
            </div>
            ${data3.products.map((p) => (`
            <div class="bg-[#FF94EB] rounded-lg">
            <p class="text-white">${p.name}</p>
                <img src="${p.image}" alt="">
            </div>
            `)).join("")}
           
        </div>
        </div>
  </div>
  <br>
  <br>
  ${footer.render()}
        `}
}

export default homePage