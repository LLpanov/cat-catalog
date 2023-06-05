import { axiosService } from '@/services/axios.service.ts'
import { urls } from '@/config/urls.ts'
import { IImage } from '@/interfaces/image.interface.ts'

export const imageService = {
	getRandomImage: async (limit: number = 5): Promise<IImage[]> => {
		try {
			const response = await axiosService.get(urls.images, { params: { limit } });
			return response.data;
		} catch (error) {
			console.error( error);
			throw error;
		}
	}
};