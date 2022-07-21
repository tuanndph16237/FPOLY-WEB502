import {upload} from '../../../api/images'

const EditProductPage = {
	render: async () => {
		return /*html*/`
				<img id="edit-image"/>
				<input id="edit-file" type="file" accept="image/png, image/jpg, image/jpeg" />
        `
	},
	afterRender: async () => {
		const editFile = document.querySelector('#edit-file')
		const editImage = document.querySelector('#edit-image')

		editFile?.addEventListener('change', (event) => {
			const file = event.target.files[0]
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onloadend = async () => {
				const res = await upload(reader.result)
				console.log(res)
				const data = res.data
				editImage.src = data.url
			}
		})
	}	
}

export default EditProductPage;