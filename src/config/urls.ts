const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

const urls = {
	breeds: '/breeds',
	categories: '/categories',
	images: '/images/search',
	favorites:'/favorites'
}
// limit=10&page=0

export { apiKey, baseUrl, urls }