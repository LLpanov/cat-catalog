import axios from 'axios'
import { apiKey, baseUrl } from '@/config/urls.ts'

export const axiosService = axios.create({
	baseURL: baseUrl,
	headers: {
		'x-api-key': apiKey
	}
})