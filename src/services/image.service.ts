import { axiosService } from '@/services/axios.service.ts'
import { urls } from '@/config/urls.ts'
import { IImage } from '@/interfaces/image.interface.ts'

export const imageService = {
	getRandomImage: (limit: number = 5): Promise<IImage[]> => axiosService.get(urls.images, { params: { limit } }).then(response => response.data)
}