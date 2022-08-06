import { getProducts, remove } from "../../api/product"
import header from "../../components/header";
import menu from "../../components/menu";
import Product from "../../model/product"

const AdminPage = {
    render: async () => {
        const res = await getProducts()
        const data: Product[] = res.data
        console.log(data)
        console.log(data.map((p) => (p._id)))
        return /*html*/`
        ${header.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${menu.render()}
            </div>
            <div class="grow px-4">
                <div class="flex justify-between">
                    <div>
                    Sản phẩm chung
                    </div>
                    <a href="/admin/products/add">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </a>
                </div>
                <table class="table-auto border mt-8" style="width:100%;">
                    <thead>
                    <tr>
                        <th class="w-[5%] border">#</th>
                        <th class="w-[15%] border">Tên sản phẩm</th>
                        <th class="w-[10%] border">Gía</th>
                        <th class="w-[30%] border">Mô tả</th>
                        <th class="w-[15%] border">danh mục</th>
                        <th class="w-[10%] border text-center">xóa</th>
                        <th class="w-[10%] border">Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${data.map((p, index) => /*html*/`
                        <tr>
                            <td class="border text-center">${index + 1}</td>
                            <td class="border">${p.name}</td>
                            <td class="border">${p.originalPrice}</td>
                            
                            <td class="border">${p.description}</td>
                            <td>aaaa<td>
                            <button class="btn btn-danger btn-remove" style="margin-left: 30%;background-color: red;border-radius: 10px " data-id=${p._id
            }>Remove</button></td>
                            <td class="border">
                                <a href="/admin/products/edit/${p._id}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg></a>
                            </td>
                        </tr>
                    `).join('')}
                    </tbody>
                </table>         
            </div>
        </div>
        `
    },

    afterRender() {
        const btns = document.querySelectorAll('table .btn'); // nodeList=[btn]
        for (let btn of btns) {
            const id = btn.dataset.id;
            console.log(id)
            // event click
            btn.addEventListener('click', async function () {
                if (btn.classList.contains('btn-remove')) {
                    const confirm = window.confirm('Bạn có chắc chắn xóa không?');
                    if (confirm) {
                        const { data } = await remove(id);

                        if (data) {
                            alert('xóa thành thành công')
                            location.href = "/admin"
                        }
                    }
                }
            });
        }
    },
};

export default AdminPage