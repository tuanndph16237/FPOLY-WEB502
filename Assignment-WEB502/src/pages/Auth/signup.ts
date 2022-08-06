import { singup } from "../../api/users"
const Signup = {
    render: async () => {
        return /*html*/`
        <div class="bg-gray-100 h-[100vh] flex justify-center items-center">
            <div class="w-[800px] bg-white flex">
            <div class="w-[500px] flex-none p-[45px]">
            <form id="formSignup">
                <div class="">
                    <label class="block text-lg font-medium text-gray-700">Email</label>
                    <input id="email" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="text" >
                    <div class="text-red-500 text-sm hidden error"></div>
                </div>
                <div class="">
                    <label class="block text-md font-medium text-gray-700">Số điện thoại</label>
                    <input id="phone" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="text" >
                    <div class="text-red-500 text-sm error"></div>
                </div>
                <div class="">
                    <label class="block text-md font-medium text-gray-700">Mật khẩu</label>
                    <input id="password" class="block border w-full rounded-sm border-gray-200 mt-2 p-1 outline-none" type="password" >
                    <div class="text-red-500 text-sm error"></div>
                </div>
                <button id="btn-submit" class="block mt-2 py-4 text-center bg-red-600 text-white w-full">Đăng kí</button>
            </div>
            </form>
            <div class="grow p-[55px] bg-gray-50 flex justify-center items-center">
                <img src="./public/image/logo.png" alt="">
            </div>
            </div>
        </div>
        `
    },
    afterRender() {
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener('submit', async function (e) {
            e.preventDefault();

            const user = {
                email: document.querySelector('#email').value,
                phone: document.querySelector("#phone").value,
                password: document.querySelector('#password').value,
            };
            const result = await singup(user);
            if (result) {
            }
            // call api
            // add(product);
            // window.location.href = '/#/admin/product';
        });
    },

}

export default Signup;