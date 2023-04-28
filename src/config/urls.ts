const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

const urls = {
	breeds: '/breeds',
	categories: '/categories',
	images: '/images/search',
	favorites:'/favorites'
}

export { apiKey, baseUrl, urls }